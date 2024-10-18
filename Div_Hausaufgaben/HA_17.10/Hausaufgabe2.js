// Set mit namen besuchte Seiten erstelle
let besuchteSeiten = new Set();

//mind 5 besuchte Seitennamen hinzufügen
besuchteSeiten.add('Startseite');
besuchteSeiten.add('Profil');
besuchteSeiten.add('Einstellungen');
besuchteSeiten.add('Startseite'); // Duplikat
besuchteSeiten.add('Hilfe');
besuchteSeiten.add('Einstellungen'); // Duplikat

// Anzahl der eingeutigen Seitenanzahlen ausgeben.

// Seitenanzeige erstellen
function zeigeSeiten(seitenSet) {
    seitenSet.forEach(seite => {
        console.log(`Besuchte Seite: ${seite}`);
    });
}

// Benutzte Seiten anzeigen
zeigeSeiten(besuchteSeiten);
