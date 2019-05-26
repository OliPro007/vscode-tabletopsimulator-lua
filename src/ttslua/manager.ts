import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import * as path from 'path';
import * as vscode from 'vscode';

import { FileHandler, TTSLuaDir } from '../filehandler';
import { Client } from './client';
import { Save, ScriptState, TTSData } from './interfaces';
import { TTSServerMsg } from "./misc";
import { Server } from './server';

export class Manager extends vscode.Disposable {
    // For now it's gonna be public...
    public returnIds: Map<number, string>;

    private errors: any;
    private results: any;

    private save: Save;
    private lastObjectAddedTime?: Date;

    private context: vscode.ExtensionContext;
    private outputChannel: vscode.OutputChannel;
    private client: Client;
    private server: Server;

    public constructor(context: vscode.ExtensionContext) {
        super(() => this.dispose());

        this.errors = {};
        this.results = {};

        this.save = {
            guids: {},
            savePath: ''
        };

        this.returnIds = new Map<number, string>();

        this.client = new Client(this);
        this.server = new Server(this);

        this.context = context;
        this.registerCommands();

        this.outputChannel = vscode.window.createOutputChannel('TTSLua');
    }

    public dispose() {
        this.client.dispose();
        this.server.dispose();
    }

    private registerCommands() {
        this.context.subscriptions.push(vscode.commands.registerCommand('ttslua.getObjects', this.client.getScripts, this.client));
        this.context.subscriptions.push(vscode.commands.registerCommand('ttslua.saveAndPlay', this.client.saveAndPlay, this.client));
        this.context.subscriptions.push(vscode.commands.registerCommand('ttslua.openSaveFile', this.client.openSaveFile, this.client));
        this.context.subscriptions.push(vscode.commands.registerCommand('ttslua.createXml', this.client.createXml, this.client));
        this.context.subscriptions.push(vscode.commands.registerCommand('ttslua.executeLuaSelection', this.client.executeLuaSelection, this.client));
        this.context.subscriptions.push(vscode.commands.registerCommand('ttslua.generateGUIDFunction', this.client.generateGuid, this.client));
    }

    public getSave(): Save {
        return this.save;
    }

    public getLastObjectAddedTime(): Date {
        return this.lastObjectAddedTime;
    }

    public getOutputChannel(): vscode.OutputChannel {
        return this.outputChannel;
    }

    public handleMessage(data: TTSData, fromTTS: boolean) {
        let id: TTSServerMsg = data.messageID;

        console.log(`Received message from TTS: [${TTSServerMsg[id]}]`);
        this.outputChannel.appendLine(`Received message from TTS: [${TTSServerMsg[id]}]`);

        if(data.savePath && data.savePath !== undefined) {
            this.parseSavePath(data.savePath);
        }

        switch(id) {
            case TTSServerMsg.NewObjects:
                this.readFilesFromTTS(data.scriptStates, fromTTS);
                break;
            case TTSServerMsg.NewGame:
                this.readFilesFromTTS(data.scriptStates, false);
                this.client.saveAndPlayCompleted();
                break;
            case TTSServerMsg.Print:
                //console.log(data.message);
                this.outputChannel.appendLine(data.message);
                this.outputChannel.show();
                break;
            case TTSServerMsg.Error:
                //console.error(`${data.errorMessagePrefix} ${data.error}`);
                this.outputChannel.appendLine(`${data.errorMessagePrefix} ${data.error}`);
                this.outputChannel.show();
                break;
            case TTSServerMsg.Custom:
                if('messageID' in data.customMessage) {
                    if(data.customMessage.messageID === 1) {
                        for(let key in data.customMessage) {
                            if(key.startsWith('error')) {
                                this.errors[parseInt(key.substring(5))] = data.customMessage[key];
                            } else if(key.startsWith('result')) {
                                this.results[parseInt(key.substring(6))] = data.customMessage[key];
                            }
                        }
                        
                        /*for(let key in this.errors) {
                            if(this.errors[key]) {
                                //panelView...
                            }
                        }*/
                    } else {
                        console.log(`Unknown custom message: messageID = ${data.customMessage.messageID}`);
                    }
                } else {
                    console.log(data.customMessage);
                }

                break;
            case TTSServerMsg.Return:
                let details: string;

                if(data.returnValue) {
                    details = `Return value: ${data.returnValue}`;

                    if(this.returnIds.has(data.returnId)) {
                        console.log({ code: this.returnIds.get(data.returnId), result: data.returnValue });
                        this.returnIds.delete(data.returnId);
                    } else {
                        console.log(data.returnValue);
                    }
                } else {
                    details = 'Nothing returned by code; end with a \'return\' statement to return something';
                }

                if(typeof(data.returnValue) === 'object') {
                    // TODO: Change to fit VSCode...
                    details += '\n\n- You can view and expand the returned object in \nthe dev console (ctrl-shift-i)';
                }

                vscode.window.showInformationMessage(details);
                break;
            case TTSServerMsg.ObjectCreated:
                console.log(`Component created: ${data.guid}`);
                this.lastObjectAddedTime = new Date(Date.now());
                break;
        }
    }

