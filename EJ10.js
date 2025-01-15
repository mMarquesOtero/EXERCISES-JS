/*Ejercicio 10
Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:*/

const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  let sum = 0
  for (let i = 0; i < param.length; i++) {
    const element = param[i]
    sum + -element
  }
  return sum / param.length
}
average(numbers)
console.log(average(numbers))
