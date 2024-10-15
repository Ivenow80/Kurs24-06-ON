function sumEvenNumbers() {
    let total = 0;  // Variable
    let number = 1; // Startwert

    // do-while-Schleife erstellen
    do {
        if (number % 2 === 0) {  // Prüfen, ob die Zahl gerade ist
            total += number;     // Wenn gerade, dann zur Summe hinzufügen
        }
        number++;  // Zahl um 1 erhöhen
    } while (number <= 100);  // Schleife läuft solang kleiner /gleich ist

    return total;  // Ergebnis 
}

// Ausgabe 
console.log(sumEvenNumbers()); 
