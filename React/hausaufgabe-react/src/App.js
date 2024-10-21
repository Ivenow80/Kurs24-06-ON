import React from 'react';

function App() {
    // Begrüßung oder aktueller Tag (Variable über dem return-Block)
    const greeting = "Heute ist ein schöner Tag!";
    const additionResult = 5 + 3;

    // Funktion für den onClick-Handler
    const handleClick = () => {
        alert("Button wurde geklickt!");
    };

    return (
        <>
            {/* H1-Überschrift */}
            <h1>Willkommen zu meiner ersten React-App</h1>

            {/* H2 mit Variable */}
            <h2>{greeting}</h2>

            {/* H3 mit Berechnungsergebnis */}
            <h3>Das Ergebnis von 5 + 3 ist: {additionResult}</h3>

            {/* Button mit onClick-Handler */}
            <button onClick={handleClick}>Klicke mich!</button>
        </>
    );
}

export default App;

