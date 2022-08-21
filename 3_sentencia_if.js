
// OPERADORES DE COMPARACION

// == igualdad o iguales
// != desigualdad o distintos
// > mayor que
// < menor que
// >= mayor o igual que
// <= menor o igual que




// OPERADORES LOGICOS (Se usan habitualmente en tipo de datos Booleanos)

// && operador "y"
// || operador "o"
// ! operador "no"

let myEdad = 15

if (myEdad >= 0 && myEdad <= 5) {
    console.log("Soy bebito fiu fiu")
} else if (myEdad > 5 && myEdad <= 15) {
    console.log("Soy un puber")
} else if (myEdad > 15 && myEdad <= 18) {
    console.log("Soy un adolescente")
} else if (myEdad > 18 && myEdad <= 60) {
    console.log("Soy un adulto")
} else if (myEdad > 60) {
    console.log("Soy un adulto mayor")
} else {
    console.log("Mi edad no es valido")
}