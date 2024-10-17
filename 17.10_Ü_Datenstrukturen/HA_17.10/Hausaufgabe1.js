//  Map erstellen namens 'benutzerVerwaltung'
let benutzerVerwaltung = new Map();

// mindestens drei Benutzer zur Map hinzufügen
benutzerVerwaltung.set('benutzer1', { email: 'benutzer1@example.com', rolle: 'Sunna' });
benutzerVerwaltung.set('benutzer2', { email: 'benutzer2@example.com', rolle: 'User' });
benutzerVerwaltung.set('benutzer3', { email: 'benutzer3@example.com', rolle: 'Gast' });

// Benutzeranzeige erstellen
function zeigeBenutzer(benutzerMap) {
    benutzerMap.forEach((details, benutzername) => {
        console.log(`${benutzername}: ${details.email}, ${details.rolle}`);
    });
}

// Benutzerdetails anzeigen
zeigeBenutzer(benutzerVerwaltung);


