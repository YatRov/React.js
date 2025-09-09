import { useState } from "react";

function Form2() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    age: "",
    gender: "",
    agree: false,
    color: "",
    description: "",
  });

  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Dane rejestracji:", formData);
    alert("Formularz rejestracyjny wysłany!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formularz rejestracyjny</h2>

      <div>
        <label>Imię: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Hasło: </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Wiek: </label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Płeć: </label>
        <input
          type="radio"
          name="gender"
          value="M"
          checked={formData.gender === "M"}
          onChange={handleChange}
        />{" "}
        Mężczyzna
        <input
          type="radio"
          name="gender"
          value="K"
          checked={formData.gender === "K"}
          onChange={handleChange}
        />{" "}
        Kobieta
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          Akceptuję regulamin
        </label>
      </div>

      <div>
        <label>Ulubiony kolor: </label>
        <select name="color" value={formData.color} onChange={handleChange}>
          <option value="">-- wybierz --</option>
          <option value="czerwony">Czerwony</option>
          <option value="zielony">Zielony</option>
          <option value="niebieski">Niebieski</option>
        </select>
      </div>

      <div>
        <label>Dodatkowy opis: </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Zarejestruj</button>
    </form>
  );
}

export default Form2;