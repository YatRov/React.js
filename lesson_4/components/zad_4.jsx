function Lista() {
    const imiona = ["Ala", "Ola", "Jan"];
    return (
        <div>
            <h4>Zadanie 4</h4>
            <ul>
                {imiona.map((imie, index) =>(
                    <li key={index}>{imie}</li>
                ))}
            </ul>
        </div>
    );
}

export default Lista;