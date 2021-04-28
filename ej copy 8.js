let array = []
let suma = 0

for (let i = 0; i < 20; i++) {
    array[i] = parseInt(Math.random() * (36 - 18) + 18)

}
for (let i = 0; i < array.length; i++) {
    suma += array[i]
}

document.getElementById('div').innerHTML = `la media es ${suma / array.length}`
