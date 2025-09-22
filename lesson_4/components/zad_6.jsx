import React from "react";

function Macierz() {
    console.log("ZADANIE 6")
    const macierz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    const element = macierz[1][2];
    console.log(element)
    return (
        <div>
            <h4>Zadanie 6</h4>
            <p>W konsolę</p>
        </div>
    );
}

export default Macierz;