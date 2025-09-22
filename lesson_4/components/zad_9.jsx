import React, { useState } from "react";

function LosowaMacierz() {
  const [macierz] = useState(
    Array.from({ length: 5 }, () =>
      Array.from({ length: 5 }, () => Math.floor(Math.random() * 10))
    )
  );

  console.log("ZADANIE 9");
  macierz.forEach(wiersz => console.log(wiersz));

  return (
    <div>
      <h4>Zadanie 9</h4>
      <p>W konsolę</p>
    </div>
  );
}

export default LosowaMacierz;
