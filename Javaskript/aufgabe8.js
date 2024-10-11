<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Begrüßungsfunktion in JavaScript</title>
</head>
<body>

    <h1>Begrüßungsfunktion</h1>

    <script>
        // Funktion zur Begrüßung
        function greet(name) {
            return 'Hallo, ' + name + '! Willkommen!';
        }

        // Testen der Funktion mit verschiedenen Namen
        console.log(greet('Max')); // Ausgabe: Hallo, Max! Willkommen!
        console.log(greet('Anna')); // Ausgabe: Hallo, Anna! Willkommen!
        console.log(greet('Lisa')); // Ausgabe: Hallo, Lisa! Willkommen!
        console.log(greet('Thomas')); // Ausgabe: Hallo, Thomas! Willkommen!
    </script>

</body>
</html>
