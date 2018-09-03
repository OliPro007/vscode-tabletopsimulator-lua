import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import * as net from 'net';
import * as path from 'path';
import * as vscode from 'vscode';
import { FileHandler, TTSLuaDir } from './filehandler';

export namespace TTSLua {
    const Domain = 'localhost';
    const ClientPort = 39999;
    const ServerPort = 39998;

    export class Manager extends vscode.Disposable {
        // For now it's gonna be public...
        public returnIds: Map<number, string>;

        private errors: any;
        private results: any;

        private save: Save;
        private lastObjectAddedTime?: Date;

        private context: vscode.ExtensionContext;
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
        }
    
        public dispose() {
            this.client.dispose();
            this.server.dispose();
        }

        private registerCommands() {
            this.context.subscriptions.push(vscode.commands.registerCommand('ttslua.getObjects', this.client.getScripts));
            this.context.subscriptions.push(vscode.commands.registerCommand('ttslua.saveAndPlay', this.client.saveAndPlay));
            this.context.subscriptions.push(vscode.commands.registerCommand('ttslua.openSaveFile', this.client.openSaveFile));
            this.context.subscriptions.push(vscode.commands.registerCommand('ttslua.createXml', this.client.createXml));
            this.context.subscriptions.push(vscode.commands.registerCommand('ttslua.executeLuaSelection', this.client.executeLuaSelection));
            this.context.subscriptions.push(vscode.commands.registerCommand('ttslua.generateGUIDFunction', this.client.generateGuid));
        }

        public getSave(): Save {
            return this.save;
        }

        public getLastObjectAddedTime(): Date {
            return this.lastObjectAddedTime;
        }
    
        public handleMessage(data: TTSData, fromTTS: boolean) {
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
                    this.client.saveAndPlayCompleted();
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

    class Client extends vscode.Disposable {
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
        
        }
        
        public async createXml(): Promise<void> {
        
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

    class Server extends vscode.Disposable {
        private manager: Manager;
        private server: net.Server;

        public constructor(manager: Manager) {
            super(() => this.dispose());

            this.manager = manager;
    
            if(!isCommuncationEnabled()) {
                this.server = undefined;
                return;
            }
    
            this.server = net.createServer(socket => {
                console.log(`New connection from ${socket.remoteAddress}`);
    
                socket.on('data', data => {
                    try {
                        let jsonData = JSON.parse(data.toString()) as TTSData;
                        this.manager.handleMessage(jsonData, true);
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
            this.server.listen(ServerPort, Domain);
        }
    
        public dispose() {
            if(this.server) {
                this.server.close();
            }

            console.log('Server disposed');
        }
    }

    function isCommuncationEnabled(): boolean {
        return vscode.workspace.getConfiguration('ttslua').get('communicationMode') as string !== 'disable';
    }

    function hashCode(s: string): number {
        let hash = 0;
        for (let i = 0; i < s.length; i++) {
            hash = hash * 31 + s.charCodeAt(i);
        }
    
        return hash;
    }

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
}