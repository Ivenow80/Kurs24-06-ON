// funktion = leitet eine Funktion in Java S ein
function getAge() {
    // floor = macht aus Kommazahlen Ganze Zahlen  in dem
    //die Nachkommastellem gestrichen werden.
    // random = ermittelt eine Zufallszahl zwischen 0.0 und 0.99 (1).
    return Math.floor(Math.random() * 100)
}

function checkAge() {
    // Holt sich den Wert aus der Funktion  getAge()
    age = getAge();
    console.log("Dein Alter ist:" - age);

    if (age >18) { 
        console.log("Du bist minderjährig!")
    } else if (age <= 67){
        console.log("Du bist im Rentenalter!")
    } else {
        console.log("Du bist erwachen!")
    }

}

//Funktionsaufruf (Hiermit sehe ich die console.log-Befehle im Terminal!)
checkAge();
