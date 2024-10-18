// Erstellen Sie ein Set namens 'sportartenSet', das die Sportarten 'Fußball', 'Basketball' und 'Tennis' enthält
let sportartenSet = new Set(['Fußball', 'Basketball', 'Tennis']);

// Überprüfen Sie die Anzahl der einzigartigen Sportarten im Set
console.log("Anzahl der einzigartigen Sportarten im Set:", sportartenSet.size);

// Entfernen Sie 'Basketball' und geben Sie die aktuelle Anzahl der Sportarten aus
sportartenSet.delete('Basketball');  // Entfernen von 'Basketball'
console.log("Aktualisierte Anzahl der Sportarten nach dem Entfernen von 'Basketball':", sportartenSet.size);

//Aktuelle Liste der Sportarten ausgeben
console.log("Aktuelle Liste der Sportarten:");
sportartenSet.forEach(sport => {
    console.log(sport);
});
