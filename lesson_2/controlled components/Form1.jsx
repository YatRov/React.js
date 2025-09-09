import { useState } from "react";

function From1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Wysłano formularz:", formData);
    alert("Formularz kontaktowy wysłany!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formularz kontaktowy</h2>

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
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Wiadomość: </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Wyślij</button>
    </form>
  );
}

export default From1;
