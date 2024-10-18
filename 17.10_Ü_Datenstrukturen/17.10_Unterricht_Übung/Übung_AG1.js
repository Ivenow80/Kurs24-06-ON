//  Erstellen Sie ein Array namens 'autos', das die Werte 'BMW', 'Audi' und 'Mercedes' enthält
let autos = ['BMW', 'Audi', 'Mercedes'];

// Greifen Sie auf das zweite Element zu und geben Sie es aus
console.log("Das zweite Element im Array ist:", autos[1]);

// Fügen Sie das Auto 'Volkswagen' hinzu und geben Sie das gesamte Array aus
autos.push('Volkswagen');
console.log("Das Array nach dem Hinzufügen von 'Volkswagen':", autos);

// Iterieren Sie über das Array und geben Sie jedes Auto in Großbuchstaben aus
console.log("Jedes Auto in Großbuchstaben:");
autos.forEach(function(auto) {
    console.log(auto.toUpperCase());
});
