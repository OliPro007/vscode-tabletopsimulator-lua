import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        // Functions
        {
            snippet: 'byte(${1:string|s}, ${2:int|i}, ${3:int|j})',
            displayText: 'byte(string s, int i = 1, int j = i)',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the internal numerical codes of the characters s[i], s[i+1], ..., s[j].',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-string.byte'
        },
        {
            snippet: 'char(${1:int|c})',
            displayText: 'char(int c, [int c...])',
            type: 'function',
            leftLabel: 'string',
            description: 'Returns a string comprised of the integer char codes converted to chars and concatenated.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-string.char'
        },
        {
            snippet: 'dump(${1:function|f})',
            displayText: 'dump(function f)',
            type: 'function',
            leftLabel: 'string',
            description: 'Returns a string containing a binary representation of the given function.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-string.dump'
        },
        {
            snippet: 'find(${1:string|s}, ${2:string|pattern}, ${3:int|init}, ${4:bool|plain})',
            displayText: 'find(string s, string pattern, int init = 1, bool plain = false)',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the start and end indices of pattern in string, or nil.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-string.find'
        },
        {
            snippet: 'format(${1:string|formatstring}, ${2:...})',
            displayText: 'format(string formatstring, ...)',
            type: 'function',
            leftLabel: 'string',
            description: 'Returns a formatted version of its variable number of arguments following the description given in its first argument.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-string.format'
        },
        {
            snippet: 'gmatch(${1:string|s}, ${2:string|pattern})',
            displayText: 'gmatch(string s, string pattern)',
            type: 'function',
            leftLabel: 'function',
            description: 'Returns an iterator function that returns the next captures from pattern over the string s.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-string.gmatch'
        },
        {
            snippet: 'gsub(${1:string|s}, ${2:string|pattern}, ${3:string|repl}, ${4:int|n})',
            displayText: 'gsub(string s, string pattern, string repl, [int n])',
            type: 'function',
            leftLabel: 'string',
            description: 'Returns a string from pattern matched to s replaced with repl for n occurences.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-string.gsub'
        },
        {
            snippet: 'len(${1:string|s})',
            displayText: 'len(string s)',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the length of the string.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-string.len'
        },
        {
            snippet: 'lower(${1:string|s})',
            displayText: 'lower(string s)',
            type: 'function',
            leftLabel: 'string',
            description: 'Returns the string converted to lower case.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-string.lower'
        },
        {
            snippet: 'match(${1:string|s}, ${2:string|pattern}, ${3:int|init})',
            displayText: 'match(string s, string pattern, int init = 1)',
            type: 'function',
            leftLabel: 'captures',
            description: 'Returns the captures from pattern matched to s.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-string.match'
        },
        {
            snippet: 'rep(${1:string|s}, ${2:int|n}, ${3:string|sep})',
            displayText: "rep(string s, int n, string sep = '')",
            type: 'function',
            leftLabel: 'captures',
            description: 'Returns a string that is the concatenation of n copies of the string s separated by the string sep.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-string.rep'
        },
        {
            snippet: 'reverse(${1:string|s})',
            displayText: 'reverse(string s)',
            type: 'function',
            leftLabel: 'string',
            description: 'Returns the reverse of string.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-string.reverse'
        },
        {
            snippet: 'sub(${1:string|s}, ${2:int|i}, ${3:int|j})',
            displayText: 'sub(string s, int i, [int j])',
            type: 'function',
            leftLabel: 'string',
            description: 'Returns the substring of s that starts at i and continues until j.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-string.sub'
        },
        {
            snippet: 'unicode(${1:string|s}, ${2:int|i}, ${3:int|j})',
            displayText: 'unicode(string s, int i = 1, int j = i)',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the unicode numerical codes of the characters s[i], s[i+1], ..., s[j].',
            descriptionMoreURL: 'http://www.moonsharp.org/additions.html'
        },
        {
            snippet: 'upper(${1:string|s})',
            displayText: 'upper(string s)',
            type: 'function',
            leftLabel: 'string',
            description: 'Returns the string converted to upper case.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-string.upper'
        },
    ];
    return suggestions;
}
