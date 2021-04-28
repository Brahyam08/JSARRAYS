let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let num;

let parrafos = "";

do {
    num = parseInt(window.prompt(`Introduce un valor entre 0 y 10:`));
    if (num >= 0 && num <= 10) {
        array[num] = array[num] + 1;
        console.log(`El valor de la posición ${num} es ${array[num]}`);
    } else if (num > 10) {
        console.log(`<p>El número está fuera del rango del array`);
    } else if (num < 0) {
        for (let i = 0; i < array.length; i++) {
            console.log(`[${i}]   ${array[i]}`);
        }
    }
} while (num >= 0);