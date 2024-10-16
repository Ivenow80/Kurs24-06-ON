// Funktion getGrade
function getGrade() {
    // Generiere eine zufällige Zahl zwischen 1 und 6
    return Math.floor(Math.random() * 6) + 1;
}

// Funktion checkGrade, die die Note bewertet
function checkGrade() {
    // Holen der zufälligen Note durch Aufruf von getGrade
    const grade = getGrade();
    console.log("Die gezogene Note ist: " + grade);

    // Bewertung mit Switch-Case-Anweisung
    switch (grade) {
        case 1:
            console.log("Bewertung: Sehr gut");
            break;
        case 2:
            console.log("Bewertung: Gut");
            break;
        case 3:
            console.log("Bewertung: Befriedigend");
            break;
        case 4:
            console.log("Bewertung: Ausreichend");
            break;
        case 5:
            console.log("Bewertung: Mangelhaft");
            break;
        case 6:
            console.log("Bewertung: Nicht bestanden");
            break;
        default:
            console.log("Ungültige Note");
    }

    // Bewertung mit If-Else-Anweisung
    if (grade === 1) {
        console.log("If-Else-Bewertung: Sehr gut");
    } else if (grade === 2) {
        console.log("If-Else-Bewertung: Gut");
    } else if (grade === 3) {
        console.log("If-Else-Bewertung: Befriedigend");
    } else if (grade === 4) {
        console.log("If-Else-Bewertung: Ausreichend");
    } else if (grade === 5) {
        console.log("If-Else-Bewertung: Mangelhaft");
    } else if (grade === 6) {
        console.log("If-Else-Bewertung: Nicht bestanden");
    } else {
        console.log("Ungültige Note");
    }
}

// Aufruf der checkGrade-Funktion zur Demonstration
checkGrade();
