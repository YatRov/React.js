import React, { useState } from "react";

function FormZamowienia() {
  const [nazwa, setNazwa] = useState('');
  const [imie, setImie] = useState('');
  const [nazwisko, setNazwisko] = useState('');
  const [ilosc, setIlosc] = useState('');
  const [telefon, setTelefon] = useState('');
  const [kod, setKod] = useState('');
  const [email, setEmail] = useState('');
  const [zgoda, setZgoda] = useState(false);

  const [errors, setErrors] = useState({});

  const Walidacja = () => {
    let newErrors = {};

    if (/^[A-Za-z]+$/.test(imie)) {
      newErrors.imie = "imię jest niepoprawne";
    }
    if (/^[A-Za-z]+$/.test(nazwisko)) {
      newErrors.nazwisko = "nazwisko jest niepoprawne";
    }
    if (/^[0-9]+$/.test(ilosc)) {
      newErrors.ilosc = "ilość musi być liczbą";
    }
    if (/^\+48\d{9}$/.test(telefon)) {
      newErrors.telefon = "telefon jest niepoprawny";
    }
    if (/^\d{2}-\d{3}$/.test(kod)) {
      newErrors.kod = "kod pocztowy jest niepoprawny";
    }
    if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
      newErrors.email = "email jest niepoprawny";
    }
    if (zgoda){
      newErrors.zgoda = "musisz zaakceptować regulamin";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("✅ Formularz poprawny!");
    }
  };

  const Success = () => <span style={{ color: "green" }}>✓</span>;
  return (
    <div>
      <h1>Formularz zamówienia:</h1>

      <label>Nazwa produktu:</label>
      <input
        type="text"
        value={nazwa}
        onChange={(e) => setNazwa(e.target.value)}
      />
      <br />

      <label>Ilość:</label>
      <input
        type="text"
        value={ilosc}
        onChange={(e) => setIlosc(e.target.value)}
      />
      {errors.ilosc ? (
        <div style={{ color: "red" }}>{errors.ilosc}</div>
      ) : ilosc && <Success />}
      <br />

      <label>Imię:</label>
      <input
        type="text"
        value={imie}
        onChange={(e) => setImie(e.target.value)}
      />
      {errors.imie ? (
        <div style={{ color: "red" }}>{errors.imie}</div>
      ) : imie && <Success />}
      <br />

      <label>Nazwisko:</label>
      <input
        type="text"
        value={nazwisko}
        onChange={(e) => setNazwisko(e.target.value)}
      />
      {errors.nazwisko ? (
        <div style={{ color: "red" }}>{errors.nazwisko}</div>
      ) : nazwisko && <Success />}
      <br />

      <label>Telefon:</label>
      <input
        type="text"
        placeholder="+48XXXXXXXXX"
        value={telefon}
        onChange={(e) => setTelefon(e.target.value)}
      />
      {errors.telefon ? (
        <div style={{ color: "red" }}>{errors.telefon}</div>
      ) : telefon && <Success />}
      <br />

      <label>Kod pocztowy:</label>
      <input
        type="text"
        placeholder="XX-XXX"
        value={kod}
        onChange={(e) => setKod(e.target.value)}
      />
      {errors.kod ? (
        <div style={{ color: "red" }}>{errors.kod}</div>
      ) : kod && <Success />}
      <br />

      <label>Email:</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email ? (
        <div style={{ color: "red" }}>{errors.email}</div>
      ) : email && <Success />}
      <br />

      <label>
        <input
          type="checkbox"
          checked={zgoda}
          onChange={(e) => setZgoda(e.target.checked)}
        />
        Akceptuję regulamin
      </label>
      {errors.zgoda && <div style={{ color:"red"}}>{errors.zgoda}</div>}
      <br />

      <button onClick={Walidacja}>Wyślij</button>
    </div>
  );
}

export default FormZamowienia;