    private parseSavePath(savePath: string) {
        this.save.guids = {};

        if(savePath === '') {
            this.save.savePath = '';
            return;
        }

        this.save.savePath = path.normalize(savePath);

        console.log(`Parsing savepath ${this.save.savePath}`);
        this.recordSaveTimestamp();

        let json = JSON.parse(fs.readFileSync(this.save.savePath, 'utf8'));
        let walkSave = (node, parent: string) => {
            let nodes = [];
            let guid = parent;

            for(let k in node) {
                if(k === 'GUID') {
                    guid = node[k];
                    this.save.guids[guid] = { 
                        parent: parent,
                        tag: node.Name,
                        Name: node.Name,
                        Nickname: node.Nickname,
                        Description: node.Description,
                        Transform: node.Transform,
                        Tooltip: node.Tooltip
                    };
                } else if(typeof(node[k]) === 'object') {
                    nodes.push(k);
                }
            }

            for(let k of nodes) {
                walkSave(node[k], guid);
            }
        };

        walkSave(json, null);
    }

    private recordSaveTimestamp() {
        if(this.save.savePath !== '' && fs.existsSync(this.save.savePath)) {
            this.save.timestamp = fs.statSync(this.save.savePath).mtime;
        }
    }

    private readFilesFromTTS(scriptStates: ScriptState[], onlyOpen: boolean) {
        let toOpen: FileHandler[] = [];
        let sentFromTTS: { [id: string]: boolean } = {};

        try {
            mkdirp.sync(TTSLuaDir);
        } catch(e) { }
        
        // If the workspace is not configured correctly, we can't proceed
        let uri = vscode.Uri.file(TTSLuaDir);
        if(!vscode.workspace.workspaceFolders || vscode.workspace.workspaceFolders.findIndex(val => val.uri.fsPath === uri.fsPath) === -1) {
            vscode.window.showErrorMessage('The workspace is not opened on the Tabletop Simulator folder. The extension need to be restarted');
            return;
        }

        let count = 0;
        let mode = vscode.workspace.getConfiguration('ttslua').get('communicationMode') as string;
        let createXml = vscode.workspace.getConfiguration('ttslua').get('createXml') as boolean;

        scriptStates.forEach(f => {
            f.name = f.name.replace(/([":<>/\\|?*])/g, '');
            let basename = `${f.name}.${f.guid}.ttslua`;

            let handler = new FileHandler(basename);
            // Process include files...

            handler.create(f.script);
            // doCatalog??? <-- Seems to be linked to the function cataloging... may not be the same for vscode...
            if(onlyOpen || mode === 'all' || (mode === 'global' && false) || false) {
                toOpen.push(handler);
            }

            console.log(`Wrote Lua: ${{ basename: basename, text: f.script }}`);

            sentFromTTS[basename] = true;
            count++;

            if(f.ui || (onlyOpen && createXml)) {
                let basename = `${f.name}.${f.guid}.xml`;
                let handler = new FileHandler(basename);

                if(f.ui) {
                    handler.create(f.ui.trim());
                    console.log(`Wrote Xml: ${{ basename: basename, text: f.ui }}`);
                } else {
                    handler.create('');
                    console.log(`Created Xml: ${{ basename: basename, text: f.ui }}`);
                }

                if(onlyOpen || mode === 'all' || (mode === 'global' && false) || false) {
                    toOpen.push(handler);
                }

                sentFromTTS[basename] = true;
                count++;
            }
        });

        // Close all editors
        if(onlyOpen) {
            // Open files
            Promise.all(toOpen.map(f => f.open())).then(() => {
                // Notify the user
                vscode.window.showInformationMessage(`Received ${count} files`);
            });
        } else {
            vscode.commands.executeCommand('workbench.action.closeAllEditors').then(() => {
                // Remove all temp files that were not received
                fs.readdirSync(TTSLuaDir).forEach(file => {
                    let filePath = path.join(TTSLuaDir, file);
                    if(!(file in sentFromTTS) && !onlyOpen) {
                        try {
                            fs.unlinkSync(filePath);
                        } catch(e) {
                            console.error(e);
                        }
                    }
                });
    
                // Open files
                Promise.all(toOpen.map(f => f.open())).then(() => {
                    // Notify the user
                    vscode.window.showInformationMessage(`Received ${count} files`);
                });
            });
        }
    }
}