import * as fs from 'fs';
import * as path from "path";
import * as vscode from 'vscode';

const tm = getCoreNodeModule('vscode-textmate');

function getCoreNodeModule(moduleName: string) {
  try {
    return require(`${vscode.env.appRoot}/node_modules.asar/${moduleName}`);
  } catch (err) { }
  
  try {
    return require(`${vscode.env.appRoot}/node_modules/${moduleName}`);
  } catch (err) { }
  
  return null;
}

const grammarPaths = {
    'source.tts.lua': path.join(__dirname, '../../syntaxes/ttslua.tmLanguage.json')
};

let registry = new tm.Registry({
    loadGrammar: (scopeName) => {
        let p = grammarPaths[scopeName];
        if (p) {
            return new Promise((c, e) => {
                fs.readFile(p, (error, content) => {
                    if (error) {
                        e(error);
                    } else {
                        let grammar = tm.parseRawGrammar(content.toString(), p);
                        c(grammar);
                    }
                });
            });
        }

        return null;
    }
});

let grammar = null;

export async function getScopes(line: string, cursor: number): Promise<string[]> {
    if(!grammar) {
        grammar = await registry.loadGrammar('source.tts.lua');
    }

    let r = grammar.tokenizeLine(line);
    let token = r.tokens.find(token => {
        return cursor >= token.startIndex && cursor < token.endIndex;
    });

    if(token !== undefined) {
        return token.scopes;
    } else {
        return [];
    }
}