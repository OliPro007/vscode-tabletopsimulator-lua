import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        // Functions
        {
            snippet: 'concat(${1:table|list}, ${2:string|sep}, ${3:int|i}, ${4:int|j})',
            displayText: "concat(table list, string sep = '', int i = 1, int j = #list)",
            type: 'function',
            leftLabel: 'string',
            description: 'Returns a string of items i to j in list joined by sep.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-table.concat'
        },
        {
            snippet: 'insert(${1:table|list}, ${2:int|pos}, ${3:variable|value})',
            displayText: "insert(table list, int pos = #list+1, variable value)",
            type: 'function',
            leftLabel: 'variable',
            description: 'Inserts element value at position pos in list.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-table.insert'
        },
        {
            snippet: 'pack(${1:...})',
            displayText: "pack(...)",
            type: 'function',
            leftLabel: 'table',
            description: 'Returns a new table with all parameters stored into keys 1, 2, etc. and with a field "n" with the total number of parameters.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-table.pack'
        },
        {
            snippet: 'remove(${1:table|list}, ${2:int|pos})',
            displayText: "remove(table list, int pos = #list)",
            type: 'function',
            leftLabel: 'variable',
            description: 'Removes (and returns) item pos from list.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-table.remove'
        },
        {
            snippet: 'sort(${1:table|list}, ${2:function|comp})',
            displayText: "sort(table list, [function comp])",
            type: 'function',
            leftLabel: 'bool',
            description: 'Sorts list in place. Uses compare function comp if specified.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-table.sort'
        },
        {
            snippet: 'unpack(${1:table|list}, ${2:int|i}, ${3:int|j})',
            displayText: "unpack(table list, int i = 1, int j = #list)",
            type: 'function',
            leftLabel: 'string',
            description: 'Returns elemeents i to j from list.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-table.unpack'
        },
    ];
    return suggestions;
}
