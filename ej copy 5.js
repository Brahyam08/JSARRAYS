const array = ['enero', 'febrerp', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'noviembre', 'diciembre']


let eleccion = parseInt(window.prompt('Introduce un número del 1 al 12'))

if (eleccion <= 12 && eleccion >= 1) {
    document.getElementById('div').innerHTML = `<p>${array[eleccion - 1]}</p>`
} else {
    document.getElementById('div').innerHTML = `En estos momentos solo tenemos 12 meses disponibles`
}