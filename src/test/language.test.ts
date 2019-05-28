import * as fs from 'fs';
import * as path from 'path';
import * as vstm from 'vscode-textmate';
import * as tm from '../language/textmate';

import * as assert from 'assert';

const globalTestContent =
`--[[ Lua code. See documentation: https://api.tabletopsimulator.com/ --]]

--[[ The onLoad event is called after the game save finishes loading. --]]
function onLoad()
    --[[ print('onLoad!') --]]
end

--[[ The onUpdate event is called once per frame. --]]
function onUpdate()
    --[[ print('onUpdate loop!') --]]
end`;

let grammarPaths = {
    'source.tts.lua': path.join(__dirname, '../../syntaxes/ttslua.tmLanguage.json')
};

let registry = new vstm.Registry({
    loadGrammar: (scopeName: string): Promise<vstm.IRawGrammar> => {
        let p = grammarPaths[scopeName];
        if (p) {
            return new Promise((c, e) => {
                fs.readFile(p, (error, content) => {
                    if (error) {
                        e(error);
                    } else {
                        let grammar = vstm.parseRawGrammar(content.toString(), p);
                        c(grammar);
                    }
                });
            });
        }

        return null;
    }
});

suite("Language Tests", async () => {
    test("Grammar test", async () => {
        let grammar = await registry.loadGrammar('source.tts.lua');

        let ruleStack: vstm.StackElement = null;
        globalTestContent.split('\n').forEach((line, index) => {
            let r = grammar.tokenizeLine(line, ruleStack);
            //console.log(`Line #${index}, tokens: ${r.tokens}`);
            ruleStack = r.ruleStack;
        });
    });

    test("getScopes", async () => {
        const line = 'function test(a, b, c)';
        let scopes: string[];

        scopes = await tm.getScopes(line, 2);
        assert.deepStrictEqual(scopes, ['source.tts.lua', 'meta.function.lua', 'keyword.control.lua']);

        scopes = await tm.getScopes(line, 11);
        assert.deepStrictEqual(scopes, ['source.tts.lua', 'meta.function.lua', 'entity.name.function.lua']);
    });
});