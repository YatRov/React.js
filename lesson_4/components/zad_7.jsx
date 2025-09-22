import React from "react";

function MacierzTab() {
    const macierz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    const element = macierz[1][2];
    return (
        <div>
            <h4>Zadanie 7</h4>
            <table border="1">
                <tbody>
                    {macierz.map((wiersz, i) => (
                        <tr key={i}>
                            {wiersz.map((kolumna, j) => (
                                <td key={j}>{kolumna}</td>
                                ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MacierzTab;