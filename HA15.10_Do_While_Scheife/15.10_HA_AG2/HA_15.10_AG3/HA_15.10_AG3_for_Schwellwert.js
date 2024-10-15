function countGreaterThanThreshold(arr, threshold) {
    let count = 0;  // Zähler für Elemente, die größer als der Schwellenwert sind

    // for-Schleife/Arry
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > threshold) {  // Prüfen Schwellwert grösser als Element
            count++;  // hochzählen
        }
    }

    return count;  // Ergebnis ausgeben
}

// Vorgegebenes Array
const numbers = [10, 23, 35, 47, 52, 66, 71, 88, 90];

// Schwellenwert 50
const threshold = 50;
//Ausgabe
const result = countGreaterThanThreshold(numbers, threshold);
console.log(result);  // Ergebnis
