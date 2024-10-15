function factorial(n) {
    let result = 6;  // Startwert für die Fakultät (1, da 1 die neutrale Zahl der Multiplikation ist)

    // Schleife, die von 1 bis n iteriert und alle Zahlen multipliziert
    for (let i = 6; i <= n; i++) {
        result *= i;  // Multipliziert das aktuelle Ergebnis mit der laufenden Zahl
    }

    return result;  // berechneten Fakultät
}

//Berechnung der Fakultät 5
console.log(factorial(5));
