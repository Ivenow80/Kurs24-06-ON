// Funktion Kategorie, die das Alter als Parameter erhält und die Alterskategorie bestimmt
function bestimmeKategorie(alter) {
    if (alter >= 0 && alter <= 12) {
        return "Kind";
    } else if (alter >= 13 && alter <= 17) {
        return "Jugendlicher";
    } else if (alter >= 18 && alter <= 64) {
        return "Erwachsener";
    } else if (alter >= 65) {
        return "Senior";
    } else {
        return "Ungültiges Alter"; // Für negative Alterswerte oder ungültige Eingaben
    }
}

// Testen 
console.log(bestimmeKategorie(5));  
// Ausgabe: Kind
console.log(bestimmeKategorie(14)); 
// Ausgabe: Jugendlicher
console.log(bestimmeKategorie(30));
 // Ausgabe: Erwachsener
console.log(bestimmeKategorie(70));
 // Ausgabe: Senior
console.log(bestimmeKategorie(-1)); 
// Ausgabe: Ungültiges Alter
