export function CalculatorResult(num1, num2, operator) {
  switch (operator) {
    case "+":
      return parseFloat(num1) + parseFloat(num2);
    case "-":
      return parseFloat(num1) - parseFloat(num2);
    case "*":
      return parseFloat(num1) * parseFloat(num2);
    case "/":
      if (num2 !== "0") {
        return parseFloat(num1) / parseFloat(num2);
      } else {
        throw new Error("Cannot divide by zero");
      }
    case "%":
      return parseFloat(num1) % parseFloat(num2);
    default:
      throw new Error("Invalid operator");
  }
}

