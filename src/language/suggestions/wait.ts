import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        // Functions
        {
            snippet: 'condition(${1:function|func}, ${2:function|condition}, ${3:float|timeout}, ${4:function|timeout_func})',
            displayText: 'condition(function func, function condition, float timeout, function timeout_func)',
            type: 'function',
            leftLabel: 'int',
            description: 'Activates a function when a given function returns true or activates a different function if a timeout occurs.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#condition'
        },
        {
            snippet: 'frames(${1:function|func}, ${2:int|frame_count})',
            displayText: 'frames(function func, int frame_count)',
            type: 'function',
            leftLabel: 'int',
            description: 'Activates a function after a set number of frames.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#frames'
        },
        {
            snippet: 'stop(${1:int|id})',
            displayText: 'stop(int id)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Stops a currently running Wait function.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#stop'
        },
        {
            snippet: 'time(${1:function|func}, ${2:float|time}, ${3:int|repetitions})',
            displayText: 'time(function func, float time, int repetitions)',
            type: 'function',
            leftLabel: 'int',
            description: 'Activates a function after a set amount of time has passed, repeats given amount of times.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#time'
        },
    ];

    return suggestions;
}
