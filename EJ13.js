function finderName(array, element) {
  if (array.includes(element)) {
    return `${true}, posicion: ${array.indexOf(element)}`
  } else {
    return false
  }
}

console.log(finderName(nameFinder, 'Steve')) // true, posición 1
