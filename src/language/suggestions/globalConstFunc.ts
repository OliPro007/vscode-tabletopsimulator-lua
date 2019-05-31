import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        // Constants
        {
            snippet: 'bit32',
            displayText: 'bit32',
            type: 'constant',
            description: 'The bit32 class.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#6.7'
        },
        {
            snippet: 'coroutine',
            displayText: 'coroutine',
            type: 'constant',
            description: 'The coroutine class.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#6.2'
        },
        {
            snippet: 'dynamic',
            displayText: 'dynamic',
            type: 'constant',
            description: 'The dynamic class.',
            descriptionMoreURL: 'http://www.moonsharp.org/additions.html'
        },
        {
            snippet: 'Global',
            displayText: 'Global',
            type: 'constant',
            description: 'A reference to the Global Script.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object'
        },
        {
            snippet: 'JSON',
            displayText: 'JSON',
            type: 'constant',
            description: 'The JSON class.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/json'
        },
        {
            snippet: 'Lighting',
            displayText: 'Lighting',
            type: 'constant',
            description: 'The Lighting class.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/lighting/'
        },
        {
            snippet: 'math',
            displayText: 'math',
            type: 'constant',
            description: 'The math class.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#6.6'
        },
        {
            snippet: 'Notes',
            displayText: 'Notes',
            type: 'constant',
            description: 'The Notes class.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/notes/'
        },
        {
            snippet: 'os',
            displayText: 'os',
            type: 'constant',
            description: 'The os class.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#6.9'
        },
        {
            snippet: 'Physics',
            displayText: 'Physics',
            type: 'constant',
            description: 'The Physics class.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/physics/'
        },
        {
            snippet: 'Player',
            displayText: 'Player',
            type: 'constant',
            description: 'The Player class.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player'
        },
        {
            snippet: 'self',
            displayText: 'self',
            type: 'constant',
            description: 'A reference to this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object'
        },
        {
            snippet: 'string',
            displayText: 'string',
            type: 'constant',
            description: 'The string class.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#6.4'
        },
        {
            snippet: 'table',
            displayText: 'table',
            type: 'constant',
            description: 'The table class.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#6.5'
        },
        {
            snippet: 'Time',
            displayText: 'Time',
            type: 'constant',
            description: 'The Time class.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/time/'
        },
        {
            snippet: 'Turns',
            displayText: 'Turns',
            type: 'constant',
            description: 'The Turns class.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/turns/'
        },
        {
            snippet: 'UI',
            displayText: 'UI',
            type: 'constant',
            description: 'The UI class.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/ui/'
        },
        {
            snippet: 'Wait',
            displayText: 'Wait',
            type: 'constant',
            description: 'The Wait class.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/wait/'
        },
        {
            snippet: 'WebRequest',
            displayText: 'WebRequest',
            type: 'constant',
            description: 'The WebRequest class.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/webrequest/'
        },
        // Global Management Functions
        {
            snippet: 'broadcastToAll(${1:string|message}, ${2:Table|text_color})',
            displayText: 'broadcastToAll(string message, Table text_color)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Prints a message to the screen and chat window on all connected clients.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#broadcasttoall'
        },
        {
            snippet: 'broadcastToColor(${1:string|message}, ${2:string|player_color}, ${3:Table|text_color})',
            displayText: 'broadcastToColor(string message, string player_color, Table text_color)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Prints a private message to the screen and chat window to the player matching the player color.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#broadcasttocolor'
        },
        {
            snippet: 'clearPixelPaint()',
            displayText: 'clearPixelPaint()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Clears all pixel paint.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#clearpixelpaint'
        },
        {
            snippet: 'clearVectorPaint()',
            displayText: 'clearVectorPaint()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Clears all vector paint.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#clearvectorpaint'
        },
        {
            snippet: 'color(${1:float|red}, ${2:float|green}, ${3:float|blue}, ${4:float|alpha})',
            displayText: 'color(float red, float green, float blue, float alpha)',
            type: 'function',
            leftLabel: 'variable',
            description: 'Creates a Color table from rgb[a] values (alpha is optional).',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#color'
        },
        {
            snippet: 'copy(${1:Table|objects})',
            displayText: 'copy(Table objects)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Copies a list of Objects.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#copy'
        },
        {
            snippet: 'destroyObject(${1:Object|obj})',
            displayText: 'destroyObject(Object obj)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Destroys an Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#destroyobject'
        },
        {
            snippet: 'flipTable()',
            displayText: 'flipTable()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Flip the table in a fit of rage.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#fliptable'
        },
        {
            snippet: 'getAllObjects()',
            displayText: 'getAllObjects()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns a Table of all the spawned Objects in the game.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#getallobjects'
        },
        {
            snippet: 'getObjectFromGUID(${1:string|guid})',
            displayText: 'getObjectFromGUID(string guid)',
            type: 'function',
            leftLabel: 'Object',
            description: 'Gets a reference to an Object from a GUID. Will return nil if the Object doesn’t exist.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#getobjectfromguid'
        },
        {
            snippet: 'getSeatedPlayers()',
            displayText: 'getSeatedPlayers()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns an indexed Lua Table of all the seated Player colors.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#getseatedplayers'
        },
        {
            snippet: 'log(${1:Var|message}, ${2:string|tag}, ${3:string|label})',
            displayText: 'log(Var message, string tag = "", string label = "")',
            type: 'function',
            leftLabel: 'bool',
            description: 'Outputs a message to the system console. Specify a tag to identify it by class or subject, and label to prefix the value.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#log'
        },
        {
            snippet: 'logStyle(${1:string|tag}, ${2:Color|color}, ${3:string|prefix}, ${4:string|postfix})',
            displayText: 'logStyle(string tag, Color color, string prefix = "", string postfix = "")',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the style options for the specified tag: the color it is displayed in and any prefix or postfix text.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#logstyle'
        },
        {
            snippet: 'group(${1:Table|objects})',
            displayText: 'group(Table objects)',
            type: 'function',
            leftLabel: 'Object',
            description: 'Groups objects together into returned Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#group'
        },
        {
            snippet: 'paste(${1:Table|parameters})',
            displayText: 'paste(Table parameters)',
            type: 'function',
            leftLabel: 'Table',
            description: 'Pastes copied Objects and returns a Table of references to the new Objects.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#paste'
        },
        {
            snippet:
                'paste({\n\t' +
                'position     = ${1:-- Vector  [x=0, y=3, z=0]},\n\t' +
                'snap_to_grid = ${2:-- boolean [false]},\n' +
                '})',
            displayText: 'paste({Vector position, bool snap_to_grid})',
            type: 'function',
            leftLabel: 'Table',
            description: 'Pastes copied Objects and returns a Table of references to the new Objects.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#paste'
        },
        {
            snippet: 'print(${1:string|message})',
            displayText: 'print(string message)',
            type: 'function',
            description: 'Prints a message to the chat window only on the host.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#print'
        },
        {
            snippet: 'printToAll(${1:string|message}, ${2:Table|text_color})',
            displayText: 'printToAll(string message, Table text_color)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Prints a message to the chat window on all connected clients.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#printtoall'
        },
        {
            snippet: 'printToColor(${1:string|message}, ${2:string|player_color}, ${3:Table|text_color})',
            displayText: 'printToColor(string message, string player_color, Table text_color)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Prints a message to the chat window of a specific Player.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#printtocolor'
        },
        {
            snippet: 'sendExternalMessage(${1:Table|table})',
            displayText: 'sendExternalMessage(Table table)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sends table to whatever is connected to the External Editor API.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/externaleditorapi/'
        },
        {
            snippet: 'spawnObject(${1:Table|paremeters})',
            displayText: 'spawnObject(Table parameters)',
            type: 'function',
            leftLabel: 'Object',
            description: 'Spawns an Object and returns a reference to it.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#spawnobject'
        },
        {
            snippet:
                'spawnObject({\n\t' +
                'type              = ${1:-- string},\n\t' +
                'position          = ${2:-- Vector [x=0, y=3, z=0]},\n\t' +
                'rotation          = ${3:-- Vector [x=0, y=0, z=0]},\n\t' +
                'scale             = ${4:-- Vector [x=1, y=1, z=1]},\n\t' +
                'callback_fucntion = ${5:-- function},\n\t' +
                'sound             = ${6:-- bool},\n\t' +
                'params            = ${7:-- Table},\n\t' +
                'snap_to_grid      = ${8:-- bool},\n' +
                '})',
            displayText: 'spawnObject({string type, Vector position, Vector rotation, Vector scale, function callback_function, bool sound, Table params, bool snap_to_grid})',
            type: 'function',
            leftLabel: 'Object',
            description: 'Spawns an Object and returns a reference to it.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#spawnobject'
        },
        {
            snippet: 'spawnObjectJSON(${1:Table|paremeters})',
            displayText: 'spawnObjectJSON(Table parameters)',
            type: 'function',
            leftLabel: 'Object',
            description: 'Spawns an Object using a JSON string and returns a reference to it.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#spawnobjectjson'
        },
        {
            snippet:
                'spawnObjectJSON({\n\t' +
                'json              = ${1:-- string},\n\t' +
                'position          = ${2:-- Vector [x=0, y=3, z=0]},\n\t' +
                'rotation          = ${3:-- Vector [x=0, y=0, z=0]},\n\t' +
                'scale             = ${4:-- Vector [x=1, y=1, z=1]},\n\t' +
                'callback_function = ${5:-- string},\n\t' +
                'sound             = ${6:-- bool},\n\t' +
                'params            = ${7:-- Table},\n\t' +
                'snap_to_grid      = ${8:-- bool},\n' +
                '})',
            displayText: 'spawnObjectJSON({string json, Vector position, Vector rotation, Vector scale, function callback_function, bool sound, Table params, bool snap_to_grid})',
            type: 'function',
            leftLabel: 'Object',
            description: 'Spawns an Object using a JSON string and returns a reference to it.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#spawnobjectjson'
        },
        {
            snippet: 'startLuaCoroutine(${1:Object|func_owner}, ${2:string|func_name})',
            displayText: 'startLuaCoroutine(Object func_owner, string func_name)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Starts a Lua function as a coroutine.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#startluacoroutine'
        },
        {
            snippet: 'stringColorToRGB(${1:string|player_color})',
            displayText: 'stringColorToRGB(string player_color)',
            type: 'function',
            leftLabel: 'Table',
            description: 'Converts a color string (player colors) to its RGB values.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#stringcolortorgb'
        },
        {
            snippet: 'tonumber(${1:e})',
            displayText: 'tonumber(e [, base])',
            type: 'function',
            leftLabel: 'number',
            description: 'When called with no base, tonumber tries to convert its argument to a number.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-tonumber'
        },
        {
            snippet: 'tostring(${1:v})',
            displayText: 'tostring(v)',
            type: 'function',
            leftLabel: 'number',
            description: 'Receives a value of any type and converts it to a string in a reasonable format.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-tostring'
        },
        {
            snippet: 'vector(${1:float|x}, ${2:float|y}, ${3:float|z})',
            displayText: 'vector(float x, float y, float z)',
            type: 'function',
            leftLabel: 'variable',
            description: 'Creates a Vector table from x, y, z values.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#vector'
        },
    ];
    return suggestions;
}
