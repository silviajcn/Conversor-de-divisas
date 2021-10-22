
let cant = 0;

let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    cant = Number(document.getElementById('cantidad').value);
    let div1 = document.getElementById('divisas1');
    let div2 = document.getElementById('divisas2');
    let resul = document.getElementById('resultado');

    if (cant == 0 || cant == "0") {
        resul.style.display = "initial";
        resul.innerHTML = "Debes introducir una cantidad";
    }



});