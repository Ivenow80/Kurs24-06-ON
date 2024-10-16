//  Arrays mit den Zahlen 1 bis 10 erstellen
let zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Zahl 11 ans Ende des Arrays
zahlen.push(11);
console.log("Array nach Hinzufügen der Zahl 11:", zahlen);

// ersten Zahl aus dem Array entfernen
zahlen.shift();
console.log("Array nach Entfernen der ersten Zahl:", zahlen);
// Wo ist die Position der Zahl 5 im Array
let position5 = zahlen.indexOf(5);
console.log("Position der Zahl 5 im Array:", position5);

// Überprüfen, ob 7 enthalten
let istSiebenEnthalten = zahlen.includes(7);
console.log("Ist die Zahl 7 im Array enthalten?", istSiebenEnthalten);
