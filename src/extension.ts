import * as vscode from 'vscode';
import { TTSLuaDir, tryCreateWorkspaceFolder } from './filehandler';
import { TTSLua } from './ttslua';

let manager: TTSLua.Manager;

export function activate(context: vscode.ExtensionContext) {
    console.log('The TTSLua extension is activating...');

    manager = undefined;

    // Check if the current workspace is set on the temporary directory
    let uri = vscode.Uri.file(TTSLuaDir);
    if(vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.findIndex(val => val.uri.fsPath === uri.fsPath) !== -1) {
        // Register the stop command to disable the interaction with TTS
        context.subscriptions.push(vscode.commands.registerCommand('ttslua.stop', stop));
        
        // Create the manager
        manager = new TTSLua.Manager(context);
        context.subscriptions.push(manager);

        console.log('Tabletop Simulator Interaction is active');
        vscode.window.showInformationMessage('Ready to work with Tabletop Simulator');
    } else {
        // Register the start command to enable the interaction with TTS
        context.subscriptions.push(vscode.commands.registerCommand('ttslua.start', start));

        console.log('Tabletop Simulator Interaction is not active');
    }

    // Register the help command (can be called in any state)
    context.subscriptions.push(vscode.commands.registerCommand('ttslua.help', help));

    console.log('The TTSLua extension is now active.');
}

// this method is called when your extension is deactivated
export function deactivate() {
    if(manager) {
        manager.dispose();
    }

    setCommandVisibility(false);
    console.log('The TTSLua extension is now inactive.');
}

async function start() {
    let uri = vscode.Uri.file(TTSLuaDir);
    if(!vscode.workspace.workspaceFolders || vscode.workspace.workspaceFolders.findIndex(val => val.uri.fsPath === uri.fsPath) === -1) {
        await setCommandVisibility(true);

        tryCreateWorkspaceFolder();

        vscode.workspace.updateWorkspaceFolders(
            0,
            vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders.length : null,
            {
                uri: uri
            }
        );
    }
}

async function stop() {
    await setCommandVisibility(false);

    vscode.workspace.updateWorkspaceFolders(0, vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders.length : null);
}

async function setCommandVisibility(enable: boolean) {
    await vscode.commands.executeCommand('setContext', 'ttslua.activated', enable);
}

function help() {
    let start: string;
    switch(process.platform) {
        case 'darwin':
            start = 'open';
            break;
        case 'win32':
            start = 'start';
            break;
        default:
            start = 'xdg-open';
    }
    
    require('child_process').execSync(`${start} https://github.com/Berserk-Games/atom-tabletopsimulator-lua/wiki`);
}