// Erstellen Sie ein Set namens 'buchstabenSet' und fügen Sie die Buchstaben 'A', 'B' und 'C' hinzu
let buchstabenSet = new Set();
buchstabenSet.add('A');
buchstabenSet.add('B');
buchstabenSet.add('C');

// Überprüfen Sie, ob der Buchstabe 'D' im Set existiert
if (buchstabenSet.has('D')) {
    console.log("Der Buchstabe 'D' existiert im Set.");
} else {
    console.log("Der Buchstabe 'D' existiert nicht im Set.");
}

// Fügen Sie den Buchstaben 'A' erneut hinzu und geben Sie die Anzahl der Elemente im Set aus
buchstabenSet.add('A');  // Da Sets nur einzigartige Werte speichern, wird 'A' nicht doppelt hinzugefügt
console.log("Anzahl der Elemente im Set:", buchstabenSet.size);
