function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      return array.push(`"I am ${i} strange loop."`)
    } else {
      return array.push(`"I am ${i} strange loops."`)
    }
  }
}

var testArray = ["test"]
console.log(forLoop(testArray))


while ([])
