
// Finktion difinieren
function digitSum(n) {
    //Variable
    let total = 0;

    // Do While-Schleife 
    do {
        let digit = n % 10;  // Letzte Ziffer berechnen
        total += digit;      // Ziffer zur Summe hinzufügen
        n = Math.floor(n / 10);  // Letzte Ziffer entfernen
    } while (n > 0);  // Schleife läuft, bis n gleich 0 ist

    return total;
}


const result = digitSum(248);
console.log(result);  // ergebnis
