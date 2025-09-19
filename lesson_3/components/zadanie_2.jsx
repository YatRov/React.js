import React, { useState } from "react";

function WeryfikacjaHasla() {
  const [Haslo, setHaslo] = useState('');
  const [Pole, setPole] = useState('');

  const WalidacjaHasla = (haslo) => {
    if (haslo === '') {
      setPole('HASŁO JEST PUSTE');
    } else if (haslo.length >= 7 && /\d/.test(haslo)) {
      setPole('HASŁO JEST DOBRE');
    } else if (haslo.length >= 4 && haslo.length <= 6 && /\d/.test(haslo)) {
      setPole('HASŁO JEST ŚREDNIE');
    } else {
      setPole('HASŁO JEST SŁABE');
    }
  };

  return (
    <div>
      <h1>WERYFIKACJA HASŁA</h1>
      <input
        type="password"
        placeholder="Wpisz hasło"
        value={Haslo}
        onChange={(e) => setHaslo(e.target.value)}
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <button
        onClick={() => WalidacjaHasla(Haslo)}
        style={{ padding: '10px 20px', fontSize: '16px', marginTop: '10px' }}
      >
        Weryfikuj
      </button>
      <div
        style={{
          color:
            Pole === 'HASŁO JEST PUSTE'
              ? 'red'
              : Pole === 'HASŁO JEST SŁABE'
              ? 'yellow'
              : Pole === 'HASŁO JEST ŚREDNIE'
              ? 'blue'
              : 'green',
        }}
      >
        {Pole}
      </div>
    </div>
  );
}

export default WeryfikacjaHasla;
