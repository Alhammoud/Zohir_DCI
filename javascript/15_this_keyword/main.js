console.log('15_this_keyword');

// thid keyword innerhalb eine Funktion
function calculateAge(year) {
    console.log(2019 - year);
    //this verweist bei normalen Aufrufe einer Funktion
    //immer auf den globalen Execution Context bzw. das Window-object 

    console.log(this);
}

calculateAge(1985);

//this innerhalb einer Methode

let john = {

    name: 'john',
    yearOfBirth: 1990,
    calculateAge: function () {
        //innerhalb einer Methode verweist 
        // das this-keyword auf das Object
        console.log(this);

        innerFunction();
        function innerFunction() {
            console.log('innerFunction this');
            // innerhalb einer Funktion , auch wenn sie Unterfunktion ist einer Methode,
            //verweist das this-keyword nach wie vor auf den globalen Execution Context 
            console.log(this);
        }
    }
}

john.calculateAge();


// Aufgabe:
//
// Erstelle ein Objekt zu einem Feuerwehrauto.
// Denke Dir 4 passende Variablen aus und 
// eine zusätzliche Variable namens Farbe.
// Erstelle eine Methode namens "getFarbe"
// die die aktuelle Farbe ausgibt.
//
// Erstelle ein zweites Objekt zu einem Sportwagen.
// Überlege Dir eine Farbe und kopiere die 
// Methode getFarbe des Feuerwehrautos zum
// Sportwagen und führe diese aus.


let Feuerwehrauto = {
    nummer: 1,
    fahrer: 'jone',
    lange: 'große',
    gewicht: 70,
    farbe: 'red',
    getFafarbe: function () {
        console.log(this.farbe);

    }


}

console.log(Feuerwehrauto);
Feuerwehrauto.getFafarbe();


let Sportwagen = {
    nummer: 1,
    fahrer: 'gorge',
    lange: 'small',
    gewicht: 60,
    farbe: 'weiß'


}

console.log(Sportwagen);

//Sportwagen.getFafarbe(); //Sportwagen.getFafarbe is not a function
Sportwagen.getFafarbe=Feuerwehrauto.getFafarbe;

console.log(typeof(Sportwagen.getFafarbe));
Sportwagen.getFafarbe();