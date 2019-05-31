import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        // Functions
        {
            snippet: 'getFontColor()',
            displayText: 'getFontColor()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the current font color as a Lua Table keyed as Table[\'r\'], Table[\'g\'], and Table[\'b\'].',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/texttool/#getfontcolor'
        },
        {
            snippet: 'getFontSize()',
            displayText: 'getFontSize()',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the current font size.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/texttool/#getfontsize'
        },
        {
            snippet: 'getValue()',
            displayText: 'getValue()',
            type: 'function',
            leftLabel: 'string',
            description: 'Returns the current text.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/texttool/#getvalue'
        },
        {
            snippet: 'setFontColor(${1:Table|color})',
            displayText: 'setFontColor(Table color)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the current font color. The Lua Table parameter should be keyed as Table[\'r\'], Table[\'g\'], and Table[\'b\'].',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/texttool/#setfontcolor'
        },
        {
            snippet: 'setFontSize(${1:int|font_size})',
            displayText: 'setFontSize(int font_size)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the current font size.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/texttool/#setfontsize'
        },
        {
            snippet: 'setValue(${1:string|text})',
            displayText: 'setValue(string text)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the current text.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/texttool/#setvalue'
        },
    ];

    return suggestions;
}
