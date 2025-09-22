import React, { useState } from "react";
import WalidacjaKoduPocztowego from "./components/zadanie_kod_pocztowy";
import WeryfikacjaHasla from "./components/zadanie_2";
import FormZamowienia from "./components/zadanie_3";

function App() {
  return (
    <div>
      <h2>Zadanie 1</h2>
      <WalidacjaKoduPocztowego/>
      <h2>Zadanie 2</h2>
      <WeryfikacjaHasla/>
      <h2>Zadanie 3</h2>
      <FormZamowienia/>
    </div>
  );
}

export default App
