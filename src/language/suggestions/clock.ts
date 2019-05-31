import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        // Member Variables
        {
            snippet: 'paused',
            displayText: 'paused',
            type: 'property',
            leftLabel: 'bool',
            description: 'If the Clock’s timer is paused. Setting this value will pause or resume the timer.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/clock/#paused'
        },
        // Functions
        {
            snippet: 'getValue()',
            displayText: 'getValue()',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the current value in stopwatch or timer mode as the number of seconds.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/clock/#getvalue'
        },
        {
            snippet: 'pauseStart()',
            displayText: 'pauseStart()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Toggle function for pausing and resuming a stopwatch or timer on the Clock.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/clock/#pausestart'
        },
        {
            snippet: 'setValue(${1:int|seconds})',
            displayText: 'setValue(int seconds)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Switches the clock to timer mode and sets the timer to the given value in seconds.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/clock/#setvalue'
        },
        {
            snippet: 'startStopwatch()',
            displayText: 'startStopwatch()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Switches the Clock to stopwatch mode and begins the stopwatch from 0.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/clock/#startstopwatch'
        },
        {
            snippet: 'showCurrentTime()',
            displayText: 'showCurrentTime()',
            type: 'function',
            leftLabel: 'bool',
            description: 'Switches the Clock back to displaying the current time.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/clock/#showcurrenttime'
        },
    ];

    return suggestions;
}
