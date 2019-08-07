console.log('HAllo world !!--objekte--');

var info = [];
info[0] = 'Jan'; //vorname
info[1] = 'Schulz';//nachname
info[2] = 'Berlin';//wohnort
info[3] = '33';// alter

console.log(info);


var objekteInfo = {
    //key    : value
    firstName: 'Jan',
    lastname: 'schultz',
    city: 'Berlin',
    age: 33
};

console.log(objekteInfo);

//Aufgabe:
//
//Stelle Dir wieder einen Baum vor.
//finde 5 Key-value Paare überDeinen ausgedachten Baum. (z.B. anzahaeste, ... )



var baum = {
    baumName: 'Apfel',
    baumHoch: 1.5,
    baumLand: 'Deutschland',
    baumAlter: 20,
    baumAnzahlAeste: 50000,
    //meinbaum: function(){}
}

console.log(baum.baumName); // variante 1
console.log(baum['baumName']); // variante 2

// Aufgabe:
//
// Schreibe eine Funktion meinBaum die als Parameter objBaum ein Objekt
// erwartet. Die Funktion soll einen Text ausgeben der einen
// Baum beschreibt und für den Text die key-value Paare des Parameter-Objects benutzt.

function meinbaum(objBaum) {
    return `Baum Name: ` + objBaum.baumName + ` Baum hoch: ` + objBaum.baumHoch + ` Baum Land: ` + objBaum.baumLand + ` Baum Alter: ` + objBaum.baumAlter + ` Baum Anzahl Aeste :` + objBaum.baumAnzahlAeste;
}

console.log(meinbaum(baum));

//-------------------------------------------------------------
function printXundY(obj) {

    console.log(`
        ${obj.x} und ${obj.y}
    `)
}

var o1 = { x: 1, y: 2 };

printXundY(o1); // variante 1: objekt wurde vorher definiert 
printXundY({ x: 1, y: 2 }); //variante 2: objekt wird direkt in der parameterliste definiert



// Aufgabe gggg:
//
// Schreibe eine Funktion incXundY die ein Parameter obj erwartet.
// In der Funktion wird obj.x um 1 erhöht, und obj.y wird mit 5 multipliziert. Danach wird obj ausgegeben (nicht returned).
// Rufe die Funktion incXundY mit einem Beispiel-Objekt
// o2 = {x: 8, y: 5} auf, einmal indirekt per Variable und einmal
// direkt in der Parameterliste.



function incXundY(obj) {
    obj.x++;
    obj.y = obj.y * 5;

    console.log(`Aufgabe gggg:  objekte x: ` + obj.x + ` objekte y: ` + obj.y);

}


var o2 = { x: 8, y: 5 };
incXundY(o2);

incXundY({ x: 8, y: 5 });




// Aufgabe:
//
// Analysiere den folgenden Code und beschreibe mit eigenen Worten,
// was er tut. Gehe dafür Zeile für Zeile vor.

function lichtSchalter(objHaus) {
    if (objHaus.licht === true) {
        objHaus.licht = false;
    } else {
        objHaus.licht = true;
    }
}

var meinHaus = {
    zimmer: 3,
    flaeche: 90,
    licht: false
}

lichtSchalter(meinHaus);




// arrays von objekte

// "normales" array
var arrayNumbers = [
    1, // 0
    2, // 1
    3, // 2
    4 // 3
];

// array aus objekten
var autos = [
    { type: 'Audi', baujahr: 1998 }, //0
    { type: 'BMW', baujahr: 2002 }, //1
    { type: 'Peugeot', baujahr: 1997 },//2
    { type: 'skoda', baujahr: 1997 },//3
]

console.log(autos[2].type); //Output: Peugeot
console.log(autos[1].baujahr); //Output: 2002
console.log(autos[3].baujahr + ' ' + autos[3].type); //Output: 1997 skoda


var cocktail = {
    alkoholGehalt: 0.2,
    name: 'Long Island',
    zutaten: [ //  0         1         2          3       4  -> length = 5
        'Limette', 'Tee', 'Eiswürfel', 'Minze', 'Rum'
    ]
}

console.log(
    cocktail.zutaten[1] // Output:Tee
);

//letzte Zutat
console.log(
    cocktail.zutaten[cocktail.zutaten.length - 1] //Output: Rum
)


// letzte Zutat entfernen als Return-Value von pop();
var letzteElement = cocktail.zutaten.pop();
console.log(`
        entferntes Element: ${letzteElement}
        `);

// neue letzte Zutat
console.log(
    // cocktail.zutaten[5 - 1]
    cocktail.zutaten[cocktail.zutaten.length - 1]
);

// Aufgabe:
//
// Erstelle ein Array fruechte aus den folgenden Objekten.
// Versuche zwei verschiedene Lösungswege zu finden.

var apfel = {
    farbe: 'rot',
    gewicht: 100,
    geshmack: 'suess'
};

var kiwi = {
    farbe: 'gruen',
    gewicht: 50,
    geshmack: 'suess'
};

var zitrone = {
    farbe: 'gelb',
    gewicht: 70,
    geshmack: 'sauer'
};

