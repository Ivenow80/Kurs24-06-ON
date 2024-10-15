function digitSum(n) {
    let total = 0;

    // do-while-Schleife
    do {
        total += n % 10;  // Letzte Ziffer zur Summe hinzufügen
        n = Math.floor(n / 10);  // Letzte Ziffer entfernen
    } while (n > 0);  // Die Schleife läuft, bis n 0 ist

    return total;
}

// Beispielaufruf der Funktion
const result = digitSum(248);
console.log(result);  // Ausgabe: 14
