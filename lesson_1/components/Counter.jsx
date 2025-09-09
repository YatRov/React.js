import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <h2>Zadanie 5</h2>
        <p>Licznik: {count}</p>
        <button onClick={() => setCount(count + 1)}>Dodaj 1</button>
    </div>
  );
}

export default Counter;
