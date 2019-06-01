import { Suggestion } from './suggestion';

export function getSuggestions(globalScript: boolean): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [];
    if (!globalScript) {
        suggestions = suggestions.concat([
            {
                snippet:
                    'onCollisionEnter(collision_info)\n\t' +
                    '-- collision_info table:\n\t' +
                    '--   collision_object    Object\n\t' +
                    '--   contact_points      Table     {Vector, ...}\n\t' +
                    '--   relative_velocity   Vector\n\t' +
                    '$1\nend',
                displayText: 'onCollisionEnter(Table collision_info)',
                type: 'function',
                description: 'Automatically called when this Object collides with another Object.',
                descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#oncollisionenter'
            },
            {
                snippet:
                    'onCollisionExit(collision_info)\n\t' +
                    '-- collision_info table:\n\t' +
                    '--   collision_object    Object\n\t' +
                    '--   contact_points      Table     {Vector, ...}\n\t' +
                    '--   relative_velocity   Vector\n\t' +
                    '$1\nend',
                displayText: 'onCollisionExit(Table collision_info)',
                type: 'function',
                description: 'Automatically called when this Object stops touching another Object.',
                descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#oncollisionexit'
            },
            {
                snippet:
                    'onCollisionStay(collision_info)\n\t' +
                    '-- collision_info table:\n\t' +
                    '--   collision_object    Object\n\t' +
                    '--   contact_points      Table     {Vector, ...}\n\t' +
                    '--   relative_velocity   Vector\n\t' +
                    '$1\nend',
                displayText: 'onCollisionStay(Table collision_info)',
                type: 'function',
                description: 'Automatically called when this Object is touching another Object.',
                descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#oncollisionstay'
            },
            {
                snippet: 'onDestroy()\n\t${0:-- body...}\nend',
                displayText: 'onDestroy()',
                type: 'function',
                description: 'Automatically called when this Object is destroyed.',
                descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#ondestroy'
            },
            {
                snippet: 'onDrop(player_color)\n\t${0:-- body...}\nend',
                displayText: 'onDrop(string player_color)',
                type: 'function',
                description: 'Automatically called when this Object is dropped.',
                descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#ondrop'
            },
            {
                snippet: 'onPeek(player_color)\n\t${0:-- body...}\nend',
                displayText: 'onPeek(string player_color)',
                type: 'function',
                description: 'Automatically called when this Object is peeked.',
                descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onpeek'
            },
            {
                snippet: 'onPickUp(player_color)\n\t${0:-- body...}\nend',
                displayText: 'onPickUp(string player_color)',
                type: 'function',
                description: 'Automatically called when this Object is picked up.',
                descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onpickup'
            },
            {
                snippet: 'onRandomize(player_color)\n\t${0:-- body...}\nend',
                displayText: 'onRandomze(string player_color)',
                type: 'function',
                description: 'Automatically called when this Object is randomized.',
                descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onrandomze'
            },
            {
                snippet: 'onSearchStart(player_color)\n\t${0:-- body...}\nend',
                displayText: 'onSearchStart(string player_color)',
                type: 'function',
                description: 'Automatically called when player_color starts to search this object.',
                descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onsearchstart'
            },
            {
                snippet: 'onSearchEnd(player_color)\n\t${0:-- body...}\nend',
                displayText: 'onSearchEnd(string player_color)',
                type: 'function',
                description: 'Automatically called when player_color stops searching this object.',
                descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onsearchend'
            },
        ]);
    }
    suggestions = suggestions.concat([
        {
            snippet: 'onChat(message, player)\n\t${0:-- body...}\nend',
            displayText: 'onChat(string message, Player player)',
            type: 'function',
            description: 'This function is called every time a player sends a chat message.  Return false to cancel that message.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onchat'
        },
        {
            snippet: 'onExternalMessage(table)\n\t${0:-- body...}\nend',
            displayText: 'onExternalMessage(Table table)',
            type: 'function',
            leftLabel: 'bool',
            description: 'This function called when a message is received from the External Editor API.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/externaleditorapi/'
        },
        {
            snippet: 'onFixedUpdate()\n\t${0:-- body...}\nend',
            displayText: 'onFixedUpdate()',
            type: 'function',
            description: 'This function is called, if it exists in your script, every physics tick which happens 90 times a second.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onfixedupdate'
        },
        {
            snippet: 'onLoad(save_state)\n\t${0:-- body...}\nend',
            displayText: 'onLoad(string save_state)',
            type: 'function',
            description: 'Automatically called when a game save is finished loading every Object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onload'
        },
        {
            snippet: 'onObjectDestroy(dying_object)\n\t${0:-- body...}\nend',
            displayText: 'onObjectDestroy(Object dying_object)',
            type: 'function',
            description: 'Automatically called when an Object is destroyed.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onobjectdestroy'
        },
        {
            snippet: 'onObjectDrop(dropped_object, player_color)\n\t${0:-- body...}\nend',
            displayText: 'onObjectDrop(Object dropped_object, string player_color)',
            type: 'function',
            description: 'Automatically called when an Object is dropped.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onobjectdrop'
        },
        {
            snippet: 'onObjectEnterContainer(container, enter_object)\n\t${0:-- body...}\nend',
            displayText: 'onObjectEnterContainer(Object container, Object enter_object)',
            type: 'function',
            description: 'Automatically called when an Object enters any container(Deck, Bag, Chip Stack, etc).',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onobjectentercontainer'
        },
        {
            snippet: 'onObjectEnterScriptingZone(zone, enter_object)\n\t${0:-- body...}\nend',
            displayText: 'onObjectEnterScriptingZone(Object zone, Object enter_object)',
            type: 'function',
            description: 'Automatically called when an Object enters a Scripting Zone.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onobjectenterscriptingzone'
        },
        {
            snippet: 'onObjectLeaveContainer(container, leave_object)\n\t${0:-- body...}\nend',
            displayText: 'onObjectLeaveContainer(Object container, Object leave_object)',
            type: 'function',
            description: 'Automatically called when an Object leaves any container(Deck, Bag, Chip Stack, etc).',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onobjectleavecontainer'
        },
        {
            snippet: 'onObjectLeaveScriptingZone(zone, leave_object)\n\t${0:-- body...}\nend',
            displayText: 'onObjectLeaveScriptingZone(Object zone, Object leave_object)',
            type: 'function',
            description: 'Automatically called when an Object leaves a Scripting Zone.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onobjectleavescriptingzone'
        },
        {
            snippet: 'onObjectLoopingEffect(object, index)\n\t${0:-- body...}\nend',
            displayText: 'onObjectLoopingEffect(Object object, int index)',
            type: 'function',
            description: "Automatically called when an asset Object's loop is started.",
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onobjectloopingeffect'
        },
        {
            snippet: 'onObjectPeek(object, player_color)\n\t${0:-- body...}\nend',
            displayText: 'onObjectPeek(Object object, string player_color)',
            type: 'function',
            description: 'Automatically called when an Object is peeked.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onobjectpeek'
        },
        {
            snippet: 'onObjectPickUp(picked_up_object, player_color)\n\t${0:-- body...}\nend',
            displayText: 'onObjectPickUp(Object picked_up_object, string player_color)',
            type: 'function',
            description: 'Automatically called when an Object is picked up.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onobjectpickup'
        },
        {
            snippet: 'onObjectRandomize(object, player_color)\n\t${0:-- body...}\nend',
            displayText: 'onObjectRandomize(Object object, string player_color)',
            type: 'function',
            description: 'Automatically called when an asset Object is randomized by player_color.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onobjectrandomize'
        },
        {
            snippet: 'onObjectSearchStart(object, player_color)\n\t${0:-- body...}\nend',
            displayText: 'onObjectSearchStart(Object object, string player_color)',
            type: 'function',
            description: 'Automatically called when player_color starts searching asset object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onobjectsearchstart'
        },
        {
            snippet: 'onObjectSearchEnd(object, player_color)\n\t${0:-- body...}\nend',
            displayText: 'onObjectSearchEnd(Object object, string player_color)',
            type: 'function',
            description: 'Automatically called when player_color stops searching asset object.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onobjectsearchend'
        },
        {
            snippet: 'onObjectSpawn(object)\n\t${0:-- body...}\nend',
            displayText: 'onObjectSpawn(Object object)',
            type: 'function',
            description: 'Automatically called when an Object is spawned.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onobjectspawn'
        },
        {
            snippet: 'onObjectTriggerEffect(object, index)\n\t${0:-- body...}\nend',
            displayText: 'onObjectTriggerEffect(Object object, int index)',
            type: 'function',
            description: 'Automatically called when an asset Object is triggered.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onobjecttriggereffect'
        },
        {
            snippet: 'onPlayerChangeColor(player_color)\n\t${0:-- body...}\nend',
            displayText: 'onPlayerChangeColor(string player_color)',
            type: 'function',
            description: 'Automatically called when a Player changes color.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onplayerchangecolor'
        },
        {
            snippet: 'onPlayerConnect(player_id)\n\t${0:-- body...}\nend',
            displayText: 'onPlayerConnect(int player_id)',
            type: 'function',
            description: 'Automatically called when a Player connects.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onplayerconnect'
        },
        {
            snippet: 'onPlayerDisconnect(player_id)\n\t${0:-- body...}\nend',
            displayText: 'onPlayerDisconnect(int player_id)',
            type: 'function',
            description: 'Automatically called when a Player disconnects.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onplayerdisconnect'
        },
        {
            snippet: 'onPlayerTurnEnd(player_color_end, player_color_next)\n\t${0:-- body...}\nend',
            displayText: 'onPlayerTurnEnd(string player_color_end, string player_color_next)',
            type: 'function',
            description: 'Automatically called at the end of a Player\'s turn.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onplayerturnend'
        },
        {
            snippet: 'onPlayerTurnStart(player_color_start, player_color_previous)\n\t${0:-- body...}\nend',
            displayText: 'onPlayerTurnStart(string player_color_start, string player_color_previous)',
            type: 'function',
            description: 'Automatically called at the start of a Player\'s turn.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onplayerturnstart'
        },
        {
            snippet: 'onSave()\n\t${0:-- body...}\nend',
            displayText: 'onSave()',
            type: 'function',
            description: 'Automatically called when the game saves (including auto-save for Rewinding).',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onsave'
        },
        {
            snippet: 'onScriptingButtonDown(index, player_color)\n\t${0:-- body...}\nend',
            displayText: 'onScriptingButtonDown(int index, string player_color)',
            type: 'function',
            description: 'Automatically called when a player presses down one of the scripting button hotkeys.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onscriptingbuttondown'
        },
        {
            snippet: 'onScriptingButtonUp(index, player_color)\n\t${0:-- body...}\nend',
            displayText: 'onScriptingButtonUp(int index, string player_color)',
            type: 'function',
            description: 'Automatically called when a player releases one of the scripting button hotkeys.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onscriptingbuttonup'
        },
        {
            snippet: 'onUpdate()\n\t${0:-- body...}\nend',
            displayText: 'onUpdate()',
            type: 'function',
            description: 'Automatically called once every frame.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/event/#onupdate'
        },
    ]);

    return suggestions;
}
