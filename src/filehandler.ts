import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import * as os from 'os';
import * as path from 'path';
import * as vscode from 'vscode';

export const TTSLuaDir = path.join(os.tmpdir(), 'TabletopSimulator', 'Tabletop Simulator Lua');

export class FileHandler {
    private basename: string;
    private tempFile: string;

    public constructor(basename: string) {
        this.basename = basename;
        this.tempFile = path.normalize(path.join(TTSLuaDir, this.basename));
    }

    public create(text: string) {
        let dirname = path.dirname(this.tempFile);
        mkdirp.sync(dirname);

        console.log(`Opening ${this.basename}...`);
        let file = fs.openSync(this.tempFile, 'w');

        console.log(`Writing data to ${this.basename}...`);
        fs.writeSync(file, text);

        fs.closeSync(file);
        console.log(`Closed ${this.basename}`);
    }

    public open(): Thenable<void> {
        return vscode.workspace.openTextDocument(vscode.Uri.file(this.tempFile)).then((doc) => {
            vscode.window.showTextDocument(doc, { preview: false, preserveFocus: true });
        });
    }
}