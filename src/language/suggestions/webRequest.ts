import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        // Functions
        {
            snippet: 'get(${1:string|url}, ${2:function|callback_function})',
            displayText: 'get(string url, function callback_function)',
            type: 'function',
            leftLabel: 'WebRequest',
            description: 'Get data in text from the url. Callback function is supplied the WebRequest.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/webrequest/#get'
        },
        {
            snippet:
                'get(${1:string|url}, ${2:function|callback_function}) -- returns and passes to callback:\n\t' +
                '-- download_progress    bool      (0.0 - 1.0)\n\t' +
                '-- error                string\n\t' +
                '-- is_error             bool\n\t' +
                '-- is_done              bool\n\t' +
                '-- text                 string\n\t' +
                '-- upload_progress      bool      (0.0 - 1.0)\n\t' +
                '-- url                  string',
            displayText: 'get(string url, function callback_function) -- returns ...',
            type: 'function',
            leftLabel: 'WebRequest',
            description: 'Get data in text from the url. Callback function is supplied the WebRequest.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/webrequest/#get'
        },
        {
            snippet: 'post(${1:string|url}, ${2:Table|form}, ${3:function|callback_function})',
            displayText: 'post(string url, Table form, function callback_function)',
            type: 'function',
            leftLabel: 'WebRequest',
            description: 'Post the form to the url. Callback function is supplied the WebRequest.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/webrequest/#post'
        },
        {
            snippet: 'post(${1:string|url}, ${2:Table|form}, ${3:function|callback_function}) -- returns and passes to callback:\n\t' +
                '-- download_progress    bool      (0.0 - 1.0)\n\t' +
                '-- error                string\n\t' +
                '-- is_error             bool\n\t' +
                '-- is_done              bool\n\t' +
                '-- text                 string\n\t' +
                '-- upload_progress      bool      (0.0 - 1.0)\n\t' +
                '-- url                  string',
            displayText: 'post(string url, Table form, function callback_function) -- returns ...',
            type: 'function',
            leftLabel: 'WebRequest',
            description: 'Post the form to the url. Callback function is supplied the WebRequest.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/webrequest/#post'
        },
        {
            snippet: 'put(${1:string|url}, ${2:string|data}, ${3:function|callback_function})',
            displayText: 'put(string url, string data, function callback_function)',
            type: 'function',
            leftLabel: 'WebRequest',
            description: 'Put the data to the url. Callback function is supplied the WebRequest.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/webrequest/#put'
        },
        {
            snippet: 'put(${1:string|url}, ${2:string|data}, ${3:function|callback_function}) -- returns and passes to callback:\n\t' +
                '-- download_progress    bool      (0.0 - 1.0)\n\t' +
                '-- error                string\n\t' +
                '-- is_error             bool\n\t' +
                '-- is_done              bool\n\t' +
                '-- text                 string\n\t' +
                '-- upload_progress      bool      (0.0 - 1.0)\n\t' +
                '-- url                  string',
            displayText: 'put(string url, string data, function callback_function) -- returns ...',
            type: 'function',
            leftLabel: 'WebRequest',
            description: 'Put the data to the url. Callback function is supplied the WebRequest.',
            descriptionMoreURL: 'https://api.tabletopsimulator.com/webrequest/#put'
        },
    ];

    return suggestions;
}
