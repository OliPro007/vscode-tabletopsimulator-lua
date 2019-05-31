import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        // Functions
        {
            snippet: 'addNotebookTab(${1:Table|parameters})',
            displayText: 'addNotebookTab(Table parameters)',
            type: 'function',
            leftLabel: 'int',
            description: 'Adds a new Tab to the Notebook and returns the index of the newly added Tab.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#addnotebooktab'
        },
        {
            snippet:
                'addNotebookTab({\n\t' +
                'title = ${1:-- string},\n\t' +
                'body  = ${2:-- string (BBcode is allowed)},\n\t' +
                'color = ${3:-- string [Grey]},\n' +
                '})',
            displayText: 'addNotebookTab({string title, string body, string color})',
            type: 'function',
            leftLabel: 'int',
            description: 'Adds a new Tab to the Notebook and returns the index of the newly added Tab.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#addnotebooktab'
        },
        {
            snippet: 'editNotebookTab(${1:Table|parameters})',
            displayText: 'editNotebookTab(Table parameters)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Edits an existing Tab on the Notebook.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#editnotebooktab'
        },
        {
            snippet:
                'editNotebookTab({\n\t' +
                'index = ${1:-- int},\n\t' +
                'title = ${2:-- string},\n\t' +
                'body  = ${3:-- string (BBcode is allowed)},\n\t' +
                'color = ${4:-- string [Grey]},\n' +
                '})',
            displayText: 'editNotebookTab({int index, string title, string body, string color})',
            type: 'function',
            leftLabel: 'bool',
            description: 'Edits an existing Tab on the Notebook.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#editnotebooktab'
        },
        {
            snippet: 'getNotebookTabs()',
            displayText: 'getNotebookTabs()',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns a Table of Tables of all of the Tabs in the Notebook.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#getnotebooktabs'
        },
        {
            snippet: 'getNotebookTabs()$1\n\t-- getNotebookTabs returns:\n\t-- {{int index, string title, string body, string color}, ...}',
            displayText: 'getNotebookTabs() -- returns {{int index, string title, string body, string color}, ...}',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns a Table of Tables of all of the Tabs in the Notebook.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#getnotebooktabs'
        },
        {
            snippet: 'getNotes()',
            displayText: 'getNotes()',
            type: 'function',
            leftLabel: 'string',
            description: 'Returns the current on-screen notes as a string.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#getnotes'
        },
        {
            snippet: 'removeNotebookTab(${1:int|index})',
            displayText: 'removeNotebookTab(int index)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Removes a Tab from the Notebook at a given index.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#removenotebooktab'
        },
        {
            snippet: 'setNotes(${1:string|notes})',
            displayText: 'setNotes(string notes)',
            type: 'function',
            leftLabel: 'bool',
            description: 'Sets the current on-screen notes. BBCOde is allowed for styling.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/base/#setnotes'
        },
    ];

    return suggestions;
}
