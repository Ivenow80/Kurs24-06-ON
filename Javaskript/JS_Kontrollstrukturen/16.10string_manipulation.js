// String-Manipulationen
//1. String-Verkettung mit "+" Konkatenation
name = "Ivonne";
greeting ="Hallo";
console.log("Willkommen, " + name);
console.log("Willkommen" + name + "möchtest du" + greeting + "sagen");

// 2. Template-Strings
nachname ="Franke";
gruss =`Willkommen Herr ${name}`;
console.log(gruss);
zahl1 = 5;
zahl2 = 7;
erg = (zahl1 + zahl2);
console.log(`Das Ergebnis ist ${erg}`);
console.log("Das Ergebnis ist" + erg);

// 3. String-Methoden
str1 = "hallo Welt!";
formattedStrL = str1.toUppercase();
console.log(formattedStrL);
formattedStrU = str1trim().toUpperCase();
console.log(formattedStrU);

// 4. String-Interpolation in Funktionen
function mehrwertSteuerpreis(preis){
const steuersatz = 0.19;
gesamtpreis = preis * (1 * steuersatz);
return `der Gesamtpreis beträgt: €${gesamtpreis.toFixed(2)}`;

}
console.log(mehrwertSteuerpreis(100));

// 5.verwendung von replace()
text = "Ich habe ein Haustier. Es ist ein Kater. Sein Name ist Gojo"
//neuerText = text.replace("Gojo", "Baron");
console.log(neuerText);