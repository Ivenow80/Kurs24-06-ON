//Wie haben wir bisher Arrays Angelegt?

//Ein einfaches zahlen-Array
//Array hat eine Laenge von 5+//Indizes: 0-4
const zahlenArray = [1, 2, 3, 4, 5,]

//Ein einfaches String-Array
const name = ["ivonne", "Sunna", "Finja", "Maxim"];

// Ein leeres String-Array
const namen = ["ivonne", "Sunna", "Finja", "Maxim"];

//Auswahl eines beliebigen Elements aus einem Array
console.log(namen [0]); //Ivonne
console.log(namen [1]); //Sunna
console.log(zahlenArray [3]);  // 4 

//Befüllen von Arrays
namen.push("Jeffrey");
zahlenArray.push(6);
leeresArray.push("Hund");
console.log(namen);
console.log(zahlenArray);
console.log(leeresArray);

//Entfernen des letzten Elements aus einem Array
namen.pop("");//das letzte Element eines Arrays muss nicht angegenen werden
// löscht immer letzten Eintrag
namen.pop("");

//zahlenArray.pop(6);
zahlenArray.pop(6);
zahlenArray.pop();

//zahlenArray.pop("Hund");
leeresArray.pop("Hund");
leeresArray.pop();

console.log(namen);
console.log(zahlenArray);
console.log(leeresArray);

namen.splice(2);
console.log(namen);
zahlenArray.splice();

//Splice kann Elemente in einem Array entfernen.
//es muessen immer Start -und Endwerte angegeben werden.
namen.splice(2);
console.log(namen);


//

//Unshift fuegt Elemente an den Anfang eines Arrayy hinzu.
namen.unshift("alper", "stefan", "patrick");
console.log(namen);

//shift entfernt immer das erste Element aus dem Array
namen.shift();
console.log(namen);

//CALLBACKS
namen.forEach(namen => {
    console.log(namen);
});


//

// Manipulation

let slicedNamen = namen.slice(2, 5);
console.log(slicedNamen);

