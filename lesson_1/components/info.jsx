import React from "react";

function Info() {
  const name = "Maks";
  const age = 18;
  const favoriteColor = "szary";

  return (
    <div>
      <h2>Zadanie 4 </h2>
      <p>Imię: {name}</p>
      <p>Wiek: {age}</p>
      <p>Ulubiony kolor: {favoriteColor}</p>
    </div>
  );
}

export default Info;
