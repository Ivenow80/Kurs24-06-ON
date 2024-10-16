// Array mit daten der Bücher
let buecher = [
    { titel: "Der Herr der Ringe", autor: "J.R.R. Tolkien", seiten: 1178 },
    { titel: "Harry Potter und der Stein der Weisen", autor: "J.K. Rowling", seiten: 223 },
    { titel: "Sofies Welt", autor: "Jostein Gaarder", seiten: 560 },
    { titel: "Der kleine Prinz", autor: "Antoine de Saint-Exupéry", seiten: 96 },
    { titel: "Dune", autor: "Frank Herbert", seiten: 412 }
];

console.log("Originales Bücher-Array:");
console.log(buecher);

// Sortieren des Arrays basierend auf der Anzahl der Seiten (von höchstens nach mindestens)
buecher.sort((a, b) => b.seiten - a.seiten);

console.log("Bücher sortiert nach Seitenanzahl (von höchstens nach mindestens):");
console.log(buecher);

// Erzeugen eines neuen Arrays, das nur die Titel der Bücher enthält, die mehr als 300 Seiten haben
let langeBuecherTitel = buecher
    .filter(buch => buch.seiten > 300)  // Filtert Bücher mit mehr als 300 Seiten
    .map(buch => buch.titel);           // Erzeugt ein Array nur mit den Titeln

console.log("Titel der Bücher mit mehr als 300 Seiten:");
console.log(langeBuecherTitel);


