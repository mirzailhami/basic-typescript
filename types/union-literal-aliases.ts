// UNION (whether you want accept number or string input)
// function add(x: number, y: number) {
//     return x + y;
// }
// const result = add(10, 3);
// console.log(result);

// function add(x: string, y: string) {
//     return x + y;
// }
// const result = add('John', 'Doe');
// console.log(result);

// or you may accept number and string
// function add(x: number | string, y: number | string) {
//     let result;
//     if (typeof x === 'number' && typeof y === 'number') {
//         result =  x + y;
//     } else {
//         result = x.toString() + y.toString();
//     }
//     return result;
// }

// const twoNumber = add(10, 3);
// const twoName = add('John', 'Doe');
// console.log(twoNumber);

// LITERAL TYPE
// function add(x: number | string, y: number | string, resultType: 'text' | 'math') {
//     let result;
//     if (typeof x === 'number' && typeof y === 'number' || resultType === 'math') {
//         result =  +x + +y;
//     } else {
//         result = x.toString() + y.toString();
//     }
//     return result;
// }

// console.log(add(10, 3, 'math'));
// console.log(add('10', '3', 'text'));

// TYPE ALIASES
type TwoTypes = number | string;
type Conversion = 'text' | 'math';
function add(x: TwoTypes, y: TwoTypes, resultType: Conversion) {
    let result;
    if (typeof x === 'number' && typeof y === 'number' || resultType === 'math') {
        result =  +x + +y;
    } else {
        result = x.toString() + y.toString();
    }
    return result;
}

console.log(add(10, 3, 'math'));
console.log(add('10', '3', 'text'));