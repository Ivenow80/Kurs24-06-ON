//  Arrays mit fünf verschiedenen Städten
let staedte = ["Berlin", "Hamburg", "Vechta", "Kiel", "Bremen"];

// Iteration Array:Ausgabe jeder Stadt in Großbuchstaben
console.log("Städte in Großbuchstaben:");
staedte.forEach(stadt => {
    console.log(stadt.toUpperCase());
});

// Array, das die Anzahl der Buchstaben in jedem Stadtnamen speichert
let buchstabenAnzahl = staedte.map(stadt => stadt.length);
// Ausgabe der 9 Staedten (Arrays)Anzahl der Grossbuschstaben
console.log("Anzahl der Buchstaben in jedem Stadtnamen:", buchstabenAnzahl);
