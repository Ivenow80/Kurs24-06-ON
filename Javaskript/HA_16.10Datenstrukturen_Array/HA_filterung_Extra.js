// Erstellen eines Arrays mit mindestens 20 zufälligen Zahlen zwischen 1 und 100
let zufallsZahlen = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);

console.log("Array mit zufälligen Zahlen:", zufallsZahlen);

// gerade Zahlen filtern und in ein neues Array scheiben
let geradeZahlen = zufallsZahlen.filter(zahl => zahl % 2 === 0);

console.log("Gefilterte gerade Zahlen:", geradeZahlen);

//gefilterte gerade Zahlen zur Summe berechnen
let summeGeradeZahlen = geradeZahlen.reduce((summe, zahl) => summe + zahl, 0);

console.log("Summe der gefilterten geraden Zahlen:", summeGeradeZahlen);
