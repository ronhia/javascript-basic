
// Funciones con ES5 (ECMA Script)

// Funcion simple
function saludar() {
    console.log("Hello world")
}

saludar()
saludar()
saludar()


// Funcion con parametros
function saludarPorNombre(nombre) {
    console.log("Hola " + nombre)
}

saludarPorNombre("Carlos")
saludarPorNombre("Paul")
saludarPorNombre("Charles")
saludarPorNombre("Elvis")


// Funcion con varios parametros
function pintarSuma(a, b) {
    console.log(a + b)
}

pintarSuma(5, 5)
pintarSuma(555, 5)


// Funcion con un valor de retorno
function sumar(a, b) {
    return a + b
}

let resultadoSuma = sumar(6, 6)
console.log(resultadoSuma)


// Funcion que llama a otras funciones
function pintarTodosLosSaludos() {
    saludarPorNombre("Elvis")
    saludarPorNombre("Paul")
    saludarPorNombre("Charles")
    saludarPorNombre("Carlos")
    console.log("_____")
}

pintarTodosLosSaludos()
pintarTodosLosSaludos()
pintarTodosLosSaludos()


// Funcion multiplicar con ES5  (Generalmente se usa en frontend)
function multiplicar(a, b) {
    return a * b
}

console.log(multiplicar(6, 6))


// Funcion multiplar con ES6  (Generalmente se usa en backend. En fronted se usa con librerias)
const multiplicar2 = (a, b) => a * b

console.log(multiplicar2(5, 5))