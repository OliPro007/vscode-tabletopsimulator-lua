import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        {
            snippet: 'create(${1:function|f})',
            displayText: 'create(function f)',
            type: 'function',
            leftLabel: 'thread',
            description: 'Creates a new coroutine, with body f.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-coroutine.create'
        },
        {
            snippet: 'resume(${1:coroutine|co})',
            displayText: 'resume(coroutine co [, val1, ···])',
            type: 'function',
            leftLabel: 'Table',
            description: 'Starts or continues the execution of coroutine co.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-coroutine.resume'
        },
        {
            snippet: 'running()',
            displayText: 'running()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns the running coroutine plus a boolean, true when the running coroutine is the main one.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-coroutine.running'
        },
        {
            snippet: 'status(${1:coroutine|co})',
            displayText: 'status(coroutine co)',
            type: 'function',
            leftLabel: 'string',
            description: 'Returns the status of coroutine co, as a string.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-coroutine.status'
        },
        {
            snippet: 'wrap(${1:function|f})',
            displayText: 'wrap(function f)',
            type: 'function',
            leftLabel: 'Table',
            description: 'Creates a new coroutine, with body f.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-coroutine.wrap'
        },
        {
            snippet: 'yield(${1:int|value})',
            displayText: 'yield(int value)',
            type: 'function',
            description: 'Suspends the execution of the calling coroutine.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-coroutine.yield'
        },
    ];

    return suggestions;
}
