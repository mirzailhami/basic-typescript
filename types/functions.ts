// FUNCTION return type & void
function add(x: number, y: number) {
    return x + y;
}

function result(num: number) {
    console.log(`Result is: ${num}`);
}

// result(add(10, 3));

// FUNCTION TYPE
let combined: (x: number, y: number) => number;
combined = add;
// combined = result;
// console.log(combined(12, 3));

// FUNCTION TYPE & CALLBACKS
function addAndResult(x: number, y: number, cb: (result: number) => void) {
    const result = x + y;
    cb(result);
}

addAndResult(43, 2, (result) => { // without (result: number)
    console.log(result);
});