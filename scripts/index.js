
const indicador_valor1 = document.getElementById('primer_valor');
const indicador_valor2 = document.getElementById('segundo_valor');
const selector_moneda1 = document.getElementById('divisas1');
const selector_moneda2 = document.getElementById('divisas2');

const opcion_invertir = document.getElementById('invertir');
const valor_moneda = document.getElementById('valor_actual');

function calcular() {
    const divisas1 = selector_moneda1.value;
    const divisas2 = selector_moneda2.value;

    fetch(`https://v6.exchangerate-api.com/v6/bd8467a8cd1e0944d99363b0/latest/${divisas1}`)
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            
            const cambio = datos.conversion_rates[divisas2];

            valor_moneda.innerText = `1 ${divisas1} = ${cambio} ${divisas2}`;

            indicador_valor2.value = (primer_valor.value * cambio).toFixed(2);
        })
}


indicador_valor1.addEventListener('input', calcular);
indicador_valor2.addEventListener('input', calcular);
selector_moneda1.addEventListener('change', calcular);
selector_moneda2.addEventListener('change', calcular);


opcion_invertir.addEventListener('click', () => {
    const temporal = selector_moneda1.value;
    selector_moneda1.value = selector_moneda2.value;
    selector_moneda2.value = temporal;
    calcular();
})

calcular()