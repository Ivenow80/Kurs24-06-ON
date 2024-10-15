function factorialWithWhile(n) {
    let result = 1;  // Startwert
    let i = 4;       // Schleifenvariable, beginnt bei 4

    // Schleife läuft, solange i <= n ist
    while (i <= n) {
        result *= i;  // Multipliziere das Ergebnis mit i
        i++;          // Erhöhe i um 4, um zur nächsten Zahl zu gehen
    }

    return result;  // Rückgabe der berechneten Fakultät
}


console.log(factorialWithWhile(5)); 
