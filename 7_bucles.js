
// BUCLES (for, while, do while)

let frutas = ["Manzana", "Platanos", "Uvas"]

// for
for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}


// while
let numero = 11

while (numero <= 10) {
    console.log(numero)

    numero++
}


console.log("__________________")


// do while
var numero2 = 11

do {
    console.log(numero2)

    numero2++
} while (numero2 <= 10)


console.log("__________________")


// Cancelar bucles con "break" en "for", "while" y "do while"
let x = 0

while (x <= 10) {
    console.log(x)
    
    if (x == 5) {
        break
    }

    x++
}


console.log("__________________")


// Continuar bucles con "continue" en "for", "while" y "do while"
let numeroEvualado = 0
let multiplo = 5

while (numeroEvualado <= 15) {
    numeroEvualado++
    console.log(numeroEvualado)

    let residuo = numeroEvualado % multiplo // 5 % 5 = 0

    // console.log("residuo: " + residuo)
    
    if (residuo != 0) {
        continue
    }

    console.log(`Numeros multiplos de ${multiplo}: ${numeroEvualado}`)
}
