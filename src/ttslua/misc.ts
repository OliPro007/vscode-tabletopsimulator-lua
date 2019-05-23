import * as vscode from 'vscode';

export const Domain = 'localhost';

export enum TTSServerMsg {
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

export enum TTSClientMsg {
    None = -1,
    GetScripts,
    SavePlay,
    Custom,
    Lua
}

export function isCommuncationEnabled(): boolean {
    return vscode.workspace.getConfiguration('ttslua').get('communicationMode') as string !== 'disable';
}

export function hashCode(s: string): number {
    let hash = 0;
    for (let i = 0; i < s.length; i++) {
        hash = hash * 31 + s.charCodeAt(i);
    }

    return hash;
}