import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        // Member Variables
        {
            snippet: 'angular_drag',
            displayText: 'angular_drag',
            type: 'property',
            leftLabel: 'float',
            description: 'The Object\'s angular drag.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#angular_drag'
        },
        {
            snippet: 'AssetBundle',
            displayText: 'AssetBundle',
            type: 'property',
            leftLabel: 'AssetBundle',
            description: 'A reference to the AssetBundle class attached to this Object, or nil. Read only.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#assetbundle'
        },
        {
            snippet: 'auto_raise',
            displayText: 'auto_raise',
            type: 'property',
            leftLabel: 'bool',
            description: 'Should this Object automatically raise above other Objects when held?',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#auto_raise'
        },
        {
            snippet: 'bounciness',
            displayText: 'bounciness',
            type: 'property',
            leftLabel: 'float',
            description: 'The Object\'s bounciness.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#bounciness'
        },
        {
            snippet: 'Clock',
            displayText: 'Clock',
            type: 'property',
            leftLabel: 'Clock',
            description: 'A reference to the Clock class attached to this Object. Read only.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#clock'
        },
        {
            snippet: 'Counter',
            displayText: 'Counter',
            type: 'property',
            leftLabel: 'Counter',
            description: 'A reference to the Counter class attached to this Object. Read only.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#counter'
        },
        {
            snippet: 'drag',
            displayText: 'drag',
            type: 'property',
            leftLabel: 'float',
            description: 'The Object\'s drag.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#drag'
        },
        {
            snippet: 'dynamic_friction',
            displayText: 'dynamic_friction',
            type: 'property',
            leftLabel: 'float',
            description: 'The Object\'s dynamic friction.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#dynamic_friction'
        },
        {
            snippet: 'grid_projection',
            displayText: 'grid_projection',
            type: 'property',
            leftLabel: 'bool',
            description: 'Should the grid project onto this object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#grid_projection'
        },
        {
            snippet: 'guid',
            displayText: 'guid',
            type: 'property',
            leftLabel: 'string',
            description: 'The Object’s guid. This is the same as the getGUID function. Read only.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#guid'
        },
        {
            snippet: 'held_by_color',
            displayText: 'held_by_color',
            type: 'property',
            leftLabel: 'string',
            description: 'The color of the Player currently holding the Object. Read only.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#held_by_color'
        },
        {
            snippet: 'hide_when_face_down',
            displayText: 'hide_when_face_down',
            type: 'property',
            leftLabel: 'bool',
            description: "Hides the face of the object if it is face-down.",
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#hide_when_face_down'
        },
        {
            snippet: 'ignore_fog_of_war',
            displayText: 'ignore_fog_of_war',
            type: 'property',
            leftLabel: 'bool',
            description: 'If true then the object is always visible inside fog-of-war.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#ignore_fog_of_war'
        },
        {
            snippet: 'interactable',
            displayText: 'interactable',
            type: 'property',
            leftLabel: 'bool',
            description: 'Can players interact with this Object? If false, only Lua Scripts can interact with this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#interactable'
        },
        {
            snippet: 'is_face_down',
            displayText: 'is_face_down',
            type: 'property',
            leftLabel: 'bool',
            description: 'True if the object is roughly face-down.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#is_face_down'
        },
        {
            snippet: 'loading_custom',
            displayText: 'loading_custom',
            type: 'property',
            leftLabel: 'bool',
            description: 'Indicates if the assets of a custom element are being loaded.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#loading_custom'
        },
        {
            snippet: 'mass',
            displayText: 'mass',
            type: 'property',
            leftLabel: 'float',
            description: 'The Object\'s mass.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#mass'
        },
        {
            snippet: 'name',
            displayText: 'name',
            type: 'property',
            leftLabel: 'string',
            description: 'The Object’s formated name or nickname if applicable. Read only.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#name'
        },
        {
            snippet: 'resting',
            displayText: 'resting',
            type: 'property',
            leftLabel: 'bool',
            description: 'Returns true if this Object is not moving. Read only.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#resting'
        },
        {
            snippet: 'RPGFigurine',
            displayText: 'RPGFigurine',
            type: 'property',
            leftLabel: 'RPGFigurine',
            description: 'A reference to the RPGFigurine class attached to this Object. Read only.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#rpgfigurine'
        },
        {
            snippet: 'script_code',
            displayText: 'script_code',
            type: 'property',
            leftLabel: 'string',
            description: 'Returns the Lua script on this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#script_code'
        },
        {
            snippet: 'script_state',
            displayText: 'script_state',
            type: 'property',
            leftLabel: 'string',
            description: 'Returns the saved Lua script state on the Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#script_state'
        },
        {
            snippet: 'spawning',
            displayText: 'spawning',
            type: 'property',
            leftLabel: 'bool',
            description: 'Indicates if any object is currently in the process of spawning.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#spawning'
        },
        {
            snippet: 'static_friction',
            displayText: 'static_friction',
            type: 'property',
            leftLabel: 'float',
            description: 'The Object\'s static friction.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#static_friction'
        },
        {
            snippet: 'sticky',
            displayText: 'sticky',
            type: 'property',
            leftLabel: 'bool',
            description: 'Should Objects on top of this Object stick to this Object when this Object is picked up?',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#sticky'
        },
        {
            snippet: 'tag',
            displayText: 'tag',
            type: 'property',
            leftLabel: 'string',
            description: 'The tag of the Object representing its type. Read only.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#tag'
        },
        {
            snippet: 'tooltip',
            displayText: 'tooltip',
            type: 'property',
            leftLabel: 'bool',
            description: 'Should Object show tooltips when hovering over it.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#tooltip'
        },
        {
            snippet: 'TextTool',
            displayText: 'TextTool',
            type: 'property',
            leftLabel: 'TextTool',
            description: 'A reference to the TextTool class attached to this Object. Read only.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#texttool'
        },
        {
            snippet: 'use_gravity',
            displayText: 'use_gravity',
            type: 'property',
            leftLabel: 'bool',
            description: 'Does gravity affect this Object?',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#use_gravity'
        },
        {
            snippet: 'use_grid',
            displayText: 'use_grid',
            type: 'property',
            leftLabel: 'bool',
            description: 'Should this Object snap to grid points?',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#use_grid'
        },
        {
            snippet: 'use_hands',
            displayText: 'use_hands',
            type: 'property',
            leftLabel: 'bool',
            description: 'Should this Object go into player hands?',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#use_hands'
        },
        {
            snippet: 'use_rotation_value_flip',
            displayText: 'use_rotation_value_flip',
            type: 'property',
            leftLabel: 'bool',
            description: 'When true the object will flip between its rotation values on a flip action.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#use_rotation_value_flip'
        },
        {
            snippet: 'use_snap_points',
            displayText: 'use_snap_points',
            type: 'property',
            leftLabel: 'bool',
            description: 'Should this Object snap to snap points?',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#use_snap_points'
        },
        // Functions
        {
            snippet: 'addDecal(${1:Table|parameters})',
            displayText: 'addDecal(Table parameters)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Add a Decal onto the object.',
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
            description: 'Add a Decal onto the object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#adddecal'
        },
        {
            snippet: 'addForce(${1:Table|force_vector}, ${2:int|force_type})',
            displayText: 'addForce(Table force_vector, int force_type)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Adds a force vector to the Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#addforce'
        },
        {
            snippet: 'addTorque(${1:Table|torque_vector}, ${2:int|force_type})',
            displayText: 'addTorque(Table torque_vector, int force_type)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Adds a torque vector to the Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#addtorque'
        },
        {
            snippet: 'attachHider(${1:string|hider}, ${2:bool|enabled}, ${3:Table|players})',
            displayText: 'attachHider(string hider, bool enabled, Table players)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Attaches a hider to the object (or removes it if enabled is false).',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#attachhider'
        },
        {
            snippet: 'attachInvisibleHider(${1:string|hider}, ${2:bool|enabled}, ${3:Table|players})',
            displayText: 'attachHider(string hider, bool enabled, Table players)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Attaches an invisible hider to the object (or removes it if enabled is false).',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#attachhider'
        },
        {
            snippet: 'call(${1:string|function_name}, ${2:Table|parameters})',
            displayText: 'call(string function_name, Table parameters)',
            type: 'function',
            leftLabel: 'variable',
            description: 'Calls a Lua function owned by this Object and passes an optional Table as parameters to the function.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#call'
        },
        {
            snippet: 'clearButtons()',
            displayText: 'clearButtons()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Clears all 3D UI buttons on this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#clearbuttons'
        },
        {
            snippet: 'clearInputs()',
            displayText: 'clearInputs()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Clears all 3D UI text inputs on this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#clearinputs'
        },
        {
            snippet: 'clone(${1:Table|parameters})',
            displayText: 'clone(Table parameters)',
            type: 'function',
            leftLabel: 'Object',
            description: 'Copies and pastes this Object. Returns a reference to the newly spawned Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#clone'
        },
        {
            snippet:
                'clone({\n\t' +
                'position     = ${1:-- Vector  [x=0, y=3, z=0]},\n\t' +
                'snap_to_grid = ${2:-- boolean [false]},\n' +
                '})',
            displayText: 'clone({Vector position, bool snap_to_grid})',
            type: 'function',
            leftLabel: 'Object',
            description: 'Copies and pastes this Object. Returns a reference to the newly spawned Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#clone'
        },
        {
            snippet: 'createButton(${1:Table|parameters})',
            displayText: 'createButton(Table parameters)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Creates a 3D UI button on this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#createbutton'
        },
        {
            snippet:
                'createButton({\n\t' +
                'click_function = ${1:-- string (required)},\n\t' +
                'function_owner = ${2:-- Object (required)},\n\t' +
                'label          = ${3:-- string},\n\t' +
                'position       = ${4:-- Vector},\n\t' +
                'rotation       = ${5:-- Vector},\n\t' +
                'scale          = ${6:-- Vector},\n\t' +
                'width          = ${7:-- int},\n\t' +
                'height         = ${8:-- int},\n\t' +
                'font_size      = ${9:-- int},\n\t' +
                'color          = ${10:-- Color},\n\t' +
                'font_color     = ${11:-- Color},\n\t' +
                'hover_color    = $(12:-- Color},\n\t' +
                'press_color    = $(13:-- Color},\n\t' +
                'tooltip        = ${14:-- string},\n' +
                '})',
            displayText: 'createButton({string click_function, Object function_owner, string label, Vector position, Vector rotation, Vector scale, int width, int height, int font_size, Color color, Color font_color, Color hover_color, Color press_color, string tooltip})',
            type: 'function',
            leftLabel: 'bool',
            description: 'Creates a 3D UI button on this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#createbutton'
        },
        {
            snippet: 'createInput(${1:Table|parameters})',
            displayText: 'createInput(Table parameters)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Creates a 3D UI text input on this Object. If input_function returns a string it overrides the input contents.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#createinput'
        },
        {
            snippet:
                'createInput({\n\t' +
                'input_function = ${1:-- string (required)},\n\t' +
                'function_owner = ${2:-- Object (required)},\n\t' +
                'label          = ${3:-- string},\n\t' +
                'alignment      = ${4:-- int (1 = Automatic, 2 = Left, 3 = Center, 4 = Right, 5 = Justified)},\n\t' +
                'position       = ${5:-- Vector},\n\t' +
                'rotation       = ${6:-- Vector},\n\t' +
                'scale          = ${7:-- Vector},\n\t' +
                'width          = ${8:-- int},\n\t' +
                'height         = ${9:-- int},\n\t' +
                'font_size      = ${10:-- int},\n\t' +
                'color          = ${11:-- Color},\n\t' +
                'font_color     = ${12:-- Color},\n\t' +
                'tooltip        = ${13:-- Color},\n\t' +
                'value          = ${14:-- string},\n\t' +
                'validation     = ${15:-- int (1 = None, 2 = Integer, 3 = Float, 4 = Alphanumeric, 5 = Username, 6 = Name)},\n\t' +
                'tab            = ${16:-- int (1 = None, 2 = Select Next, 3 = Indent)},\n\t' +
                '})',
            displayText: 'createInput({string input_function, Object function_owner, string label, Vector position, Vector rotation, Vector scale, int width, int height, int font_size, Color color, Color font_color, string tooltip, string value, int validation, int tab})',
            type: 'function',
            leftLabel: 'bool',
            description: 'Creates a 3D UI text input on this Object. If input_function returns a string it overrides the input contents.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#createinput'
        },
        {
            snippet: 'cut(${1:int|index})',
            displayText: 'cut(int index)',
            type: 'function',
            leftLabel: 'Table',
            description: 'Cuts a deck at the given card index and returns created objects.  If no index provided cuts deck in half.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#cut'
        },
        {
            snippet: 'deal(${1:int|number}, ${2:string|player_color}, ${3:int|hand_index})',
            displayText: 'deal(int number, [string player], [int hand_index])',
            type: 'function',
            leftLabel: 'bool',
            description: 'Deals to player’s hand. If no player_color supplied it will deal to all seated players.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#deal'
        },
        {
            snippet: 'dealToColorWithOffset(${1:Vector|offset}, ${2:bool|flip}, ${3:string|player_color})',
            displayText: 'dealToColorWithOffset(Vector offset, bool flip, string player_color)',
            type: 'function',
            leftLabel: 'Object',
            description: 'Deals a Card to a player with an offset from their hand.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#dealtocolorwithoffset'
        },
        {
            snippet: 'destruct()',
            displayText: 'destruct()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Destroys this Object. Mainly so you can call self.destruct().',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#destruct'
        },
        {
            snippet: 'drop()',
            displayText: 'drop()',
            type: 'function',
            leftLabel: 'bool',
            description: 'If held the object will be dropped.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#drop'
        },
        {
            snippet: 'editButton(${1:Table|parameters})',
            displayText: 'editButton(Table parameters)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Edits a 3D UI button on this Object based on its index.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#editbutton'
        },
        {
            snippet:
                'editButton({\n\t' +
                'index          = ${1:-- int    (required)},\n\t' +
                'click_function = ${2:-- string},\n\t' +
                'function_owner = ${3:-- Object},\n\t' +
                'label          = ${4:-- string},\n\t' +
                'position       = ${5:-- Vector},\n\t' +
                'rotation       = ${6:-- Vector},\n\t' +
                'scale          = ${7:-- Vector},\n\t' +
                'width          = ${8:-- int},\n\t' +
                'height         = ${9:-- int},\n\t' +
                'font_size      = ${10:-- int},\n\t' +
                'color          = ${11:-- Color},\n\t' +
                'font_color     = ${12:-- Color},\n' +
                '})',
            displayText: 'editButton({int index, string click_function, Object function_owner, string label, Vector position, Vector rotation, Vector scale, int width, int height, int font_size, Color color, Color font_color})',
            type: 'function',
            leftLabel: 'bool',
            description: 'Edits a 3D UI button on this Object based on its index.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#editbutton'
        },
        {
            snippet: 'editInput(${1:Table|parameters})',
            displayText: 'editInput(Table parameters)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Edits a 3D UI input on this Object based on its index.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#editinput'
        },
        {
            snippet:
                'editInput({\n\t' +
                'index          = ${1:-- int (required)},\n\t' +
                'input_function = ${2:-- string},\n\t' +
                'function_owner = ${3:-- Object},\n\t' +
                'label          = ${4:-- string},\n\t' +
                'alignment      = ${5:-- int (1 = Automatic, 2 = Left, 3 = Center, 4 = Right, 5 = Justified)},\n\t' +
                'position       = ${6:-- Vector},\n\t' +
                'rotation       = ${7:-- Vector},\n\t' +
                'scale          = ${8:-- Vector},\n\t' +
                'width          = ${9:-- int},\n\t' +
                'height         = ${10:-- int},\n\t' +
                'font_size      = ${11:-- int},\n\t' +
                'color          = ${12:-- Color},\n\t' +
                'font_color     = ${13:-- Color},\n\t' +
                'tooltip        = ${14:-- Color},\n\t' +
                'value          = ${15:-- string},\n\t' +
                'validation     = ${16:-- int (1 = None, 2 = Integer, 3 = Float, 4 = Alphanumeric, 5 = Username, 6 = Name)},\n\t' +
                'tab            = ${17:-- int (1 = None, 2 = Select Next, 3 = Indent)},\n' +
                '})',
            displayText: 'editInput({int index, string input_function, Object function_owner, string label, Vector position, Vector rotation, Vector scale, int width, int height, int font_size, Color color, Color font_color, string tooltip, string value, int validation, int tab})',
            type: 'function',
            leftLabel: 'bool',
            description: 'Edits a 3D UI input on this Object based on its index.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#editinput'
        },
        {
            snippet: 'flip()',
            displayText: 'flip()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Flips this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#flip'
        },
        {
            snippet: 'getAngularVelocity()',
            displayText: 'getAngularVelocity()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the current angular velocity vector of the Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getangularvelocity'
        },
        {
            snippet: 'getBounds()',
            displayText: 'getBounds()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the world space axis aligned Bounds of the Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getbounds'
        },
        {
            snippet: 'getBoundsNormalized()',
            displayText: 'getBoundsNormalized()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the world space axis aligned Bounds of the Object at zero rotation.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getboundsnormalized'
        },
        {
            snippet: 'getButtons()',
            displayText: 'getButtons()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Gets a list of all the 3D UI buttons on this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getbuttons'
        },
        {
            snippet: 'getButtons() -- returns table:\n\t' +
                '-- {{int index, string click_function, Object function_owner, string label\n\t' +
                '--   Vector position, Vector rotation, Vector scale, int width, int height\n\t' +
                '--   int font_size, Color color, Color font_color}, ...}',
            displayText: 'getButtons() -- returns {{...',
            type: 'function',
            leftLabel: 'Table',
            description: 'Gets a list of all the 3D UI buttons on this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getbuttons'
        },
        {
            snippet: 'getColorTint()',
            displayText: 'getColorTint()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the color tint for this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getcolortint'
        },
        {
            snippet: 'getComponentVar(${1:string|component_name}, ${2:string|variable_name})',
            displayText: 'getComponentVar(string component_name, string variable_name)',
            type: 'function',
            leftLabel: 'var',
            description: 'Get the current value of a component of an object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getcomponentvar'
        },

        {
            snippet: 'getCustomObject()',
            displayText: 'getCustomObject()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the custom parameters on a Custom Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getcustomobject'
        },
        {
            snippet:
                'getCustomObject() -- returns table:\n\t' +
                '-- image                  string  (Image URL for Custom Board, Custom Dice, Custom Figurine, Custom Tile, and Custom Token.)\n\t' +
                '-- image_secondary        string  (Secondary / Back Image URL for Custom Figurine or Custom Tile.)\n\t' +
                '-- type                   int     (The number of sides of the Custom Dice, the shape of the Custom Tile, the type of Custom Mesh, or the type of Custom AssetBundle.)\n\t' +
                '-- thickness              float   (Thickness of the Custom Tile or Custom Token.)\n\t' +
                '-- stackable              bool    (Is this Custom Tile or Custom Token stackable?)\n\t' +
                '-- merge_distance         float   (The accuracy of the Custom Tile to it’s base image.)\n\t' +
                '-- mesh                   string  (Mesh URL for the Custom Mesh.)\n\t' +
                '-- diffuse                string  (Diffuse image URL for the Custom Mesh.)\n\t' +
                '-- normal                 string  (Normal image URL for the Custom Mesh.)\n\t' +
                '-- collider               string  (Collider URL for the Custom Mesh.)\n\t' +
                '-- convex                 bool    (Is this Custom Mesh concave?)\n\t' +
                '-- material               int     (The material for the Custom Mesh or Custom AssetBundle.)\n\t' +
                '-- specular_intensity     float   (The specular intensity for the Custom Mesh.)\n\t' +
                '-- specular_color         Color   (The specular color for the Custom Mesh.)\n\t' +
                '-- specular_sharpness     float   (The specular sharpness for the Custom Mesh.)\n\t' +
                '-- fresnel_strength       float   (The fresnel strength for the Custom Mesh.)\n\t' +
                '-- cast_shadows           bool    (Does this Custom Mesh cast shadows?)\n\t' +
                '-- assetbundle            string  (AssetBundle URL for this Custom AssetBundle.)\n\t' +
                '-- assetbundle_secondary  string  (Secondary AssetBundle URL for this Custom AssetBundle.)',
            displayText: 'getCustomObject() -- returns {...',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the custom parameters on a Custom Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getcustomobject'
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
                '-- position               Vector  (Position on Object)\n\t' +
                '-- rotation               Vector  (Rotation relative to Object)\n\t' +
                '-- scale                  float   (1 is normal scale)',
            displayText: 'getDecals() -- returns {{...',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns a table of sub-tables, each sub-table representing one decal.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getdecals'
        },
        {
            snippet: 'getDescription()',
            displayText: 'getDescription()',
            type: 'function',
            leftLabel: 'string',
            description: 'Gets the description for this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getdescription'
        },
        {
            snippet: 'getFogOfWarReveal()',
            displayText: 'getFogOfWarReveal()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the fog-of-war reveal settings for this Object: {bool reveal, Player color, float range}.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getfogofwarreveal'
        },
        {
            snippet: 'getFogOfWarReveal()$1\n\t-- getFogOfWarReveal returns:\n\t-- {bool reveal, Player color, float range}',
            displayText: 'getFogOfWarReveal() -- returns {bool reveal, Player color, float range}',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the fog-of-war reveal settings for this Object: {bool reveal, Player color, float range}.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getfogofwarreveal'
        },
        {
            snippet: 'getJoints()',
            displayText: 'getJoints()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns information on any joints attached from this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getjoints'
        },
        {
            snippet:
                'getJoints() -- returns table of tables:\n\t' +
                '-- type                   string  (One of: "Fixed", "Hinge" [H], "Spring" [S])\n\t' +
                '-- joint_object_guid      string  (GUID of attached object)\n\t' +
                '-- collision              bool    (Is collision enabled?)\n\t' +
                '-- break_force            float   (Force required to break joint)\n\t' +
                '-- break_torque           float   (Torque required to break joint)\n\t' +
                '-- axis                   Vector  ([H] Axis of rotation)\n\t' +
                '-- anchor                 Vector  ([H] Position of anchor)\n\t' +
                '-- connector_anchor       Vector  ([H] Position on connected Object)\n\t' +
                '-- motor_force            float   ([H] Option A: Force of rotation)\n\t' +
                '-- motor_velocity         float   ([H] Option B: Velocity of rotaton)\n\t' +
                '-- motor_free_spin        bool    (If enabled the motor will only accelerate but never slow down)\n\t' +
                '-- spring                 float   (Force used to keep objects together)\n\t' +
                '-- damper                 float   (Force used to dampen spring)\n\t' +
                '-- max_distance           float   (Maximum distance objects may be apart)\n\t' +
                '-- min_distance           float   (Minimum distance objects may be apart)',
            displayText: 'getJoints() -- returns {{...',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns information on any joints attached from this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getjoints'
        },
        {
            snippet: 'getGUID()',
            displayText: 'getGUID()',
            type: 'function',
            leftLabel: 'string',
            description: 'Returns the GUID that belongs to this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getguid'
        },
        {
            snippet: 'getInputs()',
            displayText: 'getInputs()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Gets a list of all the 3D UI inputs on this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getinputs'
        },
        {
            snippet:
                'getInputs() -- returns table of tables:\n\t' +
                '-- index               int       \n\t' +
                '-- click_function      string    \n\t' +
                '-- function_owner      Object    \n\t' +
                '-- label               string    \n\t' +
                '-- position            Table     \n\t' +
                '-- rotation            Table     \n\t' +
                '-- scale               Table     \n\t' +
                '-- width               int       \n\t' +
                '-- height              int       \n\t' +
                '-- font_size           int       \n\t' +
                '-- color               Color     \n\t' +
                '-- font_color          Color     \n\t' +
                '-- tooltip             string    \n\t' +
                '-- alignment           int       (1 = Automatic, 2 = Left, 3 = Center, 4 = Right, 5 = Justified)\n\t' +
                '-- value               string    \n\t' +
                '-- validation          int       (1 = None, 2 = Integer, 3 = Float, 4 = Alphanumeric, 5 = Username, 6 = Name)\n\t' +
                '-- tab                 int       (1 = None, 2 = Select Next, 3 = Indent)',
            displayText: 'getInputs() -- returns {{...',
            type: 'function',
            leftLabel: 'Table',
            description: 'Gets a list of all the 3D UI inputs on this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getinputs'
        },
        {
            snippet: 'getJSON()',
            displayText: 'getJSON()',
            type: 'function',
            leftLabel: 'string',
            description: 'Returns a serialization of the JSON string which represents this item.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#get-functions'
        },
        {
            snippet: 'getLoopingEffectIndex()',
            displayText: 'getLoopingEffectIndex()',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the index of the currently looping effect.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/assetbundle/#getloopingeffectindex'
        },
        {
            snippet: 'getLoopingEffects()',
            displayText: 'getLoopingEffects()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns a Table with the keys “index” and “name” for each looping effect.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/assetbundle/#getloopingeffects'
        },
        {
            snippet: 'getLock()',
            displayText: 'getLock()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Get the lock status of this object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getlock'
        },
        {
            snippet: 'getLuaScript()',
            displayText: 'getLuaScript()',
            type: 'function',
            leftLabel: 'string',
            description: 'Returns the Lua script for this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getluascript'
        },
        {
            snippet: 'getName()',
            displayText: 'getName()',
            type: 'function',
            leftLabel: 'string',
            description: 'Returns the nickname for this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getname'
        },
        {
            snippet: 'getObjects()',
            displayText: 'getObjects()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns all the Objects inside of this container.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getobjects'
        },
        {
            snippet: 'getObjects()$1\n\t-- Bag or Deck returns {{string name, string description, string guid, int index, string lua_script, string lust_script_state}, ...}',
            displayText: 'getObjects() -- Bag returns {{string name, string description, string guid, int index, string lua_script, string lust_script_state}, ...}',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns all the Objects inside of this container.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getobjects'
        },
        {
            snippet: 'getObjects()$1\n\t-- Zone.getObjects() returns {Object, ...}',
            displayText: 'getObjects() -- Zone returns {Object, ...}',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns all the Objects inside of this container.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getobjects'
        },
        {
            snippet: 'getPosition()',
            displayText: 'getPosition()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Gets the position for this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getposition'
        },
        {
            snippet: 'getQuantity()',
            displayText: 'getQuantity()',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the number of Objects in a stack.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getquantity'
        },
        {
            snippet: 'getRotation()',
            displayText: 'getRotation()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Gets the rotation of this Object in degrees.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getrotation'
        },
        {
            snippet: 'getRotationValue()',
            displayText: 'getRotationValue()',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the rotation value for this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getrotationvalue'
        },
        {
            snippet: 'getRotationValues()',
            displayText: 'getRotationValues()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the rotation values for this Object. List of Tables with Keys: “value” and “rotation”.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getrotationvalues'
        },
        {
            snippet: 'getRotationValues()$1\n\t-- getRotationValues returns:\n\t-- {{int value, Vector rotation}, ...}',
            displayText: 'getRotationValues() -- returns {{int value, Vector rotation}, ...}',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the rotation values for this Object. List of Tables with Keys: “value” and “rotation”.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getrotationvalues'
        },
        {
            snippet: 'getScale()',
            displayText: 'getScale()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Gets the scale for this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getscale'
        },
        {
            snippet: 'getSnapPoints()',
            displayText: 'getSnapPoints()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the snap points attached to the Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getsnappoints'
        },
        {
            snippet: 'getSnapPoints() -- returns:\n\t-- {{Vector position, Vector rotation, bool rotation_snap}, ...}',
            displayText: 'getSnapPoints() -- returns {{...',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the snap points attached to the Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getsnappoints'
        },
        {
            snippet: 'getStateId()',
            displayText: 'getStateId()',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns id of the active state for this object. Will return -1 if the object has no states.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getstateid'
        },
        {
            snippet: 'getStates()',
            displayText: 'getStates()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns a Table with the keys “name”, “guid”, and “id”.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getstates'
        },
        {
            snippet: 'getStates() -- returns:\n\t-- {{string name, string description, string guid, int id, string lua_script, string lua_script_state}, ...}',
            displayText: 'getStates() -- returns {{...',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns a Table with the keys “name”, “guid”, and “id”.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getstates'
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
            snippet: 'getTransformForward()',
            displayText: 'getTransformForward()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Gets the forward direction of this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#gettransformforward'
        },
        {
            snippet: 'getTransformRight()',
            displayText: 'getTransformRight()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Gets the right direction of this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#gettransformright'
        },
        {
            snippet: 'getTransformUp()',
            displayText: 'getTransformUp()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Gets the up direction of this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#gettransformup'
        },
        {
            snippet: 'getTriggerEffects()',
            displayText: 'getTriggerEffects()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns a Table with the keys “index” and “name” for each trigger effect.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/assetbundle/#gettriggereffects'
        },
        {
            snippet: 'getValue()',
            displayText: 'getValue()',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the value for this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getvalue'
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
            snippet: 'getVectorLines()',
            displayText: 'getVectorLines()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the vector lines on this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getvectorlines'
        },
        {
            snippet: 'getVectorLines() -- returns:\n\t-- {{Table points, Color color, float thickness, Vector rotation}, ...}',
            displayText: 'getVectorLines() -- returns {{...',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the vector lines on this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getvectorlines'
        },
        {
            snippet: 'getVelocity()',
            displayText: 'getVelocity()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the current velocity vector of the Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#getvelocity'
        },
        {
            snippet: 'highlightOff()',
            displayText: 'highlightOff()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Stop highlighting this object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#highlightoff'
        },
        {
            snippet: 'highlightOn(${1:Table|color}, ${2:float|duration})',
            displayText: 'highlightOn(Table color, float duration)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Highlight this object with color for an optional duration. Color values are between 0 and 1.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#highlighton'
        },
        {
            snippet: 'isSmoothMoving()',
            displayText: 'isSmoothMoving()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Is the object smoothly moving from our smooth functions.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#issmoothmoving'
        },
        {
            snippet: 'jointTo(${1:Table|parameters})',
            displayText: 'jointTo(Table parameters)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Joints objects together.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#jointto'
        },
        {
            snippet:
                'jointTo({\n\t' +
                'type             = ${1:-- string (required - "Fixed", "Hinge", or "Spring")},\n\t' +
                'collision        = ${2:-- bool},\n\t' +
                'break_force      = ${3:-- float},\n\t' +
                'break_torque     = ${4:-- float},\n\t' +
                'axis             = ${5:-- Vector},\n\t' +
                'anchor           = ${6:-- Vector},\n\t' +
                'connected_anchor = ${7:-- Vector},\n\t' +
                'motor_force      = ${8:-- float},\n\t' +
                'motor_velocity   = ${9:-- float},\n\t' +
                'motor_free_spin  = ${10:-- bool},\n\t' +
                'spring           = ${11:-- float [10]},\n\t' +
                'damper           = ${12:-- float [0.2]},\n\t' +
                'max_distance     = ${13:-- float},\n\t' +
                'min_distance     = ${14:-- float},\n' +
                '})',
            displayText: 'jointTo({string type, bool collision, float break_force, float break_torque, Vector axis, Vector anchor, Vector connected_anchor, float motor_force, float motor_velocity, bool motor_free_spin, float spring, float damper, float max_distance, float min_distance})',
            type: 'function',
            leftLabel: 'bool',
            description: 'Joints objects together.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#jointTo'
        },
        {
            snippet: 'playLoopingEffect(${1:int|index})',
            displayText: 'playLoopingEffect(int index)',
            type: 'function',
            leftLabel: 'void',
            description: 'Starts playing a looping effect. Index starts at 0.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/assetbundle/#playloopingeffect'
        },
        {
            snippet: 'playTriggerEffect(${1:int|index})',
            displayText: 'playTriggerEffect(int index)',
            type: 'function',
            leftLabel: 'void',
            description: 'Starts playing a trigger effect. Index starts at 0.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/assetbundle/#playtriggereffect'
        },
        {
            snippet: 'positionToLocal(${1:Table|vector})',
            displayText: 'positionToLocal(Table vector)',
            type: 'function',
            leftLabel: 'Table',
            description: 'Converts the world position to a local position of this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#positiontolocal'
        },
        {
            snippet: 'positionToWorld(${1:Table|vector})',
            displayText: 'positionToWorld(Table vector)',
            type: 'function',
            leftLabel: 'Table',
            description: 'Converts the local position of this Object to a world position.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#positiontoworld'
        },
        {
            snippet: 'putObject(${1:Object|object})',
            displayText: 'putObject(Object object)',
            type: 'function',
            leftLabel: 'Object',
            description: 'Add this object to the current object. Works for stacking chips, decks, and bags.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#putobject'
        },
        {
            snippet: 'randomize()',
            displayText: 'randomize()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Same as pressing the ‘R’ key on an Object. Shuffles deck/bag, rolls dice/coin, lifts any other object up in the air.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#randomize'
        },
        {
            snippet: 'randomize(${1:string|player})',
            displayText: 'randomize(string player)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Same as pressing the ‘R’ key on an Object. Triggers onObjectRandomize as if specified player hit it.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#randomize'
        },
        {
            snippet: 'reload()',
            displayText: 'reload()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Reloads this object by destroying and spawning it place. Returns the newly spawned object. Very useful if using setCustomObject().',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#reload'
        },
        {
            snippet: 'removeButton(${1:int|index})',
            displayText: 'removeButton(int index)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Removes a 3D UI button from this Object by its index.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#removebutton'
        },
        {
            snippet: 'removeInput(${1:int|index})',
            displayText: 'removeInput(int index)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Removes a 3D UI text input from this Object by its index.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#removeinput'
        },
        {
            snippet: 'reset()',
            displayText: 'reset()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Resets this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#reset'
        },
        {
            snippet: 'roll()',
            displayText: 'roll()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Rolls this Object. Works on Dice and Coins.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#roll'
        },
        {
            snippet: 'rotate(${1:Table|rotation})',
            displayText: 'rotate(Table rotation)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Smoothly rotates this Object with the given offset in degrees.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#rotate'
        },
        {
            snippet: 'scale(${1:Table|scale})',
            displayText: 'scale(Table scale)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Scales this Object by the given amount.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#scale'
        },
        {
            snippet: 'scale(${1:float|scale})',
            displayText: 'scale(float scale)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Scales this Object in all axes by the given amount.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#scale'
        },
        {
            snippet: 'setAngularVelocity(${1:Table|vector})',
            displayText: 'setAngularVelocity(Table vector)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the angular velocity of the object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setangularvelocity'
        },
        {
            snippet: 'setColorTint(${1:Table|color})',
            displayText: 'setColorTint(Table color)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the color tint for this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setcolortint'
        },
        {
            snippet: 'setComponentVar(${1:string|component_name}, ${2:string|variable_name}, ${3:value})',
            displayText: 'setComponentVar(string component_name, string variable_name, var value)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Set the current value of a component of an object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setcomponentvar'
        },
        {
            snippet: 'setCustomObject(${1:Table|parameters})',
            displayText: 'setCustomObject(Table parameters)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Used to create a Custom Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setcustomobject'
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
            snippet: 'setDescription(${1:string|description})',
            displayText: 'setDescription(string description)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the description for this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setdescription'
        },
        {
            snippet: 'setFogOfWarReveal(${1:Table|fog_setting})',
            displayText: 'setFogOfWarReveal(Table fog_setting)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets whether the object reveals fog-of-war: {bool reveal, Player color, float range}',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setfogofwarreveal'
        },
        {
            snippet:
                'setFogOfWarReveal({\n\t' +
                'reveal   = ${1:-- bool},\n\t' +
                'color    = ${2:-- Player},\n\t' +
                'range    = ${3:-- float},\n' +
                '})',
            displayText: 'setFogOfWarReveal({bool reveal, Player color, float range})',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets whether the object reveals fog-of-war: {bool reveal, Player color, float range}',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setfogofwarreveal'
        },
        {
            snippet: 'setHiddenFrom(${1:Table|players})',
            displayText: 'setHiddenFrom(Table players)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Hides the object from the specified players as if it were in a hand zone.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#sethiddenfrom'
        },
        {
            snippet: 'setInvisibleTo(${1:Table|players})',
            displayText: 'setInvisibleTo(Table players)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Makes the object invisible to the specified players.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#seinvisibleto'
        },
        {
            snippet: 'setLock(${1:bool|lock})',
            displayText: 'setLock(bool lock)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Set the lock status of an object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setlock'
        },
        {
            snippet: 'setLuaScript(${1:string|script})',
            displayText: 'setLuaScript(string script)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the Lua script for this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setluascript'
        },
        {
            snippet: 'setName(${1:string|nickname})',
            displayText: 'setName(string nickname)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the nickname for this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setname'
        },
        {
            snippet: 'setPosition(${1:Table|position})',
            displayText: 'setPosition(Table position)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the world space position for this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setposition'
        },
        {
            snippet: 'setPositionSmooth(${1:Table|position}, ${2:bool|collide}, ${3:bool|fast})',
            displayText: 'setPositionSmooth(Table position, bool collide, bool fast)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Smoothly moves this Object from its current position to a given world space position.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setpositionsmooth'
        },
        {
            snippet: 'setRotation(${1:Table|rotation})',
            displayText: 'setRotation(Table rotation)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the rotation of this Object in degrees.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setrotation'
        },
        {
            snippet: 'setRotationSmooth(${1:Table|rotation}, ${2:bool|collide}, ${3:bool|fast})',
            displayText: 'setRotationSmooth(Table rotation, bool collide, bool fast)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Smoothly rotates this Object to the given orientation in degrees.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setrotationsmooth'
        },
        {
            snippet: 'setRotationValues(${1:Table|rotation_values})',
            displayText: 'setRotationValues(Table rotation_values)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the rotation values of this Object: {{int value, Vector rotation}, ...}',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setrotationvalues'
        },
        {
            snippet:
                'setRotationValues({\n\t{\n\t\t' +
                'value    = ${1:-- int},\n\t\t' +
                'rotation = ${2:-- Vector},\n\t' +
                '},\n})',
            displayText: 'setRotationValues({{int value, Vector rotation}, })',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the rotation values of this Object: {{int value, Vector rotation}, ...}',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setrotationvalues'
        },
        {
            snippet: 'setScale(${1:Table|scale})',
            displayText: 'setScale(Table scale)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the scale for this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setscale'
        },
        {
            snippet: 'setSnapPoints(${1:Table|snap_points})',
            displayText: 'setSnapPoints(Table snap_points)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the snap points attached to this Object: {{Vector position, Vector rotation, bool rotation_snap}, ...}',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setsnappoints'
        },
        {
            snippet:
                'setSnapPoints({\n\t{\n\t\t' +
                'position         = ${1:-- Vector},\n\t\t' +
                'rotation         = ${2:-- Vector},\n\t\t' +
                'rotation_snap    = ${3:-- bool},\n\t' +
                '},\n})',
            displayText: 'setSnapPoints({{Vector position, Vector rotation, bool rotation_snap}, })',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the snap points attached to this Object: {{Vector position, Vector rotation, bool rotation_snap}, ...}',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setsnappoints'
        },
        {
            snippet: 'setState(${1:int|state})',
            displayText: 'setState(int state)',
            type: 'function',
            leftLabel: 'Object',
            description: 'Sets the State on this Object and returns reference to the new State.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setstate'
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
            snippet: 'setValue(${1:variable|value})',
            displayText: 'setValue(variable value)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the value for this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setvalue'
        },
        {
            snippet: 'setVar(${1:string|variable_name}, ${2:variable|value})',
            displayText: 'setVar(string variable_name, variable value)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets a Lua variable for this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setvar'
        },
        {
            snippet: 'setVectorLines(${1:Table|vector_lines})',
            displayText: 'setVectorLines(Table vector_lines)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the vector lines attached to this Object: {{Table points, Color color, float thickness, Vector rotation}, ...}',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setvectorlines'
        },
        {
            snippet:
                'setVectorLines({\n\t{\n\t\t' +
                'points         = ${1:-- Table},\n\t\t' +
                'color          = ${2:-- Color},\n\t\t' +
                'thickness      = ${3:-- float},\n\t\t' +
                'rotation       = ${4:-- Vector},\n\t' +
                '},\n})',
            displayText: 'setVectorLines({{Table points, Color color, float thickness, Vector rotation}, })',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the vector lines attached to this Object: {{Table points, Color color, float thickness, Vector rotation}, ...}',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setvectorlines'
        },
        {
            snippet: 'setVelocity(${1:Table|vector})',
            displayText: 'setVelocity(Table vector)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the velocity of the object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#setvelocity'
        },
        {
            snippet: 'shuffle()',
            displayText: 'shuffle()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Shuffles this Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#shuffle'
        },
        {
            snippet: 'shuffleStates()',
            displayText: 'shuffleStates()',
            type: 'function',
            leftLabel: 'Object',
            description: 'Shuffles the States on this Object and returns reference to the new State.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#shufflestates'
        },
        {
            snippet: 'split(${1:int|stacks})',
            displayText: 'split(int stacks)',
            type: 'function',
            leftLabel: 'Table',
            description: 'Splits a deck into the chosen number of stacks and returns created objects.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#split'
        },
        {
            snippet: 'takeObject(${1:Table|parameters})',
            displayText: 'takeObject(Table parameters)',
            type: 'function',
            leftLabel: 'Object',
            description: 'Takes an Object from this container.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#takeobject'
        },
        {
            snippet:
                'takeObject({\n\t' +
                'position          = ${1:-- Vector [container position, x+2]},\n\t' +
                'rotation          = ${2:-- Vector [container rotation]},\n\t' +
                'callback_function = ${3:-- function},\n\t' +
                'params            = ${4:-- Table},\n\t' +
                'smooth            = ${5:-- bool},\n\t' +
                'flip              = ${6:-- bool},\n\t' +
                'guid              = ${7:-- string},\n\t' +
                'index             = ${8:-- int},\n\t' +
                'top               = ${9:-- bool [true]},\n' +
                '})',
            displayText: 'takeObject({Vector position, Vector rotation, function callback_function, Table params, bool smooth, bool flip, string guid, int index, bool top})',
            type: 'function',
            leftLabel: 'Object',
            description: 'Takes an Object from this container.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#takeobject'
        },
        {
            snippet: 'translate(${1:Table|position})',
            displayText: 'translate(Table position)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Smoothly moves this Object from its current position to a given offset.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/object/#translate'
        },
    ];

    return suggestions;
}
