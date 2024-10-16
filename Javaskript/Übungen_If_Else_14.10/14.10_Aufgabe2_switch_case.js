// Funktion Wetterinterpretation, die eine Wetterlage und eine Aktivität vorschlägt
function interpretiereWetter(wetterlage) {
    //  Switch-Case-Anweisung
    switch (wetterlage) {
        case "Sonnig":
            // spezifische Bedingung/ Wert prüfen 
            //und darauf basierend einen bestimmtenlog ausführen.
            console.log("Gehe spazieren");
            break; // beendet vorzeitig einen Befehl
        case "Regnerisch":
            console.log("Bleibe zu Hause und lese ein Buch");
            break;
        case "Schnee":
            console.log("Baue einen Schneemann");
            break;
        case "Windig":
            console.log("Fliege einen Drachen");
            break;
        default:
            console.log("Keine Aktivität verfügbar für diese Wetterlage");
    }
}

// Testen der Funktion mit verschiedenen Wetterlagen
interpretiereWetter("Sonnig");     // Gehe spazieren
interpretiereWetter("Regnerisch"); // Bleibe zu Hause und lese ein Buch
interpretiereWetter("Schnee");     // Baue einen Schneemann
interpretiereWetter("Windig");     // Fliege einen Drachen
interpretiereWetter("Nebel");      // Keine Aktivität 