let str1 = window.prompt('Introduce una palabra')
let str2 = window.prompt('Introduce otra palabra')
let str3 = window.prompt('Introduce otra palabra mas ')

let array = [str1, str2, str3]

document.getElementById('div').innerHTML = `<p>${array[1]}</p>+<p>${array[2]}</p>+<p>${array[0]}</p>`