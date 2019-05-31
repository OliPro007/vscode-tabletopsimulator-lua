import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        // Member Variables
        {
            //text: 'script_code' # OR
            snippet: 'script_code',
            displayText: 'script_code', // (optional)
            type: 'property', // (optional)
            leftLabel: 'string', // (optional)
            description: 'Returns the Global Lua script.', // (optional)
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#script_code' // (optional)
            //replacementPrefix: 'so' # (optional)
            //leftLabelHTML: '' # (optional)
            //rightLabel: '' # (optional)
            //rightLabelHTML: '' # (optional)
            //className: '' # (optional)
            //iconHTML: '' # (optional)
        },
        {
            snippet: 'script_state',
            displayText: 'script_state',
            type: 'property',
            leftLabel: 'string',
            description: 'Returns the Global saved Lua script state.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#script_state'
        },
        // Functions
        {
            snippet: 'addDecal(${1:Table|parameters})',
            displayText: 'addDecal(Table parameters)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Add a Decal onto the game world.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#adddecal'
        },
        {
            snippet:
                'addDecal({\n\t' +
                'name             = ${1:-- string},\n\t' +
                'url              = ${2:-- string},\n\t' +
                'position         = ${3:-- Vector},\n\t' +
                'rotation         = ${4:-- Vector},\n\t' +
                'scale            = ${5:-- float},\n' +
                '})',
            displayText: 'addDecal({string name, string url, Vector position, Vector rotation, float scale})',
            type: 'function',
            leftLabel: 'bool',
            description: 'Add a Decal onto the game world.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#adddecal'
        },
        {
            snippet: 'call(${1:string|function_name}, ${2:Table|parameters})',
            displayText: 'call(string function_name, Table parameters)',
            type: 'function',
            leftLabel: 'variable',
            description: 'Calls a Lua function owned by the Global Script and passes an optional Table as parameters to the function.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#call'
        },
        {
            snippet: 'getDecals()',
            displayText: 'getDecals()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns a table of sub-tables, each sub-table representing one decal.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getdecals'
        },
        {
            snippet:
                'getDecals() -- returns table of tables:\n\t' +
                '-- name                   string  (Name of decal)\n\t' +
                '-- url                    string  (Filepath or URL of image)\n\t' +
                '-- position               Vector  (Position in world)\n\t' +
                '-- rotation               Vector  (Rotation in world)\n\t' +
                '-- scale                  float   (1 is normal scale)',
            displayText: 'getDecals() -- returns {{...',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns a table of sub-tables, each sub-table representing one decal.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getdecals'
        },
        {
            snippet: 'getTable(${1:string|table_name})',
            displayText: 'getTable(string table_name)',
            type: 'function',
            leftLabel: 'Table',
            description: 'Gets a Lua Table for this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#gettable'
        },
        {
            snippet: 'getVar(${1:string|variable_name})',
            displayText: 'getVar(string variable_name)',
            type: 'function',
            leftLabel: 'variable',
            description: 'Gets a Lua variable for this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getvar'
        },
        {
            snippet: 'setDecals(${1:Table|parameters})',
            displayText: 'setDecals(Table parameters)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets which decals are on an object. This removes other decals already present; use an empty table to remove all decals.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setdecals'
        },
        {
            snippet:
                'setDecals({\n\t{\n\t\t' +
                'name             = ${1:-- string},\n\t\t' +
                'url              = ${2:-- string},\n\t\t' +
                'position         = ${3:-- Vector},\n\t\t' +
                'rotation         = ${4:-- Vector},\n\t\t' +
                'scale            = ${5:-- float},\n\t' +
                '}\n})',
            displayText: 'setDecals({{string name, string url, Vector position, Vector rotation, float scale}})',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets which decals are on an object. This removes other decals already present; use an empty table to remove all decals.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setdecals'
        },
        {
            snippet: 'setHideFaceDown(${1:bool|hide})',
            displayText: 'setHideFaceDown(bool hide)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets whether face-down objects (which have the relevant property set) will be hidden.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#sethidefacedown'
        },
        {
            snippet: 'setLookingForPlayers(${1:bool|looking_for_players})',
            displayText: 'setLookingForPlayers(bool looking_for_players)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets whether server will be listed as looking for players in server browser.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setlookingforplayers'
        },
        {
            snippet: 'setTable(${1:string|table_name}, ${2:Table|table})',
            displayText: 'setTable(string table_name, Table table)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets a Lua Table for this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#settable'
        },
        {
            snippet: 'setVar(${1:string|variable_name}, ${2:variable|value})',
            displayText: 'setVar(string variable_name, variable value)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets a Lua variable for this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setvar'
        },
    ];

    return suggestions;
}
