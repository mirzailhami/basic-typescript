const btn = document.querySelector('button');
const x = document.getElementById('x')! as HTMLInputElement;
const y = document.getElementById('y')! as HTMLInputElement;

function tambah(num1: number, num2: number) {
    return num1 + num2;
}

btn.addEventListener('click', function() {
    console.log(tambah(+x.value, +y.value));
});