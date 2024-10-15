// summiert alle geraden Zahlen bis 100
//
return {number} //Die Summe aller Zahlen 1-100

function sumEvenNumbers() {
    let total = 0;
    //variable um Gesamte Summe 

    // Schleife Schleife erhöht um 2
    for (let number = 2; number <= 100; number += 2) {
        total += number;
        //Füge jeder gerade Zahl zur gesamten Summe hinzu
    }
    return total; // Ergebnis

}
// Ergebnis 
console.log(sumEvenNumbers()); 
