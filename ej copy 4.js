let array = []

for (let i = 0; i < 10; i++) {
    array.push(window.prompt('Introduce un número'))
}
let parrafos = ''
for (let i = 0; i < array.length; i++) {
    parrafos = parrafos + `<p>${array[i]}</p>`
}
document.getElementById('div').innerHTML = parrafos