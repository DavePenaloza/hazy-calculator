// const isANum = (string) => {
//    switch (string) {
//        case "2" :
//        case "*" : 
//            return false
//        default: 
//            return true 
//    }
// }
const calculate = (arr) => {
  const string = ['', undefined, 'foo', 'bar']


  let newArray = arr.filter(num => {
    return !string.includes(num)
  })

  let operands = newArray[1]

  let num1 = parseInt(newArray[0])
  let num2 = parseInt(newArray[2])

  if (newArray[0] === null) {
    num1 = 0
  }
  else if (newArray[2] === null) {
    num2 = 0
  }

  switch (operands) {
    case '+':
      return (num1 + num2)

    case '-':
      return (num1 - num2)

    case '/':
      return (num1 / num2)

    case '*':
      return (num1 * num2)

    default:
      return (NaN)
  }
}

module.exports = calculate





// console.log(calculate([2, '+', 4]))
// create a `calculate` function 

// which will properly calculate 
// the answer, given the array of values, given the rules outlined 
// below.

// The `calculate` function runs an arithmetic calculation based 
// upon an array of inputs (eg. `[2, '*', 10]`)

// Each input should be either a number or an operand 
// (`+`, `-`, `*`, `/`)

// Our upstream data is inconsistent, so we 
// _intentionally_ accept it and deal with it in the following 
// ways:

//* Stringified numbers (eg. `'2'`) should be treated as numbers//
//* `NULL` should be treated as zero
//* `undefined` values should be ignored
//* Empty string values (eg. `''`) should be ignored
//* Non-numeric values (eg. `'foo'`) should be ignored
// PARSE INT
// GOOGLE Intentionally Accept
// Google How to ignore elments in an array
// A FOR loop that goes through an array, and removes what we 
// want to keep
