import * as net from 'net';
import * as vscode from 'vscode';

import { TTSData } from './interfaces';
import { Manager } from './manager';
import { Domain, isCommuncationEnabled } from './misc';

const ServerPort = 39998;

export class Server extends vscode.Disposable {
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