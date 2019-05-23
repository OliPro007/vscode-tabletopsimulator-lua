export interface TTSData {
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

export interface ScriptState {
    guid: string;
    name: string;
    script: string;
    ui?: string;
}

export interface Guid {
    parent: string;
    tag: string;
    Name: string;
    Nickname: string;
    Description: string;
    Transform: object;
    Tooltip: string;
}

export interface Save {
    guids: { [id: string]: Guid };
    savePath: string;
    timestamp?: Date;
}