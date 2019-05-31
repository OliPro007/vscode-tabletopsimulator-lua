import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        // Member Variables
        {
            snippet: 'time',
            displayText: 'time',
            type: 'property',
            leftLabel: 'float',
            description: 'The current game time in seconds.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/time/#time'
        },
        {
            snippet: 'delta_time',
            displayText: 'delta_time',
            type: 'property',
            leftLabel: 'float',
            description: 'Time in seconds since the last frame.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/time/#deltatime'
        },
        {
            snippet: 'fixed_time',
            displayText: 'fixed_time',
            type: 'property',
            leftLabel: 'float',
            description: 'The game time of the last fixedUpdate.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/time/#fixedtime'
        },
        {
            snippet: 'fixed_delta_time',
            displayText: 'time',
            type: 'property',
            leftLabel: 'float',
            description: 'Duration of fixed update in seconds.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/time/#fixeddeltatime'
        },
        {
            snippet: 'frame_count',
            displayText: 'frame_count',
            type: 'property',
            leftLabel: 'int',
            description: 'Total number of frames since the scene began.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/time/#framecount'
        },
    ];

    return suggestions;
}
