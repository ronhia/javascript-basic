
// ARRAYS (Tambien los conoces como listas)

let frutas0 = Array("Platanos", "Manzanas", "Peras") // Cuando se declara con el tipo de dato "Array"

// Indices:        0           1         2        3
let frutas = ["Platanos", "Manzanas", "Peras", "Uvas"] // Forma estandar

console.log(frutas)

// Accediendo a los valores del array por indice
console.log(frutas[1])

// Modicando los valores del array por indice
frutas[1] = "Manzanas Verdes"
console.log(frutas)


// Agregando mas valores al array
frutas.push("Sandias")  // En otro lenguajes es "add" en lugar de "push"
console.log(frutas)


// Eliminando valores del array
frutas.pop() // Elimina el ultimo elemento del array
console.log(frutas)


frutas.shift() // Elimina el primer elemento del array
console.log(frutas)


// delete frutas[1] // Elimina el elemento del array por indice (Forma Antigua o Caducada)
frutas.splice(1, 1) // El primer 1 es el indice (posicion), el segundo es la cantidad de elementos que eliminara hacia adelante
console.log(frutas)



// Recorrer datos 

for(index = 0; index < frutas.length; index++) {  // Forma antigua
    console.log(frutas[index])
}


frutas.forEach(function(fruta) { // Forma actual reducida con ForEach, donde "fruta" es el elemento
    console.log(fruta)
})


frutas.forEach(function(fruta, index) { // Forma actual reducida con ForEach, donde "fruta" es el elemento y "index" la posición del elemento
    console.log(fruta + " -> " + index)
})
