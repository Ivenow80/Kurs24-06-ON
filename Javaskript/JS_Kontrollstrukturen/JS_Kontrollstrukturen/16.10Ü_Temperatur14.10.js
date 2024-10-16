// Funktion getTemperature, die eine zufällige Temperatur zwischen -20 und 40 Grad
function getTemperature() {
    // Generiere eine zufällige Zahl zwischen -20 und 40
    return Math.floor(Math.random() * 61) - 20;
}

// Funktion checkTemperature, die die Temperatur bewertet
function checkTemperature() {
    // zufälligen Temperatur durch Aufruf von getTemperature
    const temperature = getTemperature();
    console.log("Die gemessene Temperatur ist: " + temperature + "°C");

    // If-Else-Anweisung
    if (temperature < 0) {
        console.log("If-Else-Bewertung: Es ist sehr kalt");
    } else if (temperature >= 0 && temperature <= 15) {
        console.log("If-Else-Bewertung: Es ist kühl");
    } else if (temperature >= 16 && temperature <= 25) {
        console.log("If-Else-Bewertung: Es ist angenehm warm");
    } else if (temperature > 25) {
        console.log("If-Else-Bewertung: Es ist heiß");
    }

    // Switch-Case-Anweisung
    switch (true) {
        case (temperature < 0):
            console.log("Switch-Case-Bewertung: Es ist sehr kalt");
            break;
        case (temperature >= 0 && temperature <= 15):
            console.log("Switch-Case-Bewertung: Es ist kühl");
            break;
        case (temperature >= 16 && temperature <= 25):
            console.log("Switch-Case-Bewertung: Es ist angenehm warm");
            break;
        case (temperature > 25):
            console.log("Switch-Case-Bewertung: Es ist heiß");
            break;
        default:
            console.log("Ungültige Temperatur");
    }
}
// Ausgabe der temperaturen
checkTemperature();