//lösungen

var freuechte1 = [
    apfel,
    kiwi,
    zitrone
];

console.log(freuechte1);

console.log(freuechte1[0].farbe);// output:rot


// lösungsweg 2 - copy & paste

var fruechte2 = [
    {
        farbe: 'rot',
        gewicht: 100,
        geshmack: 'suess'
    },
    {
        farbe: 'gruen',
        gewicht: 50,
        geshmack: 'suess'
    },
    {
        farbe: 'gelb',
        gewicht: 70,
        geshmack: 'sauer'
    }

];

console.log('fruechte2 :' + freuechte2);
console.log(fruechte2);
console.log(fruechte2[0].farbe);//output ; rot



// lösungsweg 3
var fruechte3 = [];
fruechte3[0] = apfel;
fruechte3[1] = kiwi;
fruechte3[2] = zitrone;

// lösungsweg 4
var fruechte4 = [];
fruechte4.push(apfel);
fruechte4.push(kiwi);
fruechte4.push(zitrone);
var freuechte2 = [
    apfel = {
        farbe: 'rot',
        gewicht: 100,
        geshmack: 'suess'
    },
    kiwi = {
        farbe: 'gruen',
        gewicht: 50,
        geshmack: 'suess'
    },
    zitrone = {
        farbe: 'gelb',
        gewicht: 70,
        geshmack: 'sauer'
    }

];

console.log(freuechte2);






// methoden - funktionen in einem objekt
var meinRechteck = {
    breite: 200,
    hoehe: 500
};

// flaeche ist eine externe funktion
function flaeche(obj) {
    console.log(`externe Funktion flaeche()`);
    var a = obj.breite * obj.hoehe;
    console.log(`die flaeche ist ${a} quadratmeter`);
}


// ein schritt in richtung OOP -> Objektorientiertes Programmieren
var meinZweitesRechteck = {
    // key    value ist eine number
    breite: 200,
    // key    value ist wieder eine number
    hoehe: 500,
    // key    value ist eine function

    // flaeche ist ein mitglied des objekts meinZweitesRechteck
    flaeche: function () {
        console.log(`interne Funktion flaeche() von meinZweitesDreieck`);
        var a = this.breite * this.hoehe;
        console.log(`die flaeche ist ${a} quadratmeter (zweites Rechteck)`);
    }
}


// info:
// eine funktion kann auch ein wert sein, so wie 
// var x = 1
// var bla = 'hallo'
// var foo = function() { console.log('hallo world'); }

console.log(meinZweitesRechteck.breite);
flaeche(meinRechteck);
meinZweitesRechteck.flaeche();


// Aufgabe:
// 
// Erstelle ein neues Objekt namens objIch.
// objIch soll einen firstname, einen lastname und eine city
// haben. Außerdem soll es eine Methode haben namens umzug, die
// einen Parameter erwartet namens newCity. umzug soll bei Aufruf
// die city von objIch mit newCity überschreiben und newCity ausgeben.

//Löusung
var objIch = {
    firstName: "John",
    lastName: "Doe",
    city: 'Beriln',
    umzug: function (newCity) {
        // objIch.city=newCity;
        this.city = newCity;
        console.log('The new city of ' + this.firstName + ' ' + this.lastName + ' ' + 'is ' + this.city);
    }
};

objIch.umzug('köln');



// anwendung des object-wissens auf bibliotheks-objekte
// console.log - ist eine methode des objekts console

function q(p) {
    console.log(p);
}

q('Hallo World');

// Math-object

// Math.floor
var f = 2.34343;
var floorF = Math.floor(f);
q(`floor von ${f} ist ${floorF}`);

// Math.ceil
var ceilingF = Math.ceil(f);
q(`ceil von ${f} ist ${ceilingF}`);

// Math.random
var rand = Math.random();
q(`rand ist zwischen 0 und 1 = ${rand}`);



// Aufgabe
// 
// Erstelle eine Funktion zufallszahl die zwei Parameter entgegen-
// nimmt: min und max. Min und max sollen zwei Ganzzahlen sein.
// Wobei min < max sein soll und beide größer als 0 -> Falls diese
// Bedingungen nicht erfüllt sind, soll zufallszahl false zurückgeben.
// Ansonsten soll zufallszahl eine zufällige Ganzzahl zwischen min und max
// zurückggeben.
//
// Tipp: Benutze die oben genannten Math-Methoden.



function zufallszahl(min, max) {

    if (min < max && min > 0 && max > 0) {

        var zufaelligeZahl = Math.floor(Math.random() * (max - min) + min);
        console.log('zufallsZahl in funktion : ' + zufaelligeZahl);

        return zufaelligeZahl;
    }
    else {
        console.log(`Das ist falsch ,muss Zahl1 (${min}) kleiner zahl2 (${max}) sein`)
        return false;
    }

};

console.log('zufallszahl zwischen 6.88 und 9.66 ist ' + zufallszahl(6.88, 9.66));

var h = zufallszahl(22, 55);
console.log('zufallszahl zwischen 22 und 55 ist ' + h);