import React from "react";

function LosoweLiczby() {
  const liczby = Array.from({ length: 10 }, 
    () => Math.floor(Math.random() * 100) + 1);

  return (
    <div>
      <h4>Zadanie 8</h4>
      <ul>
        {liczby.map((liczba, index) => (
          <li key={index}>{liczba}</li>
        ))}
      </ul>
    </div>
  );
}

export default LosoweLiczby;
