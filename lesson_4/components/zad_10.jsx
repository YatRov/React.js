import React, { useState } from "react";

function LosowaTab() {
  const [macierz] = useState(
    Array.from({ length: 3 }, () =>
      Array.from({ length: 3 }, () => Math.floor(Math.random() *9) + 1)
    )
  );

  return (
    <div>
      <h4>Zadanie 10</h4>
      <table border="1">
        <tbody>
          {macierz.map((wiersz, i) => (
            <tr key={i}>
              {wiersz.map((kolumna, j) => (
                <td key={j}>{kolumna}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LosowaTab;
