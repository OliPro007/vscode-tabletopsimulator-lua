import * as decaffeinate from 'decaffeinate';
import * as fs from 'fs';
import * as path from 'path';
import * as request from 'request';

const url = 'https://raw.githubusercontent.com/Berserk-Games/atom-tabletopsimulator-lua/master/lib/provider.coffee';
const searchPrefix = '// Section:';
const searchEnd = '// End of sections';
const sectionFiles = {
    'Global object':     'globalObj.ts',
    'dynamic Class':     'dynamic.ts',
    'bit32 Class':       'bit32.ts',
    'math Class':        'math.ts',
    'string Class':      'string.ts',
    'table Class':       'table.ts',
    'turns Class':       'turns.ts',
    'ui Class':          'ui.ts',
    'coroutine Class':   'coroutine.ts',
    'os Class':          'os.ts',
    'Clock Class':       'clock.ts',
    'Counter Class':     'counter.ts',
    'Lighting':          'lighting.ts',
    'Notes':             'notes.ts',
    'Physics':           'physics.ts',
    'Player Colors':     'playerColors.ts',
    'Player Class':      'player.ts',
    'JSON Class':        'json.ts',
    'Time':              'time.ts',
    'WebRequest Class':  'webRequest.ts',
    'RPGFigurine Class': 'rpgFigurine.ts',
    'TextTool Class':    'textTool.ts',
    'Wait':              'wait.ts',
    'Object':            'object.ts',
    'Default Events':    'defaultEvents.ts',
    'Globally accessible constants & functions': 'globalConstFunc.ts'
};

function writeSnippets(code: string) {
    let start = code.indexOf(searchPrefix);
    let end = code.indexOf(searchEnd);
    let lines = code.substring(start, end).split('\n');

    let pattern = new RegExp(`\\s*${searchPrefix} ([\\S ]*)`);

    let generator = function*() {
        for(const [i, v] of lines.entries()) {
            if(v.includes(searchPrefix)) {
                yield i;
            }
        }
    }();

    console.log('Writing snippets...');
    let current = generator.next();
    while(!current.done) {
        let next = generator.next();

        let sectionName = lines[current.value].match(pattern)[1];
        
        // Ignore section Control blocks, it will be handled manually
        if('Control blocks' === sectionName) {
            console.warn('Skipping Section "Control blocks"');
            current = next;
            continue;
        }

        console.log(`Writing Section "${sectionName}"`);

        let section: string;
        if(!next.done) {
            section = lines.slice(current.value + 2, next.value).join('\n');
        } else {
            // Hack: Remove all blank lines at the end (as a string), then slice to remove the last line (the closing '}') 
            section = lines.slice(current.value + 2).join('\n').trimRight().split('\n').slice(0, -1).join('\n');
        }

        let fd = fs.openSync(path.join(__dirname, '..', '..', 'src', 'language', 'suggestions', sectionFiles[sectionName]), 'w');
        fs.writeSync(fd, "import { Suggestion } from './suggestion';\n\n");

        if('Default Events' === sectionName) {
            fs.writeSync(fd, 'export function getSuggestions(globalScript: boolean): Suggestion[] {\n');
        } else {
            fs.writeSync(fd, 'export function getSuggestions(): Suggestion[] {\n');
        }

        // The file won't be formatted correctly, it'll have to be fixed manually with IDE
        fs.writeSync(fd, '    let suggestions: Suggestion[] = [];\n');
        fs.writeSync(fd, section);
        fs.writeSync(fd, '\n    return suggestions;\n}\n');

        fs.closeSync(fd);

        current = next;
    }

    console.log('Done writing snippets');
}

function writeIndex() {
    console.log('Writing index.ts');

    let fd = fs.openSync(path.join(__dirname, '..', '..', 'src', 'language', 'suggestions', 'index.ts'), 'w');

    Object.values(sectionFiles).forEach(fileName => {
        let basename = path.basename(fileName, '.ts');

        let capitalized = function(s: string): string {
            return s.charAt(0).toUpperCase() + s.slice(1);
        }(basename);

        fs.writeSync(fd, `export { getSuggestions as get${capitalized}Suggestions } from './${basename}';\n`);
    });

    fs.closeSync(fd);

    console.log('Done writing index.ts');
}

request.get(url, (error: any, response: request.Response, atomFileContent: string) => {
    console.log(`Status code: ${response.statusCode}`);

    if(response.statusCode !== 200 && error) {
        console.error(error);
        return;
    }

    console.log('Decaffeinating code, it may take a while...');
    let code = decaffeinate.convert(atomFileContent, { useJSModules: true, loose: true }).code;
    console.log('Done decaffeinating');

    writeSnippets(code);
    writeIndex();
    
    console.log('Done!');
});