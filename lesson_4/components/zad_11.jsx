import React, {useState} from "react";

function AppOcen() {
    const [uczen, setUczen] = useState([
        ["Ala", 5, 4, 3],
        ["Ola", 2, 3, 4],
        ["Jan", 5, 5, 5]
    ]);

    const AddOcene = () => {
        const newUczen = uczen.map(wiersz => {
        const newOcena = Math.floor(Math.random() * 6) + 1;
        return [...wiersz, newOcena];
    });
    setUczen(newUczen);
    };

    return (
    <div>
      <h4>Zadanie 11</h4>
      <table border="1">
        <tbody>
          {uczen.map((wiersz, i) => (
            <tr key={i}>
              {wiersz.map((komorka, j) => (
                <td key={j}>{komorka}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={AddOcene}>Dodaj ocenę losową</button>
    </div>
  );
}

export default AppOcen;