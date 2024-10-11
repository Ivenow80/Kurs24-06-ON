<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operatoren in JavaScript</title>
</head>
<body>

    <h1>Vergleich von Zahlen</h1>

    <script>
        // Deklaration von zwei Zahlen
        let num1 = 5;
        let num2 = '5'; // Eine String-Darstellung der Zahl 5

        // Vergleich mit dem == Operator (lose Gleichheit)
        let looseEquality = (num1 == num2); // true, da '5' in eine Zahl konvertiert wird
        console.log('Lose Gleichheit (==):', looseEquality); // Ausgabe: true

        // Vergleich mit dem === Operator (strikte Gleichheit)
        let strictEquality = (num1 === num2); // false, da num2 ein String ist
        console.log('Strikte Gleichheit (===):', strictEquality); // Ausgabe: false

        // Erklärung des Unterschieds
        console.log("Unterschied: '==' vergleicht nach Typkonvertierung, während '===' ohne Typkonvertierung vergleicht.");
    </script>

</body>
</html>
