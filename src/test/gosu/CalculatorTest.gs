package test.gosu

uses gw.test.TestClass
uses main.gosu.Calculator

/**
 * Unit tests for Calculator class
 */
class CalculatorTest extends TestClass {
  
  var calculator: Calculator
  
  override function setUp() {
    calculator = new Calculator()
  }
  
  function testAdd() {
    assertEquals(5, calculator.add(2, 3))
    assertEquals(0, calculator.add(-1, 1))
    assertEquals(-5, calculator.add(-2, -3))
  }
  
  function testSubtract() {
    assertEquals(1, calculator.subtract(3, 2))
    assertEquals(-2, calculator.subtract(-1, 1))
    assertEquals(1, calculator.subtract(-2, -3))
  }
  
  function testMultiply() {
    assertEquals(6, calculator.multiply(2, 3))
    assertEquals(0, calculator.multiply(0, 5))
    assertEquals(-10, calculator.multiply(-2, 5))
  }
  
  function testDivide() {
    assertEquals(2.0, calculator.divide(6, 3), 0.001)
    assertEquals(2.5, calculator.divide(5, 2), 0.001)
    assertEquals(-2.0, calculator.divide(-6, 3), 0.001)
  }
  
  function testDivideByZero() {
    try {
      calculator.divide(5, 0)
      fail("Expected IllegalArgumentException")
    } catch (e: IllegalArgumentException) {
      assertEquals("Division by zero", e.Message)
    }
  }
  
  function testIsEven() {
    assertTrue(calculator.isEven(2))
    assertTrue(calculator.isEven(0))
    assertTrue(calculator.isEven(-4))
    assertFalse(calculator.isEven(1))
    assertFalse(calculator.isEven(-3))
  }
}