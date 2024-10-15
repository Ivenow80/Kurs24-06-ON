function countGreaterThanThreshold(arr, threshold) {
    let count = 0;  // Zähler für Elemente, die größer als der Schwellenwert sind
    let i = 0;      // Index für die do-while-Schleife

    // do-while-Schleife, um über das Array zu iterieren
    do {
        if (arr[i] > threshold) {  // Prüfen, ob das Element größer als der Schwellenwert ist
            count++;  // Zähler erhöhen
        }
        i++;  // Index erhöhen
    } while (i < arr.length);  // Schleife läuft, solange der Index kleiner als die Array-Länge ist

    return count;  // Anzahl der Elemente zurückgeben
}

// Vorgegebenes Array
const numbers = [10, 23, 35, 47, 52, 66, 71, 88, 90];

// Schwellenwert 50
const threshold = 50;

// Aufruf der Funktion und Ausgabe des Ergebnisses
const result = countGreaterThanThreshold(numbers, threshold);
console.log(result);  // Ausgabe: 5
