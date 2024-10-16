// Erstellen eines 2D-Arrays (3x3-Matrix) mit den Zahlen 1 bis 9
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("3x3-Matrix:");
console.log(matrix);

// Diagonalsumme von oben links nach unten rechts berechnen
function berechneDiagonalsumme(matrix) {
    let diagonalsumme = 0;
    for (let i = 0; i < matrix.length; i++) {
        diagonalsumme += matrix[i][i];
    }
    return diagonalsumme;
}

// ergebnis der Diagonalsumme
let diagonalsumme = berechneDiagonalsumme(matrix);
console.log("Diagonalsumme (oben links nach unten rechts):", diagonalsumme);

// Von  Matrix in eine 3x3-Matrix mit Nullen in den Ecken ändern
function setzeEckenAufNull(matrix) {
    // Ecken setzen
    matrix[0][0] = 0; // oben links
    matrix[0][2] = 0; // oben rechts
    matrix[2][0] = 0; // unten links
    matrix[2][2] = 0; // unten rechts
}

// Ecken auf Null 
setzeEckenAufNull(matrix);

console.log("Matrix mit Nullen in den Ecken:");
console.log(matrix);
