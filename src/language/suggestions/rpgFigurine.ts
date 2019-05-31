import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        // Functions
        {
            snippet: 'attack()',
            displayText: 'attack()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Plays a random attack animation.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/rpgfigurine/#attack'
        },
        {
            snippet: 'changeMode()',
            displayText: 'changeMode()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Changes the RPG Figurine\'s current mode.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/rpgfigurine/#changemode'
        },
        {
            snippet: 'die()',
            displayText: 'die()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Plays the death animation. Call die() again to reset the RPG Figurine.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/rpgfigurine/#die'
        },
        {
            snippet: 'onAttack(hit_list)\n\t${0:-- body...}\nend',
            displayText: 'onAttack(Table hit_list)',
            type: 'function',
            description: 'This function is called, if it exists in your script, when this RPGFigurine attacks another RPGFigurine.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/rpgfigurine/#onattack'
        },
        {
            snippet: 'onHit(attacker)\n\t${0:-- body...}\nend',
            displayText: 'onHit(Object attacker)',
            type: 'function',
            description: 'This function is called, if it exists in your script, when this RPGFigurine is attacked by another RPGFigurine.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/rpgfigurine/#onhit'
        },
    ];

    return suggestions;
}
