function sumEvenNumbers() {
    
    let total = 0;      // Variable, um die Gesamtsumme der geraden Zahlen zu speichern
    let number = 2;     // Startwert bei der ersten geraden Zahl (2)

    // Die Schleife läuft, solange die Zahl kleiner oder gleich 100 ist
    while (number <= 100) {
        total += number; // Füge die aktuelle gerade Zahl zur Gesamtsumme hinzu
        number += 2;     // Erhöhe die Zahl um 2, um die nächste gerade Zahl zu erreichen
    }

    return total;        // Rückgabe der berechneten Summe
}

// Ausgabe der Summe der geraden Zahlen (2550)
console.log(sumEvenNumbers()); // Ausgabe
