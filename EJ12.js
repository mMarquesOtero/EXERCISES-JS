/*Ejercicio 12
Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:
pista (cuando eliminamos algo de un array, su longitud se verá afectada)*/

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(param) {
  for (let i = 0; i < param.length; i++) {
    const primerPuntero = param[i]

    // empezamos en la siguiente a la i para no comprobar la misma con la misma
    for (let j = i + 1; j < param.length; j++) {
      const segundoPuntero = param[j]

      // hemos encontrado un duplicado!
      if (primerPuntero === segundoPuntero) {
        // método splice para eliminar uno
        param.splice(j, 1)
        // damos un pasito atrás para no saltarnos ninguna comprobación
        j--
      }
    }
  }
}
