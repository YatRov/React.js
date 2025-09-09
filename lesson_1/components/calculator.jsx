import React from "react";

function Calculator() {
  let a = 5;
  let b = 7;

  return (
    <div>
      <h2>Zadanie 3</h2>
      <h3>Kalkulator</h3>
      <p>{a}+{b}={a + b}</p>
      <p>{a}-{b}={a - b}</p>
      <p>{a}*{b}={a * b}</p>
    </div>
  );
}

export default Calculator;
