const btn = document.querySelector('button');
const x = document.getElementById('x');
const y = document.getElementById('y');

function tambah(num1, num2) {
    return num1 + num2;
    // if (typeof num1 === 'number' && typeof num2 === 'number') {
    //     return num1 + num2;
    // } else {
    //     return +num1 + +num2;
    // }
}

btn.addEventListener('click', function() {
    console.log(tambah(x.value, y.value));
});