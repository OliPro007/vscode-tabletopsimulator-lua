import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        // Functions
        {
            snippet: 'clear()',
            displayText: 'clear()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Resets the Counter value back to 0.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/counter/#clear'
        },
        {
            snippet: 'decrement()',
            displayText: 'decrement()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Decrements the Counter’s value by 1.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/counter/#decrement'
        },
        {
            snippet: 'getValue()',
            displayText: 'getValue()',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the current value of the Counter.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/counter/#getvalue'
        },
        {
            snippet: 'increment()',
            displayText: 'increment()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Increments the Counter’s value by 1.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/counter/#increment'
        },
        {
            snippet: 'setValue(${1:int|seconds})',
            displayText: 'setValue(int seconds)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the current value of the Counter.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/counter/#setvalue'
        },
    ];

    return suggestions;
}
