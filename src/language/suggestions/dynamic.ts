import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        // Functions
        {
            snippet: 'eval(${1:string|s})',
            displayText: 'eval(string s)',
            type: 'function',
            leftLabel: 'variable',
            description: 'Returns the evaluation of s.',
            descriptionMoreURL: 'http://www.moonsharp.org/additions.html'
        },
        {
            snippet: 'prepare(${1:string|s})',
            displayText: 'prepare(string s)',
            type: 'function',
            leftLabel: 'variable',
            description: 'Returns a prepared expression object which can be passed to dynamic.eval for faster execution.',
            descriptionMoreURL: 'http://www.moonsharp.org/additions.html'
        },
    ];

    return suggestions;
}
