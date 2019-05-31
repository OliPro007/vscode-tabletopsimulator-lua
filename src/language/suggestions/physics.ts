import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        // Member Variables
        {
            snippet: 'play_area',
            displayText: 'play_area',
            type: 'property',
            leftLabel: 'float',
            description: 'The size of the play area (0.0 - 1.0).',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/physics/#play_area'
        },
        // Functions
        {
            snippet: 'cast(${1:Table|info})',
            displayText: 'cast(Table info)',
            type: 'function',
            leftLabel: 'Table',
            description: 'Casts a shape based on Info and returns a table of multiple Hit.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/physics/#cast'
        },
        {
            snippet:
                'cast({\n\t' +
                'origin       = ${1:-- Vector},\n\t' +
                'direction    = ${2:-- Vector},\n\t' +
                'type         = ${3:-- int (1: Ray, 2: Sphere, 3: Box)},\n\t' +
                'size         = ${4:-- Vector},\n\t' +
                'orientation  = ${5:-- Vector},\n\t' +
                'max_distance = ${6:-- float},\n\t' +
                'debug        = ${7:-- bool (true = visualize cast)},\n' +
                '}) -- returns {{Vector point, Vector normal, float distance, Object hit_object}, ...}',
            displayText: 'cast({Vector origin, Vector direction, int type, Vector size, Vector orientation, float max_distanc, bool debug})',
            type: 'function',
            leftLabel: 'Table',
            description: 'Casts a shape based on Info and returns a table of multiple Hit.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/physics/#cast'
        },
        {
            snippet: 'getGravity()',
            displayText: 'getGravity()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the gravity Vector.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/physics/#getgravity'
        },
        {
            snippet: 'setGravity(${1:Table|vector})',
            displayText: 'setGravity(Table vector)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the gravity Vector.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/physics/#setgravity'
        },
    ];

    return suggestions;
}
