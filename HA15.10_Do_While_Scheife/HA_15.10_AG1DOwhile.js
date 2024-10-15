function sumEvenNumbers() { 
    let total = 0;      
    // Variable, um die Summe zu speichern
    let number = 2;     // 2 erste gerae Zahl(Startwert)

    // do-while-Schleife, 
    do {
        total += number; 
         // aktuelle gerade Zahl zur Summe 

        number += 2;     
         // Immer um 2 erhöhen

    } while (number <= 100);  
    // Läuft solange die zahle kleiner gleich 100 ist

    return total;  
    //Summenausgabe
}

console.log(sumEvenNumbers()); // Ergebnis