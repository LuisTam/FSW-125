// This is my addition function
const additon = (a, b) => {
    return a + b;
}
// This is my subtraction function
const subtraction = (a, b) => {
    return a - b;
}
// This is my multiplication function
const multiply = (a, b) => {
    return a * b;
}
// This is my division function
const divide = (a, b) => {
// // This will throw out an error if user tries to divide by 0
   if(b === 0){
      console.log('ERROR CANNOT DIVIDE BY 0!!!!!!');
    }
// If not 0 found then it will divide    
   else{
      return  a / b;
  }
}
// All my math functions exporting
module.exports = {
    additon,
    subtraction,
    multiply,
    divide,
}