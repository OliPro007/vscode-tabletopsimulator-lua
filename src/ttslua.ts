import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import * as net from 'net';
import * as path from 'path';
import * as vscode from 'vscode';
import { FileHandler, TTSLuaDir } from './filehandler';

const Domain = 'localhost';
const ClientPort = 39999;
const ServerPort = 39998;

enum TTSServerMsg {
    None = -1,
    NewObjects,
    NewGame,
    Print,
    Error,
    Custom,
    Return,
    GameSaved,
    ObjectCreated
}

enum TTSClientMsg {
    None = -1,
    GetScripts,
    SavePlay,
    Custom,
    Lua
}

interface TTSData {
    messageID: number;

    customMessage?: any;
    error?: string;
    errorMessagePrefix?: string;
    guid?: string;
    message?: string;
    returnId?: number;
    returnValue?: any;
    savePath?: string;
    scriptStates?: ScriptState[];
}

interface ScriptState {
    guid: string;
    name: string;
    script: string;
    ui?: string;
}

interface Guid {
    parent: string;
    tag: string;
    Name: string;
    Nickname: string;
    Description: string;
    Transform: object;
    Tooltip: string;
}

interface Save {
    guids: { [id: string]: Guid };
    savePath: string;
    timestamp?: Date;
}

function hashCode(s: string): number {
    let hash = 0;
    for (let i = 0; i < s.length; i++) {
        hash = hash * 31 + s.charCodeAt(i);
    }

    return hash;
}

export class TTsLua {
    private errors: any;
    private results: any;
    private save: Save;
    private returnIds: Map<number, string>;

    public constructor() {
        this.errors = {};
        this.results = {};

        this.save = {
            guids: {},
            savePath: ''
        };

        this.returnIds = new Map<number, string>();
    }

    public startServer() {
        let server = net.createServer((socket) => {
            console.log(`New connection from ${socket.remoteAddress}`);

            socket.on('data', (data) => {
                try {
                    let jsonData = JSON.parse(data.toString());
                    this.handleMessage(jsonData, true);
                } catch(e) {
                    if(!String(e).startsWith('SyntaxError: Unexpected end of JSON input')) {
                        console.error(e);
                    }
                }
            });

            socket.on('error', (e) => {
                console.error(e);
            });
        });

        console.log(`Listening to ${Domain}:${ServerPort}`);
        server.listen(ServerPort, Domain);
    }

    private handleMessage(data: TTSData, fromTTS: boolean) {
        let id: TTSServerMsg = data.messageID;

        console.log(`Received message from TTS: [${TTSServerMsg[id]}]`);

        if(data.savePath && data.savePath !== undefined) {
            this.parseSavePath(data.savePath);
        }

        switch(id) {
            case TTSServerMsg.NewObjects:
                this.readFilesFromTTS(data.scriptStates, fromTTS);
                break;
            case TTSServerMsg.NewGame:
                this.readFilesFromTTS(data.scriptStates, false);
                //mutex.doingSaveAndPlay = false
                break;
            case TTSServerMsg.Print:
                console.log(data.message);
                break;
            case TTSServerMsg.Error:
                console.error(`${data.errorMessagePrefix} ${data.error}`);
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

    public async getScripts(): Promise<void> {
        // Show a modal confirmation dialog
        let chosen = await vscode.window.showInformationMessage(
            'Get Lua Scripts from game?\n\nThis will erase any changes that you have made in Visual Studio Code since the last Save & Play.',
            { modal: true },
            'Get Scripts'
        );
            
        if(chosen === 'Get Scripts') {
            console.log('Get Lua Scripts: Sending request to TTS...');
            //tabletopsimulatorlua.startConnection()
            //tabletopsimulatorlua.connection.write(`{messageID: ${TTSLuaMsg.GetObjects}}`)
            //net.createConnection()
            console.log(`{messageID: ${TTSClientMsg.GetScripts}}`);
            //let connection = net.createConnection(ClientPort, Domain);
        }
    }
    
    public async saveAndPlay(): Promise<void> {
    
    }
    
    public async openSaveFile(): Promise<void> {
    
    }
    
    public async createXml(): Promise<void> {
    
    }
    
    public async executeLuaSelection(): Promise<void> {
        
    }
    
    public async generateGuid(): Promise<void> {
    
    }

    private executeLua(lua: string, expectingReturn: boolean, guid?: string) {
        interface Message {
            messageID: number;
            guid: string;
            script: string;
            returnID?: number;
        }

        //start connection

        let msg: Message = { messageID: TTSClientMsg.Lua as number, guid: (guid) ? guid : '-1', script: lua };

        if(expectingReturn) {
            let code = hashCode(lua);
            msg.returnID = code;
            this.returnIds.set(code, lua);
        }

        // connection write
    }
}