// 1. Erstellen Sie eine Map namens 'stadtMap'
let stadtMap = new Map();

// 2. Fügen Sie folgende Paare hinzu: 'Berlin' : 'Deutschland' und 'Paris' : 'Frankreich'
stadtMap.set('Berlin', 'Deutschland');
stadtMap.set('Paris', 'Frankreich');

// 3. Greifen Sie auf den Wert des Schlüssels 'Berlin' zu und geben Sie ihn aus
console.log("Der Wert für den Schlüssel 'Berlin' ist:", stadtMap.get('Berlin'));

// 4. Überprüfen Sie, ob der Schlüssel 'Rom' in der Map existiert
if (stadtMap.has('Rom')) {
    console.log("Der Schlüssel 'Rom' existiert in der Map.");
} else {
    console.log("Der Schlüssel 'Rom' existiert nicht in der Map.");
}

// 1. Erweitern Sie die stadtMap um 'Rom' : 'Italien'
stadtMap.set('Rom', 'Italien');

// 2. Iterieren Sie mit .forEach() und geben Sie jedes Paar im Format "Stadt: Land" aus
console.log("Alle Städte und Länder in der Map:");
stadtMap.forEach((land, stadt) => {
    console.log(`Stadt: ${stadt}, Land: ${land}`);
});
