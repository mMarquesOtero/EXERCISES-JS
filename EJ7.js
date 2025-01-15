/*Ejercicio 7
Completa la función que tomando dos números como argumento devuelva el más alto.*/
/*PRUEBA 1*/
/*function sum(numberOne, numberTwo) {
  return Math.max(numberOne, numberTwo)
}
console.log(sum(10, 3))*/
/*PRUEBA 2*/
function numeroMasAlto(...numeros) {
  return Math.max(...numeros)
}
const resultado = numeroMasAlto(1, 2, 3, 4, 5, 6)
console.log(resultado)
