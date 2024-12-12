import React, { useState } from "react";
import "./calculator.css";
import { CalculatorResult } from "./mathUtils"

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleNumChange = (e, isNum1) => {
    if (isNum1) {
      setNum1(e.target.value);
    } else {
      setNum2(e.target.value);
    }
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const calculate = () => {
    if (num1 && num2 && operator) {
      try {
        const res = CalculatorResult(num1, num2, operator);
        setResult(res.toString());
      } catch (error) {
        setResult(error.message);
      }
    } else {
      setResult("Invalid input");
    }
  };

  const clear = () => {
    setNum1("");
    setNum2("");
    setOperator("");
    setResult("");
  };

  return (
    <div className="calculator">
      <input
        type="number"
        value={num1}
        onChange={(e) => handleNumChange(e, true)}
      />
      <select value={operator} onChange={handleOperatorChange}>
        <option value="">Select Operator</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
        <option value="%">%</option>
      </select>
      <input
        type="number"
        value={num2}
        onChange={(e) => handleNumChange(e, false)}
      />
      <button onClick={calculate}>=</button>
      <button onClick={clear}>Clear</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;