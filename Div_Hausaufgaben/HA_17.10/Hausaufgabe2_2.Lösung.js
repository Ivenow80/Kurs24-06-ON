// Set mit Namen besuchteSeiten erstellen
let besuchteSeiten = new Set();

// Mindestens 5 besuchte Seitennamen hinzufügen
const seiten = ['Startseite', 'Profil', 'Einstellungen', 'Hilfe', 'Startseite', 'Einstellungen']; // Duplikate in der Liste

seiten.forEach(seite => besuchteSeiten.add(seite)); // Füge jede Seite zum Set hinzu

// Anzahl der einzigartigen Seiten ausgeben
console.log("Anzahl der einzigartigen Seiten:", besuchteSeiten.size);

// Funktion zeigeSeiten  erstellen
function zeigeSeiten(seitenSet) {
    console.log("Besuchte Seiten:");
    seitenSet.forEach(seite => {
        console.log(`- ${seite}`);
    });
}

// Seitenanzeige ausgeben
zeigeSeiten(besuchteSeiten);
