import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        // Constants
        {
            snippet: 'Black',
            displayText: 'Black',
            type: 'constant',
            leftLabel: 'Player',
            description: 'The Black player.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/'
        },
        {
            snippet: 'Blue',
            displayText: 'Blue',
            type: 'constant',
            leftLabel: 'Player',
            description: 'The Blue player.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/'
        },
        {
            snippet: 'Brown',
            displayText: 'Brown',
            type: 'constant',
            leftLabel: 'Player',
            description: 'The Brown player.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/'
        },
        {
            snippet: 'Green',
            displayText: 'Green',
            type: 'constant',
            leftLabel: 'Player',
            description: 'The Green player.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/'
        },
        {
            snippet: 'Orange',
            displayText: 'Orange',
            type: 'constant',
            leftLabel: 'Player',
            description: 'The Orange player.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/'
        },
        {
            snippet: 'Pink',
            displayText: 'Pink',
            type: 'constant',
            leftLabel: 'Player',
            description: 'The Pink player.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/'
        },
        {
            snippet: 'Purple',
            displayText: 'Purple',
            type: 'constant',
            leftLabel: 'Player',
            description: 'The Purple player.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/'
        },
        {
            snippet: 'Red',
            displayText: 'Red',
            type: 'constant',
            leftLabel: 'Player',
            description: 'The Red player.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/'
        },
        {
            snippet: 'Teal',
            displayText: 'Teal',
            type: 'constant',
            leftLabel: 'Player',
            description: 'The Teal player.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/'
        },
        {
            snippet: 'White',
            displayText: 'White',
            type: 'constant',
            leftLabel: 'Player',
            description: 'The White player.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/'
        },
        {
            snippet: 'Yellow',
            displayText: 'Yellow',
            type: 'constant',
            leftLabel: 'Player',
            description: 'The Yellow player.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/'
        },
        // Functions
        {
            snippet: 'getAvailableColors()',
            displayText: 'getAvailableColors()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns valid seats colors at current table.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#getavailablecolors'
        },
        {
            snippet: 'getColors()',
            displayText: 'getColors()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns all possible seats colors.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#getavailablecolors'
        },
        {
            snippet: 'getPlayers()',
            displayText: 'getPlayers()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns a Table of all Players.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#getplayers'
        },
        {
            snippet: 'getSpectators()',
            displayText: 'getSpectators()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns a Table of spectator Players.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#getspectators'
        },
    ];

    return suggestions;
}
