//Arrays, das ein Kartenspiel (52 Karten) simuliert
let farben = ["Kreuz", "Pik", "Herz", "Karo"];
let werte = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Bube", "Dame", "König", "As"];
let deck = [];

// Funktion zur Initialisierung des Decks
function initializeDeck() {
    deck = [];
    for (let farbe of farben) {
        for (let wert of werte) {
            deck.push(`${wert} von ${farbe}`);
        }
    }
}

// Funktion Karten mischen
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Zufälliger Index
        // Karten tauschen
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Ziehen einer Karte aus dem Deck
function drawCard() {
    if (deck.length === 0) {
        return "Keine Karten mehr im Deck!";
    }
    return deck.pop(); // oberste Karte ziehen und entferne sie aus dem Deck
}

// Anzeige der Anzahl der verbleibenden Karten
function remainingCards() {
    return deck.length;
}

// Initialisiere das Deck und mische es
initializeDeck();
shuffleDeck();

// Beispielaufrufe
console.log("Gezogene Karte:", drawCard());
console.log("Verbleibende Karten:", remainingCards());
console.log("Noch eine gezogene Karte:", drawCard());
console.log("Verbleibende Karten:", remainingCards());

// keine Ahnung gehabt aber war neugierig u mit Gpt erstellen lassen!