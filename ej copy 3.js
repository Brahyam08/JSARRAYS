let array = []
let parrafos = ''
for (let i = 0; i <= 10; i++) {
    array[i] = 20 - i
}
for (let i = 0; i < array.length; i++) {
    parrafos += `<p>${array[i]}</p>`
}
document.getElementById('div').innerHTML = parrafos