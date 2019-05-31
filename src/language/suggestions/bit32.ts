import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        // Functions
        {
            snippet: 'arshift(${1:int|x}, ${2:int|disp})',
            displayText: 'arshift(int x, int disp)',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the number x shifted disp bits to the right.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-bit32.arshift'
        },
        {
            snippet: 'band(${1:...})',
            displayText: 'band(...)',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the bitwise and of its operands.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-bit32.band'
        },
        {
            snippet: 'bnot(${1:int|x})',
            displayText: 'bnot(int x)',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the bitwise not of x.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-bit32.bnot'
        },
        {
            snippet: 'bor(${1:...})',
            displayText: 'bor(...)',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the bitwise or of its operands.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-bit32.bor'
        },
        {
            snippet: 'btest(${1:...})',
            displayText: 'btest(...)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Returns a boolean signaling whether the bitwise and of its operands is different from zero.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-bit32.btest'
        },
        {
            snippet: 'bxor(${1:...})',
            displayText: 'bxor(...)',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the bitwise xor of its operands.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-bit32.bxor'
        },
        {
            snippet: 'extract(${1:int|n, ${2:int|field}, ${3:int width})',
            displayText: 'extract(int n, int field, int width = 1)',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the unsigned number formed by the bits field to field + width - 1 from n.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-bit32.extract'
        },
        {
            snippet: 'lrotate(${1:int|x, ${2:int|disp})',
            displayText: 'lrotate(int x, int disp)',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the number x rotated disp bits to the left.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-bit32.lrotate'
        },
        {
            snippet: 'lshift(${1:int|x, ${2:int|disp})',
            displayText: 'lshift(int x, int disp)',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the number x shifted disp bits to the left.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-bit32.lshift'
        },
        {
            snippet: 'replace(${1:int|n, ${2:int|v}, ${3:int|field}, ${4:int width})',
            displayText: 'replace(int n, int v, int field, int width = 1)',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns a copy of n with the bits field to field + width - 1 replaced by the value v.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-bit32.replace'
        },
        {
            snippet: 'rrotate(${1:int|x, ${2:int|disp})',
            displayText: 'rrotate(int x, int disp)',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the number x rotated disp bits to the right.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-bit32.rrotate'
        },
        {
            snippet: 'rshift(${1:int|x, ${2:int|disp})',
            displayText: 'rshift(int x, int disp)',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the number x shifted disp bits to the right.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-bit32.rshift'
        },
    ];

    return suggestions;
}
