var btn = document.querySelector('button');
var x = document.getElementById('x');
var y = document.getElementById('y');
function tambah(num1, num2) {
    return num1 + num2;
}
btn.addEventListener('click', function () {
    console.log(tambah(+x.value, +y.value));
});
