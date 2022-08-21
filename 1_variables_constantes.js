// VARIABLES (Tambien son conocidas como "mutables" porque pueden cambiar de valor)

// Forma antigua es "var"
var miString = "Hello world" // string
var miNumeroEntero = 10 // entero
var miNumeroDecimal = 1.5 // decimal
var miBoolean = false // boolean: false o true

// Forma actual es "let"
let miString2 = "Hello world" // string
let miNumeroEntero2 = 10 // entero
let miNumeroDecimal2 = 1.5 // decimal
let miBoolean2 = false // boolean: false o true

// Modicando el valor de una variable
let miTexto = "Mi es nombre Carlos"

console.log(miTexto)

// cambiando valor
miTexto = "Ahora mi nombre es Rony"

console.log(miTexto)



// CONSTANTES

// Declara con la palabra clave "const"
const miConstanteString = "Casas"
const miConstanteEntero = 30
const miConstanteDecimal = 8.3
const miConstanteBoolean = true

// Intentando cambiar valor -> Saldra error, porque no se puede asignar un nuevo valor nuevo
// miConstanteString = "Carros"

console.log(miConstanteString)
