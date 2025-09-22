import React, {useState} from "react";

function DodawanieElem(){
    const [imiona, setImiona] = useState(["Ala", "Ola", "Jan"]);

    const AddName = () => {
        setImiona([...imiona, "Kuba"]);
    };

    return (
        <div>
            <h4>Zadanie 5</h4>
            <ul>
                {imiona.map((imie, index) => (
                    <li key={index}> {imie} </li>
                    ))}
            </ul>
            <button onClick={AddName}>Dodaj imię</button>
        </div>
    );
}
export default DodawanieElem;