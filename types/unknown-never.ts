// UNKNOWN TYPE
let input: unknown;
let user: string;

input = 5;
input = 'John Doe';
if (typeof input === 'string') {
    user = input;
}

// console.log(input);

// NEVER
// Function returning never must have unreachable end point
function error(message: string, code: number): never {
    throw {message, code};
}

function fail() {
    return error("Something failed", 500);
}

const result = error('An error occured', 500);
console.log(result);