import React, { useState } from "react";

/* ==========================
   Zadanie 1: Warunkowe renderowanie
   ========================== */
function Zadanie1() {
  const names = ["Ala", "Ola", "Kuba"]; // przykładowa tablica imion

  return (
    <div>
      <h2>Zadanie 1</h2>
      {/* Użycie operatora trójargumentowego ? : */}
      {names.length === 0 ? (
        <p>Brak imion</p>
      ) : (
        <ul>
          {names.map((name, i) => (
            <li key={i}>{name}</li>
          ))}
        </ul>
      )}

      {/* Użycie operatora logicznego && */}
      {names.length === 0 && <p>(&&) Lista pusta</p>}
    </div>
  );
}

/* ==========================
   Zadanie 2: Obsługa zdarzeń
   ========================== */
function Zadanie2() {
  const showConsole = () => {
    console.log("Kliknięto przycisk (console.log)");
  };

  const showAlert = () => {
    alert("Kliknięto przycisk (alert)");
  };

  return (
    <div>
      <h2>Zadanie 2</h2>
      <button onClick={showConsole}>Kliknij (console.log)</button>
      <button onClick={showAlert} style={{ marginLeft: 10 }}>
        Kliknij (alert)
      </button>
    </div>
  );
}

/* ==========================
   Zadanie 3: Lista + przycisk
   ========================== */
function Zadanie3() {
  const animals = ["Kot", "Pies", "Królik"];

  const showName = (animal) => {
    console.log("Kliknięto:", animal);
  };

  return (
    <div>
      <h2>Zadanie 3</h2>
      <ul>
        {animals.map((a) => (
          <li key={a}>
            {a}{" "}
            <button onClick={() => showName(a)}>Pokaż w konsoli</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ==========================
   Zadanie 4: Dodawanie owocu
   ========================== */
function Zadanie4() {
  const [fruits, setFruits] = useState(["Jabłko", "Banan"]);
  const [newFruit, setNewFruit] = useState("");

  const handleAdd = () => {
    if (newFruit.trim() === "") return; // ignoruj puste
    setFruits([...fruits, newFruit.trim()]);
    setNewFruit(""); // wyczyść input
  };

  return (
    <div>
      <h2>Zadanie 4</h2>
      <input
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
        placeholder="Nowy owoc"
      />
      <button onClick={handleAdd}>Dodaj</button>
      <ul>
        {fruits.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </div>
  );
}

/* ==========================
   Zadanie 5: Usuwanie owocu
   ========================== */
function Zadanie5() {
  const [fruits, setFruits] = useState(["Jabłko", "Banan", "Pomarańcza"]);

  const handleRemove = (fruit) => {
    setFruits(fruits.filter((f) => f !== fruit));
  };

  return (
    <div>
      <h2>Zadanie 5</h2>
      <ul>
        {fruits.map((f) => (
          <li key={f}>
            {f} <button onClick={() => handleRemove(f)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ==========================
   Zadanie 6: Filtrowanie listy
   ========================== */
function Zadanie6() {
  const [fruits] = useState(["Jabłko", "Banan", "Pomarańcza"]);
  const [filter, setFilter] = useState("");

  const filtered = fruits.filter((f) =>
    f.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Zadanie 6</h2>
      <input
        placeholder="Filtruj owoce..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filtered.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </div>
  );
}

/* ==========================
   Zadanie 7: Zaznaczanie + licznik
   ========================== */
function Zadanie7() {
  const [fruits] = useState(["Jabłko", "Banan", "Pomarańcza"]);
  const [selected, setSelected] = useState([]);

  const toggleSelect = (fruit) => {
    setSelected((prev) =>
      prev.includes(fruit)
        ? prev.filter((f) => f !== fruit) // odznacz
        : [...prev, fruit] // zaznacz
    );
  };

  return (
    <div>
      <h2>Zadanie 7</h2>
      <p>Zaznaczone owoce: {selected.length}</p>
      <ul>
        {fruits.map((f) => (
          <li key={f}>
            {f}{" "}
            <button onClick={() => toggleSelect(f)}>
              {selected.includes(f) ? "Odznacz" : "Zaznacz"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ==========================
   Aplikacja główna
   ========================== */
export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Zadania z lekcji React (tablice + eventy)</h1>
      <Zadanie1 />
      <hr />
      <Zadanie2 />
      <hr />
      <Zadanie3 />
      <hr />
      <Zadanie4 />
      <hr />
      <Zadanie5 />
      <hr />
      <Zadanie6 />
      <hr />
      <Zadanie7 />
    </div>
  );
}