function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      return array.push(`"I am ${i} strange loop."`)
    } else {
      return array.push(`"I am ${i} strange loops."`)
    }
  }
   return array
}

var testArray = []

forLoop(testArray)

//console.log(testArray)


function forloop()
for (var i = 1; i < 10; i++) {
  console.log("Hello World the " + i + " time");
}


function whileLoop(number) {
  while (number >= 0) {
    console.log(--number)
    if (number === 0) {
      return "done"
    }
  }
}

function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array) {
  do {
    array.pop()
    return array
  } while (array.length > 0 && incrementVariable())
}
