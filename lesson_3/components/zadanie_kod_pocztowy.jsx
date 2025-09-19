import React, { useState } from "react";

function WalidacjaKoduPocztowego() {
  const [Kodpocztowy, setKodPocztowy] = useState("");
  const [Informacja, setInformacja] = useState("");

  const walidacja = () => {
    const wzorzecKoduPocztowego = /^\d{2}-\d{3}$/;

    if (wzorzecKoduPocztowego.test(Kodpocztowy)) {
      setInformacja("Kod pocztowy jest prawidłowy");
    }else if(wzorzecKoduPocztowego.test(Kodpocztowy) == ""){
      setInformacja("Pole nie może być puste" )
    }
    else {
      setInformacja("Kod pocztowy nie jest prawidłowy");
    }

  };

  return (
    <div>
      <h1>Walidacja kodu pocztowego w formacie xx-xxx</h1>
      <input
        type="text"
        value={Kodpocztowy}
        onChange={(e) => setKodPocztowy(e.target.value)}
        placeholder="np. 00-000"
      />

      <button onClick={walidacja}>Walidacja</button>

      <p>{Informacja}</p>
    </div>
  );
}

export default WalidacjaKoduPocztowego;