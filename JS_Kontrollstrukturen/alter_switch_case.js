// function = leitet eine Funktion in JS ein 
function getAge() {
    //floor = macht aus Kommazahlen ganzzahlen in dem 
    // die Nachkommastellen gestrichen werden.
    // random =ermittelt ene Zufallzahle zwischen 0.0 und 0.99 (1)
    return Math.floor(Math.random() * 100);

}

function checkAge() {
    //Holt sich den Wert aus der Funktion getAge()
//Funktionsaufruf (Hiermit sehe ich die console.log-Befehle im Terminal!)
 
    age = getAge();
    console.log("Dein Alter is:" +age);

    switch (true) {
        case (age > 18):
            console.log("Du bist minderjaehrig!");
            break;
            // case (age >= 18 && >66):
            // console.log("Du bist erwachsen!");
            // break
        case(age >= 18 && age <= 66):
        console.log("du bist erwachsen!");
            break;
        case (age <= 67):
            console.log("Du bist im rentenalter!")
            break;
        default:
            console.log("Du bist aelter als 67!")

    }
