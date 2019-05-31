import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        // Member Variables
        {
            snippet: 'admin',
            displayText: 'admin',
            type: 'property',
            leftLabel: 'bool',
            description: 'Is the player currently promoted or hosting the game? Read only.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#admin'
        },
        {
            snippet: 'blindfolded',
            displayText: 'blindfolded',
            type: 'property',
            leftLabel: 'bool',
            description: 'Is the player blindfolded?',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#blindfolded'
        },
        {
            snippet: 'color',
            displayText: 'color',
            type: 'property',
            leftLabel: 'string',
            description: 'The player\'s color. Read only.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#color'
        },
        {
            snippet: 'host',
            displayText: 'host',
            type: 'property',
            leftLabel: 'bool',
            description: 'Is the player the host?.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#host'
        },
        {
            snippet: 'lift_height',
            displayText: 'lift_height',
            type: 'property',
            leftLabel: 'float',
            description: 'The player\'s lift height from 0 to 1.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#lift_height'
        },
        {
            snippet: 'promoted',
            displayText: 'promoted',
            type: 'property',
            leftLabel: 'bool',
            description: 'Is the player currently promoted? Read only.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#promoted'
        },
        {
            snippet: 'seated',
            displayText: 'seated',
            type: 'property',
            leftLabel: 'float',
            description: 'Is the player currently seated at the table? Read only.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#seated'
        },
        {
            snippet: 'steam_id',
            displayText: 'steam_id',
            type: 'property',
            leftLabel: 'float',
            description: 'The player\'s Steam ID. Read only.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#steam_id'
        },
        {
            snippet: 'steam_name',
            displayText: 'steam_name',
            type: 'property',
            leftLabel: 'string',
            description: 'The player\'s Steam name. Read only.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#steam_name'
        },
        {
            snippet: 'team',
            displayText: 'team',
            type: 'property',
            leftLabel: 'string',
            description: 'The player\'s team. Team names: "None", "Clubs", "Diamonds", "Hearts", "Spades". Read only.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#team'
        },
        // Functions
        {
            snippet: 'attachCameraToObject(${1:Table|parameters})',
            displayText: 'attachCameraToObject(Table parameters)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Makes a player\'s camera follow an Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#attachcameratoobject'
        },
        {
            snippet:
                'attachCameraToObject({\n\t' +
                'object = ${1:-- Object},\n\t' +
                'offset = ${2:-- Vector [x=0, y=0, z=0]},\n' +
                '})',
            displayText: 'attachCameraToObject({Object object, Vector offset})',
            type: 'function',
            leftLabel: 'bool',
            description: 'Makes a player\'s camera follow an Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#attachcameratoobject'
        },
        {
            snippet: 'broadcast(${1:string|message})',
            displayText: 'broadcast(string message)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Broadcasts a message to the player. This also sends a message to the top center of the screen.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#broadcast'
        },
        {
            snippet: 'broadcast(${1:string|message}, ${2:string|color})',
            displayText: 'broadcast(string message, string color)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Broadcasts a message to the player with Color. This also sends a message to the top center of the screen.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#broadcast'
        },
        {
            snippet: 'changeColor(${1:string|new_color})',
            displayText: 'changeColor(string new_color)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Changes the player\'s color.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#changecolor'
        },
        {
            snippet: 'getHandCount()',
            displayText: 'getHandCount()',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the number of hands that exist for this player color.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#gethandcount'
        },
        {
            snippet: 'getHandObjects(${1:int|index})',
            displayText: 'getHandObjects(int index = 1)',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns a list of all the Cards and Mahjong Tiles in the player\'s hand. Specify index for additional hands.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#gethandobjects'
        },
        {
            snippet: 'getHandTransform(${1:int|hand_index})',
            displayText: 'getHandTransform(int hand_index = 1)',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the Transform of the player’s hand.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#gethandtransform'
        },
        {
            snippet:
                'getHandTransform(${1:int|hand_index}) -- returns table:\n\t' +
                '-- position     Vector    (World position)\n\t' +
                '-- rotation     Vector    (World rotation)\n\t' +
                '-- scale        Vector    (Local scale)\n\t' +
                '-- forward      Vector    (Forward direction)\n\t' +
                '-- right        Vector    (Right direction)\n\t' +
                '-- up           Vector    (Up direction)',
            displayText: 'getHandTransform(int hand_index = 1) -- returns {...',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the Transform of the player’s hand.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#gethandtransform'
        },
        {
            snippet: 'getPointerPosition()',
            displayText: 'getPointerPosition()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the position of the given player color\'s pointer.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#getpointerposition'
        },
        {
            snippet: 'getPointerRotation()',
            displayText: 'getPointerRotation()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the y-axis rotation of the given player color\'s pointer in degrees.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#getpointerrotation'
        },
        {
            snippet: 'getHoldingObjects()',
            displayText: 'getHoldingObjects()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns a Lua Table representing a list of all the Objects currently held by the player.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#getholdingobjects'
        },
        {
            snippet: 'getHoverObject()',
            displayText: 'getHoverObject()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the object that this player is hovering their pointer over.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#gethoverobject'
        },
        {
            snippet: 'getSelectedObjects()',
            displayText: 'getSelectedObjects()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns a Lua Table representing a list of all the Objects currently selected by the player.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#getpointerrotation'
        },
        {
            snippet: 'kick()',
            displayText: 'kick()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Kicks the player from the game.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#kick'
        },
        {
            snippet: 'lookAt(${1:Table|parameters})',
            displayText: 'lookAt(Table parameters)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Moves the Player\'s camera to look at a specific point.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#lookat'
        },
        {
            snippet:
                'lookAt({\n\t' +
                'position = ${1:-- Vector (required)},\n\t' +
                'pitch    = ${2:-- float},\n\t' +
                'yaw      = ${3:-- float},\n\t' +
                'distance = ${4:-- float},\n' +
                '})',
            displayText: 'lookAt({Vector position, float pitch, float yaw, float distance})',
            type: 'function',
            leftLabel: 'bool',
            description: 'Moves the Player\'s camera to look at a specific point.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#lookat'
        },
        {
            snippet: 'mute()',
            displayText: 'mute()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Mutes or unmutes the player.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#mute'
        },
        {
            snippet: 'pingTable(${1:Vector|position]})',
            displayText: 'pingTable(Vector position)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Emulates the player using the ping tool at the given position.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#pingtable'
        },
        {
            snippet: 'print(${1:string|message})',
            displayText: 'print(string message)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Prints a message to the player.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#print'
        },
        {
            snippet: 'print(${1:string|message}, ${2:string|color})',
            displayText: 'print(string message, string color)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Prints a message to the player with Color.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#print'
        },
        {
            snippet: 'promote()',
            displayText: 'promote()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Promotes or demotes the player.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#promote'
        },
        {
            snippet: 'setHandTransform(${1:Table|transform}, ${2:int|hand_index})',
            displayText: 'setHandTransform(Table transform, int hand_index = 1)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the Transform of the player’s hand.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#sethandtransform'
        },
        {
            snippet:
                'setHandTransform({\n\t' +
                'position = ${1:-- Vector},\n\t' +
                'rotation = ${2:-- Vector},\n\t' +
                'scale    = ${3:-- Vector},\n\t' +
                'forward  = ${4:-- Vector},\n\t' +
                'right    = ${5:-- Vector},\n\t' +
                'up       = ${6:-- Vector},\n' +
                '})',
            displayText: 'setHandTransform({Vector position, Vector rotation, Vector scale, Vector forward, Vector right, Vector up})',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the Transform of the player’s hand.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/player/#sethandtransform'
        },
    ];

    return suggestions;
}
