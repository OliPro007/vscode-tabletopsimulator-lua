import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        // Functions
        {
            snippet: 'getAttribute(${1:string|id}, ${2:string|attribute})',
            displayText: "getAttribute(string id, string attribute)",
            type: 'function',
            leftLabel: 'variable',
            description: 'Obtains the value of a specified attribute of a UI element. Returns typically a string or number.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/ui/#getattribute'
        },
        {
            snippet: 'getAttributes(${1:string|id})',
            displayText: "getAttributes(string id)",
            type: 'function',
            leftLabel: 'table',
            description: 'Returns the attributes and their values of a UI element that have been set by the user.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/ui/#getattributes'
        },
        {
            snippet: 'getValue(${1:string|id})',
            displayText: "getAttributes(string id)",
            type: 'function',
            leftLabel: 'bool',
            description: 'Gets the value of a UI element.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/ui/#getvalue'
        },
        {
            snippet: 'hide(${1:string|id})',
            displayText: "hide(string id)",
            type: 'function',
            leftLabel: 'bool',
            description: 'Hides the given UI element.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/ui/#hide'
        },
        {
            snippet: 'setAttribute(${1:string|id}, ${2:string|attribute}, ${3:variable|value})',
            displayText: "setAttribute(string id, string attribute, variable value)",
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the value of a specified attribute of a UI element.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/ui/#setattribute'
        },
        {
            snippet: 'setAttributes(${1:string|id}, ${2:table|data})',
            displayText: "setAttributes(string id, table data)",
            type: 'function',
            leftLabel: 'bool',
            description: 'Updates the value of the supplied attributes of a UI element.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/ui/#setattributes'
        },
        {
            snippet: 'setValue(${1:string|id}, ${2:string|value})',
            displayText: "setAttributes(string id, string value)",
            type: 'function',
            leftLabel: 'bool',
            description: 'Updates the value of a UI element.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/ui/#setvalue'
        },
        {
            snippet: 'show(${1:string|id})',
            displayText: "show(string id)",
            type: 'function',
            leftLabel: 'bool',
            description: 'Shows the given UI element.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/ui/#show'
        },
        {
            snippet: 'setXml(${1:string|xml})',
            displayText: "setXml(string xml)",
            type: 'function',
            leftLabel: 'bool',
            description: 'Replaces the run-time UI with the XML string.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/ui/#setxml'
        },
        {
            snippet: 'setXmlTable(${1:table|xmlTable})',
            displayText: "setXmlTable(table xmlTable)",
            type: 'function',
            leftLabel: 'bool',
            description: 'Replaces the run-time UI with an XML string which is generated from a table of data.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/ui/#setxmltable'
        },
        {
            snippet: 'setCustomAssets(${1:table|assets})',
            displayText: "setCustomAssets(table assets)",
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the UI ASSETS (like custom images) for global or an Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/ui/#setcustomassets'
        },
        {
            snippet: 'getXml()',
            displayText: "getXml()",
            type: 'function',
            leftLabel: 'string',
            description: 'Returns the run-time UI\'s XML in string format.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/ui/#getxml'
        },
        {
            snippet: 'getXmlTable()',
            displayText: "getXmlTable()",
            type: 'function',
            leftLabel: 'table',
            description: 'Returns the run-time UI\'s XML formatted as a Lua table.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/ui/#getxmltable'
        },
        {
            snippet: 'getCustomAssets()',
            displayText: "getCustomAssets()",
            type: 'function',
            leftLabel: 'table',
            description: 'Returns information on all custom assets uploaded to the UI ASSETS pane.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/ui/#getcustomassets'
        }
    ];
    return suggestions;
}
