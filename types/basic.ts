// TypeScript types
let a: number;
let b: string;
let c: boolean;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = ['Me', 10, 'You', true];

// Type Assertion (tsc --target ES6 app.ts)
let message = 'abc';
let pos = message.charAt(2);
// console.log(pos);

let firstName: string;
firstName = 'John Doe';
// let end = (<string>firstName).endsWith('e'); // assertion
// let endAlternative = (firstName as string).endsWith('e'); // the other assertion way 
// console.log(endAlternative);

// TypeScript types vs JavaScript types
function add(x: number, y: number, show: boolean, text: string) {
    // if (typeof x !== 'number' || typeof y !== 'number') {
    //     throw new Error('Incorrect value');
    // }
    const result = x + y;
    if (show) {
        console.log(`${text} ${x + y}`);
    } else {
        return result;
    }
}

const number1 = 10;
const number2 = 8;
const showResult = true;
const text = 'The result is:';
const result = add(number1, number2, showResult, text);

// console.log(result);