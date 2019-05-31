import { Suggestion } from './suggestion';

export function getSuggestions(): Suggestion[] {
    let suggestions: Suggestion[] = [];
    suggestions = [
        // Member Variables
        {
            snippet: 'huge',
            displayText: 'huge',
            type: 'constant',
            leftLabel: 'float',
            description: 'The value HUGE_VAL, a value larger than or equal to any other numerical value.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.huge'
        },
        {
            snippet: 'pi',
            displayText: 'pi',
            type: 'constant',
            leftLabel: 'float',
            description: 'The value of p.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.pi'
        },
        // Functions
        {
            snippet: 'abs(${1:float|x})',
            displayText: 'abs(float x)',
            type: 'function',
            leftLabel: 'float',
            description: 'Returns the absolute value of x.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.abs'
        },
        {
            snippet: 'acos(${1:float|x})',
            displayText: 'acos(float x)',
            type: 'function',
            leftLabel: 'float',
            description: 'Returns the arc cosine of x (in radians).',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.acos'
        },
        {
            snippet: 'asin(${1:float|x})',
            displayText: 'asin(float x)',
            type: 'function',
            leftLabel: 'float',
            description: 'Returns the arc sine of x (in radians).',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.asin'
        },
        {
            snippet: 'atan(${1:float|x})',
            displayText: 'atan(float x)',
            type: 'function',
            leftLabel: 'float',
            description: 'Returns the arc tangent of x (in radians).',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.atan'
        },
        {
            snippet: 'atan2(${1:float|y}, ${2:float|x})',
            displayText: 'atan2(float y, float x)',
            type: 'function',
            leftLabel: 'float',
            description: 'Returns the arc tangent of y/x (in radians), but uses the signs of both parameters to find the quadrant of the result.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.atan2'
        },
        {
            snippet: 'ceil(${1:float|x})',
            displayText: 'ceil(float x)',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the smallest integer larger than or equal to x.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.ceil'
        },
        {
            snippet: 'cos(${1:float|x})',
            displayText: 'cos(float x)',
            type: 'function',
            leftLabel: 'float',
            description: 'Returns the cosine of x (assumed to be in radians).',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.cos'
        },
        {
            snippet: 'cosh(${1:float|x})',
            displayText: 'cosh(float x)',
            type: 'function',
            leftLabel: 'float',
            description: 'Returns the hyperbolic cosine of x.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.cosh'
        },
        {
            snippet: 'deg(${1:float|x})',
            displayText: 'deg(float x)',
            type: 'function',
            leftLabel: 'float',
            description: 'Returns the angle x (given in radians) in degrees.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.deg'
        },
        {
            snippet: 'exp(${1:float|x})',
            displayText: 'exp(float x)',
            type: 'function',
            leftLabel: 'float',
            description: 'Returns the value e^x.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.exp'
        },
        {
            snippet: 'floor(${1:float|x})',
            displayText: 'floor(float x)',
            type: 'function',
            leftLabel: 'int',
            description: 'Returns the largest integer smaller than or equal to x.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.floor'
        },
        {
            snippet: 'fmod(${1:float|x}, ${2:float|y})',
            displayText: 'fmod(float x, float y)',
            type: 'function',
            leftLabel: 'float',
            description: 'Returns the remainder of the division of x by y that rounds the quotient towards zero.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.fmod'
        },
        {
            snippet: 'frexp(${1:float|x})',
            displayText: 'frexp(float x)',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns m and e such that x = m2^e, e is an integer and the absolute value of m is in the range [0.5, 1) (or zero when x is zero).',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.frexp'
        },
        {
            snippet: 'ldexp(${1:float|m}, ${2:int|e})',
            displayText: 'ldexp(float m, int e)',
            type: 'function',
            leftLabel: 'float',
            description: 'Returns m2^e (e should be an integer).',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.ldexp'
        },
        {
            snippet: 'log(${1:float|x})',
            displayText: 'log(float x [, base])',
            type: 'function',
            leftLabel: 'float',
            description: 'Returns the logarithm of x in the given base.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.log'
        },
        {
            snippet: 'max(${1:float|x}, ${2:...})',
            displayText: 'max(float x, ...)',
            type: 'function',
            leftLabel: 'float',
            description: 'Returns the maximum value among its arguments.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.max'
        },
        {
            snippet: 'min(${1:float|x}, ${2:...})',
            displayText: 'min(float x, ...)',
            type: 'function',
            leftLabel: 'float',
            description: 'Returns the minimum value among its arguments.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.min'
        },
        {
            snippet: 'modf(${1:float|x})',
            displayText: 'modf(float x)',
            type: 'function',
            leftLabel: 'Table',
            description: 'Returns two numbers, the integral part of x and the fractional part of x.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.modf'
        },
        {
            snippet: 'pow(${1:float|x}, ${2:float|y})',
            displayText: 'pow(float x, float y)',
            type: 'function',
            leftLabel: 'float',
            description: 'Returns x^y. (You can also use the expression x^y to compute this value.)',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.pow'
        },
        {
            snippet: 'rad(${1:float|x})',
            displayText: 'rad(float x)',
            type: 'function',
            leftLabel: 'float',
            description: 'Returns the angle x (given in degrees) in radians.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.rad'
        },
        {
            snippet: 'random()',
            displayText: 'random([m [, n]])',
            type: 'function',
            leftLabel: 'float',
            description: 'This function is an interface to the simple pseudo-random generator function rand provided by Standard C.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.random'
        },
        {
            snippet: 'randomseed(${1:int|x})',
            displayText: 'randomseed(int x)',
            type: 'function',
            description: 'Sets x as the "seed" for the pseudo-random generator: equal seeds produce equal sequences of numbers.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.randomseed'
        },
        {
            snippet: 'sin(${1:float|x})',
            displayText: 'sin(float x)',
            type: 'function',
            leftLabel: 'float',
            description: 'Returns the sine of x (assumed to be in radians).',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.sin'
        },
        {
            snippet: 'sinh(${1:float|x})',
            displayText: 'sinh(float x)',
            type: 'function',
            leftLabel: 'float',
            description: 'Returns the hyperbolic sine of x.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.sinh'
        },
        {
            snippet: 'sqrt(${1:float|x})',
            displayText: 'sqrt(float x)',
            type: 'function',
            leftLabel: 'float',
            description: 'Returns the square root of x. (You can also use the expression x^0.5 to compute this value.)',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.sqrt'
        },
        {
            snippet: 'tan(${1:float|x})',
            displayText: 'tan(float x)',
            type: 'function',
            leftLabel: 'float',
            description: 'Returns the tangent of x (assumed to be in radians).',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.tan'
        },
        {
            snippet: 'tanh(${1:float|x})',
            displayText: 'tanh(float x)',
            type: 'function',
            leftLabel: 'float',
            description: 'Returns the hyperbolic tangent of x.',
            descriptionMoreURL: 'https://www.lua.org/manual/5.2/manual.html#pdf-math.tanh'
        },
    ];
    return suggestions;
}
