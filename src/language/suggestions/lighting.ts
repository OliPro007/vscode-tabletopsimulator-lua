import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        // Member Variables
        {
            snippet: 'ambient_type',
            displayText: 'ambient_type',
            type: 'property',
            leftLabel: 'int',
            description: 'The source of the ambient light. 1 = Background, 2 = Gradient.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/lighting/#ambient_type'
        },
        {
            snippet: 'ambient_intensity',
            displayText: 'ambient_intensity',
            type: 'property',
            leftLabel: 'float',
            description: 'The strength of the ambient light either from the background or gradient. Range is 0-4.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/lighting/#ambient_intensity'
        },
        {
            snippet: 'light_intensity',
            displayText: 'light_intensity',
            type: 'property',
            leftLabel: 'float',
            description: 'The strength of the directional light shining down in the scene. Range is 0-4.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/lighting/#light_intensity'
        },
        {
            snippet: 'reflection_intensity',
            displayText: 'reflection_intensity',
            type: 'property',
            leftLabel: 'float',
            description: 'The strength of the reflections from the background. Range is 0-1.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/lighting/#reflection_intensity'
        },
        // Functions
        {
            snippet: 'apply()',
            displayText: 'apply()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Applies all changed made to the Lighting class. This must be called for these changes to take affect.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/lighting/#apply'
        },
        {
            snippet: 'getAmbientEquatorColor()',
            displayText: 'getAmbientEquatorColor()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the Color of the gradient equator.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/lighting/#getambientequatorcolor'
        },
        {
            snippet: 'getAmbientGroundColor()',
            displayText: 'getAmbientGroundColor()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the Color of the gradient ground.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/lighting/#getambientgroundcolor'
        },
        {
            snippet: 'getAmbientSkyColor()',
            displayText: 'getAmbientSkyColor()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the Color of the gradient sky.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/lighting/#getambientskycolor'
        },
        {
            snippet: 'getLightColor()',
            displayText: 'getLightColor()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the Color of the directional light.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/lighting/#getlightcolor'
        },
        {
            snippet: 'setAmbientEquatorColor(${1:Table|color})',
            displayText: 'setAmbientEquatorColor(Table color)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the Color of the gradient equator.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/lighting/#setambientequatorcolor'
        },
        {
            snippet: 'setAmbientGroundColor(${1:Table|color})',
            displayText: 'setAmbientGroundColor(Table color)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the Color of the ambient ground.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/lighting/#setambientgroundcolor'
        },
        {
            snippet: 'setAmbientSkyColor(${1:Table|color})',
            displayText: 'setAmbientSkyColor(Table color)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the Color of the gradient sky.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/lighting/#setambientskycolor'
        },
        {
            snippet: 'setLightColor(${1:Table|color})',
            displayText: 'setLightColor(Table color)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the Color of the directional light.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/lighting/#setlightcolor'
        },
    ];


    return suggestions;
}
