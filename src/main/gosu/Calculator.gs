package main.gosu

/**
 * Simple Calculator class for demonstration
 */
class Calculator {
  
  function add(a: int, b: int): int {
    return a + b
  }
  
  function subtract(a: int, b: int): int {
    return a - b
  }
  
  function multiply(a: int, b: int): int {
    return a * b
  }
  
  function divide(a: int, b: int): double {
    if (b == 0) {
      throw new IllegalArgumentException("Division by zero")
    }
    return a / b
  }
  
  function isEven(number: int): boolean {
    return number % 2 == 0
  }
}