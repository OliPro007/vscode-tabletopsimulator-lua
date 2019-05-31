import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        // Functions
        {
            snippet: 'decode(${1:string|json_string})',
            displayText: 'decode(string json_string)',
            type: 'function',
            leftLabel: 'variable',
            description: 'Decodes a valid JSON string into a Lua string, number, or Table.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/json/#decode'
        },
        {
            snippet: 'encode(${1:variable})',
            displayText: 'encode(variable)',
            type: 'function',
            leftLabel: 'string',
            description: 'Encodes a Lua string, number, or Table into a valid JSON string. This will not work with Object references.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/json/#encode'
        },
        {
            snippet: 'encode_pretty(${1:variable})',
            displayText: 'encode_pretty(variable)',
            type: 'function',
            leftLabel: 'string',
            description: 'Encodes a Lua string, number, or Table into a valid JSON string formatted with indents (Human readable). This will not work with Object references.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/json/#encode_pretty'
        },
    ];

    return suggestions;
}
