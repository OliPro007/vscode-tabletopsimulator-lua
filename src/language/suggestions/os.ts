import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        {
            snippet: 'clock()',
            displayText: 'clock()',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns an approximation of the amount in seconds of CPU time used by the program.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-os.clock'
        },
        {
            snippet: 'date()',
            displayText: 'date([format [, time]])',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns a string or a table containing date and time.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-os.date'
        },
        {
            snippet: 'difftime(${1:time|t2}, ${2:time|t1})',
            displayText: 'difftime(t2, t1)',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the number of seconds from time t1 to time t2.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-os.difftime'
        },
        {
            snippet: 'time()',
            displayText: 'time([table])',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the current time when called without arguments, or a time representing the date and time specified by the given table.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-os.time'
        },
    ];

    return suggestions;
}
