import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        // Member Variables
        {
            snippet: 'enable',
            displayText: 'enable',
            type: 'property',
            leftLabel: 'bool',
            description: 'Enable/disable the turns system.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/turns/#member-variables'
        },
        {
            snippet: 'type',
            displayText: 'type',
            type: 'property',
            leftLabel: 'int',
            description: 'If the turn order is automatic or custom. 1=auto, 2=custom.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/turns/#member-variables'
        },
        {
            snippet: 'order',
            displayText: 'order',
            type: 'property',
            leftLabel: 'table',
            description: 'A table of strings, representing the player turn order.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/turns/#member-variables'
        },
        {
            snippet: 'reverse_order',
            displayText: 'reverse_order',
            type: 'property',
            leftLabel: 'bool',
            description: 'Enable/disable reversing turn rotation direction.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/turns/#member-variables'
        },
        {
            snippet: 'skip_empty_hands',
            displayText: 'skip_empty_hands',
            type: 'property',
            leftLabel: 'bool',
            description: 'Enable/disable skipping empty hands.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/turns/#member-variables'
        },
        {
            snippet: 'disable_interactations',
            displayText: 'disable_interactations',
            type: 'property',
            leftLabel: 'bool',
            description: 'Enable/disable the blocking of players ability to interact with Objects when it is not their turn.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/turns/#member-variables'
        },
        {
            snippet: 'pass_turns',
            displayText: 'pass_turns',
            type: 'property',
            leftLabel: 'bool',
            description: 'Enable/disable a player\'s ability to pass their turn to another.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/turns/#member-variables'
        },
        {
            snippet: 'turn_color',
            displayText: 'turn_color',
            type: 'property',
            leftLabel: 'string',
            description: 'The color of the Player who\'s turn it is.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/turns/#member-variables'
        },
        // Functions
        {
            snippet: 'getNextTurnColor()',
            displayText: "getNextTurnColor()",
            type: 'function',
            leftLabel: 'string',
            description: 'Returns the Player Color string of the next player in the turn order.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/turns/#functions'
        },
        {
            snippet: 'getPreviousTurnColor()',
            displayText: "getPreviousTurnColor()",
            type: 'function',
            leftLabel: 'string',
            description: 'Returns the Player Color string of the previous player in the turn order.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/turns/#functions'
        },
    ];
    return suggestions;
}
