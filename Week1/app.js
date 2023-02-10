//Importing all my math functions ready to use
const mathOperations = require('./math.js')

console.log(mathOperations.additon(1, 3))
console.log(mathOperations.subtraction(10, 1))
console.log(mathOperations.multiply(5, 4))
//It should throw off an error because of the 0
console.log(mathOperations.divide(3, 0))
console.log(mathOperations.divide(4, 4))