import * as fs from 'fs';
import * as net from 'net';
import * as path from 'path';
import * as vscode from 'vscode';

import { FileHandler, TTSLuaDir } from '../filehandler';
import { ScriptState, TTSData } from './interfaces';
import { Manager } from './manager';
import { Domain, hashCode, isCommuncationEnabled, TTSClientMsg } from './misc';

const ClientPort = 39999;

export class Client extends vscode.Disposable {
    private manager: Manager;
    private connection: net.Socket;

    private saveAndPlayTimeout?: NodeJS.Timer;

    public constructor(manager: Manager) {
        super(() => this.dispose());

        this.manager = manager;
        this.connection = undefined;
    }

    public dispose() {
        if(this.connection) {
            this.connection.end();
        }

        console.log('Client disposed');
    }

    public async getScripts(): Promise<void> {
        if(!isCommuncationEnabled()) {
            return;
        }

        const Choice = 'Get Scripts';

        // Show a modal confirmation dialog
        let chosen = await vscode.window.showInformationMessage(
            'Get Lua Scripts from game?\n\nThis will erase any changes that you have made in Visual Studio Code since the last Save & Play.',
            { modal: true },
            Choice
        );
            
        if(chosen === Choice) {
            console.log('Get Lua Scripts: Sending request to TTS...');
            this.send(`{messageID: ${TTSClientMsg.GetScripts}}`);
        }
    }
    
    public async saveAndPlay(): Promise<void> {
        if(!isCommuncationEnabled()) {
            return;
        }

        if(this.saveAndPlayTimeout) {
            return;
        }

        let save = this.manager.getSave();

        // There is no save loaded, not doing Save & Play
        if(save.savePath === '' || !fs.existsSync(save.savePath)) {
            return;
        }

        // Check if objects were added in TTS since last get
        let lastObjectAddedTime = this.manager.getLastObjectAddedTime();
        if(lastObjectAddedTime && save.timestamp < lastObjectAddedTime) {
            // Ask the user to accept overwrite or cancel Save & Play
            let chosen = await vscode.window.showInformationMessage(
                'Overwrite Tabletop Simulator save?\nComponents have been added in Tabletop Simulator but have not been saved.  If you continue any such components may be lost.',
                { modal: true },
                'Overwrite'
            );

            if(!chosen) {
                return;
            }
        }       

        console.log('Save & Play: Sending request to TTS...');

        // Schedule a timeout in case a problem occurs and no response is received
        this.saveAndPlayTimeout = setTimeout(this.saveAndPlayCompleted, 3000);

        // Save all opened files before continuing
        if(!await vscode.workspace.saveAll(false)) {
            console.error('Unable to save all opened files');
            return;
        }

        console.log('Saved all opened files successfully');

        // Open all the files and retreive the ScriptStates
        let objects = new Map<string, ScriptState>();

        fs.readdirSync(TTSLuaDir).forEach(file => {
            let filePath = path.join(TTSLuaDir, file);
            if(!fs.statSync(filePath).isDirectory()) {
                // Extract the relevant info and create a new object placeholder if it doesn't exist
                if(!objects.has(file)) {
                    let tokens = file.split('.');
                    
                    objects.set(file, {
                        name: file,
                        guid: tokens[tokens.length - 2],
                        script: ''
                    });
                }

                // Complete the object placeholder with the content of the file
                if(filePath.endsWith('.ttslua')) {
                    let obj = objects.get(file);
                    obj.script = fs.readFileSync(filePath, 'utf8');

                    // included files...
                } else if(filePath.endsWith('.xml')) {
                    let obj = objects.get(file);
                    obj.ui = fs.readFileSync(filePath, 'utf8');
                }
            }
        });

        // Generate the message
        let message: TTSData = {
            messageID: TTSClientMsg.SavePlay,
            scriptStates: [...objects.values()]
        };

        // Send the message
        await vscode.window.showInformationMessage(`Sending ${message.scriptStates.length} files...`);

        this.send(JSON.stringify(message));
    }
    
    public async openSaveFile(): Promise<void> {
        let save = this.manager.getSave();
        if(save.savePath !== '') {
            let doc = await vscode.workspace.openTextDocument(vscode.Uri.file(save.savePath));
            await vscode.window.showTextDocument(doc, { preview: false, preserveFocus: true });
        }
    }
    
    public async createXml(): Promise<void> {
        if(!vscode.window.activeTextEditor) {
            return;
        }

        let fileName = vscode.window.activeTextEditor.document.fileName;
        if(!fileName.endsWith(".ttslua") || path.dirname(fileName) !== TTSLuaDir) {
            return;
        }

        fileName = fileName.replace(".ttslua", ".xml");

        let handler = new FileHandler(path.basename(fileName));
        if(!fs.existsSync(fileName)) {
            handler.create("");
        }

        await handler.open();
    }
    
    public async executeLuaSelection(): Promise<void> {
        
    }
    
    public async generateGuid(): Promise<void> {
    
    }

    public saveAndPlayCompleted() {
        if(this.saveAndPlayTimeout) {
            clearTimeout(this.saveAndPlayTimeout);
            this.saveAndPlayTimeout = undefined;
        }
    }

    private send(msg: string) {
        if(!isCommuncationEnabled()) {
            return;
        }

        if(this.connection) {
            this.connection.end();
        }

        this.connection = net.createConnection(ClientPort, Domain);

        this.connection.on('data', data => {
            try {
                let jsonData = JSON.parse(data.toString()) as TTSData;
                this.manager.handleMessage(jsonData, false);
            } catch(e) {
                console.error(e);
            }
        });

        this.connection.on('error', e => {
            this.connection.end();
        });

        this.connection.on('end', data => {
            this.connection = undefined;
        });

        this.connection.on('close', hadError => {
            this.connection = undefined;
        });

        this.connection.write(msg);
    }

    private executeLua(lua: string, expectingReturn: boolean, guid?: string) {
        interface Message {
            messageID: number;
            guid: string;
            script: string;
            returnID?: number;
        }

        let msg: Message = { messageID: TTSClientMsg.Lua as number, guid: (guid) ? guid : '-1', script: lua };

        if(expectingReturn) {
            let code = hashCode(lua);
            msg.returnID = code;
            this.manager.returnIds.set(code, lua);
        }

        this.send(JSON.stringify(msg));
    }
}