/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(){
    //instance of a class is created with this.property
    this.result = 0; //result (a property) is set to value 0
  }

  add(number){
    this.result += number;
  }
  
  subtract(number){
    this.result -=number;
  }

  multiply(number){
    this.result *= number;
  }

  divide(number){
    if(number === 0){
      throw new Error("Division by zero is not allowed");
    }
    this.result /= number;
  }

  clear(){
    this.result = 0;
  }

  getResult(){
    return this.result;
  }

  //method for mathematical expression
  calculate(expression){
    //remove all spaces from the expression
    expression = expression.replace(/\s+/g, ''); //regular expression /\s+/g, global match
    
    //Check for invalid characters
    if(!/^[0-9+\-*/().]+$/.test(expression)){
      throw new Error("Invalid characters in expression");
    }
    try{
      //use eval() to calculate the result
      //Note: eval() can be dangerous if used with untrusted input
      this.result = eval(expression);

      //check if the result is a valid number
      if(isNaN(this.result)|| !isFinite(this.result)){
        throw new Error("Invalid arithmetic operation");
      }      
    } catch(error){
      throw new Error("Invalid expression: "+error.message)
    }
  }
}

module.exports = Calculator;

