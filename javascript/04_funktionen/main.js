function halloPlaneten() {
    console.log(`Hallo Welt`);
    console.log(`Hallo Sonne`);
    console.log(`Hallo Mond`);
    console.log(`Hallo Jupiter`);
    console.log(`Hallo Saturn`);
}

halloPlaneten();
halloPlaneten();
halloPlaneten();
halloPlaneten();
halloPlaneten();
//Aufgabe:
//
//Schreibe eine Funktion ,die das Ergebnis von 1+1 auf der Console ausgibt.

function sumNumber(x, y) {
    return x + y;
}

console.log(`1+1=` + sumNumber(1, 1));

console.log(`asd+axc=` + sumNumber('asd', 'axc'));
//Aufgabe:
//
//schreibe eine Funktion intro die einen kleinen Text über Euch auf der Konsole ausgebit.

function intro() {
    console.log(`lorem fnlf wfn n rkewflfweor     eü ekwf fmasf  fsd.aökaka n rjfrfü rf rmf rü r ürm rm`);
}

intro(); // Aufrufe (call, execution) einer Funktion

//Aufgabe :
//
//schreibe eine Funktion wieIstDasWetter, die einen Parameter wetter entgegennimmt. Wenn Wetter dem string'regen' entspricht, dann soll wieIstDasWetter auf der Konsole 'es regnet' ausgeben. Entsprechend den Parameterwerten 'sonne' und 'schnee' sollen andere passende Sätze auf der Konsole ausgegeben werden.


function wieIstDasWetter(wetter) {
    switch (wetter) {
        case 'regen':
            console.log(`ES regnet`)
            break;
        case 'sonne':
            console.log(`Es ist sonnig`)
            break;
        case 'schnee':
            console.log(`Es schneit`)
            break;
        default:
            console.log(`Es ist normal`)
    }

}

wieIstDasWetter('regen');
wieIstDasWetter('sonne');
wieIstDasWetter('schnee');
wieIstDasWetter('folke');

// Funktionen mit rückgabewerten

var hw = 'hallo welt';
console.log(hw);
hw = 5;
console.log(hw);
function gebeHalloWeltZurueck() {
    return 'Hallo Welt zuruechgegeben durch eine funktion';
}

var hwf = gebeHalloWeltZurueck();

console.log(hwf);


//Aufgabe:
//
//Schreicbe eine Funktion avg ,die den Durchschnitt von zwei Parametern a und b berechnet und zurückgibt. Ruf avg mit 15 und 5 auf und schreibe den Wert in die Konsole.

function avg(a, b) {
    return (a + b) / 2;
}

console.log('Der Durchschnitt von 15 und 5 ist ' + avg(15, 5));

//Aufgabe:
//
//schreibe eine Funktion gibIntro erwartet 5 Parameter:
//vorname, nachname, wohnort, lieblingshobby und lieblingsurlaubsziet.
//Verwende evtl. Backticks anstatt Gänsefüsschen.
//Gib den Text in der Konsole aus nach dem zurückgeben durch die Funktion.


function gibIntro(a, b, c, d, e) {
    return (`Ich bin ${a} ${b}.Ich wohne in ${c}.   lieblingshobby:${d}   lieblingsurlaubsziet:${e} `);
}


function gibIntro(a, b, c, d, e) {
    return (` Vorname:${a}   Nachname:${b}   Wohnort:${c}   lieblingshobby:${d}   lieblingsurlaubsziet:${e} `);
}
var gi = gibIntro('Zohir', 'Alhammoud', 'Berlin', 'LesenBücher', 'Sommer');
console.log(gi);

//console.log(gibIntro('Zohir','Alhammoud','Berlin','LesenBücher','Sommer'));






//hosting - Funktionen können vor ihrer Definition ausgeführt werden.

console.log('hosting - expression and statement Function')

dummyfunction();

function dummyfunction() {
    console.log('Dummy Function');
}

var dv = dummyValue();
console.log(`dummyValue =${dv}`);


//function statement - werden später ausgewertet
function dummyValue() {
    return 'Dummy Value';
}
//console.log(dummyValueExpression()); //hosting funktioniert nicht
//from Cosle ((Uncaught TypeError: dummyValueExpression is not a functionat main.js:130))

//function expression - werden sofort ausgewertet
var dummyValueExpression = function () {
    return 'Dummy Value Expression';
}

console.log(dummyValueExpression()); //hosting funktioniert


/*Function Expression VS. Function Statement

---Function declarations load before any code is executed while Function expressions load only when the interpreter reaches that line of code.

---Similar to the var statement, function declarations are hoisted to the top of other code.*/

var x = function (a, b) { return a * b };

/*After a function expression has been stored in a variable, the variable can be used as a function. Functions stored in variables do not need function names. They are always invoked (called) using the variable name. */

console.log(x(5, 6));


// Example: Function Expression

// alert(foo()); //hosting funktioniert nicht // ERROR! foo wasn't loaded yet
var foo = function () { return 5; }
//alert(foo());//hosting funktioniert


// Example: Function Declaration

//alert(foo()); // Alerts 5. Declarations are loaded before any code can run.
function foo() { return 5; }

/*
--Function declarations load before any code is executed while Function expressions load only when the interpreter reaches that line of code.

--Similar to the var statement, function declarations are hoisted to the top of other code. Function expressions aren’t hoisted, which allows them to retain a copy of the local variables from the scope where they were defined.

*/

/*
Benefits of Function Expressions
There are several different ways that 
"function expressions" become more useful than "function declarations".

As closures
As arguments to other functions
As Immediately Invoked Function Expressions (IIFE)
 */




//Aufgabe:
//
//
/*
Schreibe eine Funktion gehtInRente ,die als Parameter einen Namen und ein Geburtsdatum hat. 
Die Funktionen soll auf die Konsole das aktuelle Alter ausgeben. Gegeben sei ,dass in Deutschland alle mit 67 in Rente. Die Funktion soll zurückgegeben, in wieviel Jahren die person in Rente geht.
*/


var das_aktuelle_Alter = 0;
function gehtInRente(a, b) {
    var das_aktuelle_Alter = 2019 - b;
    console.log(`Das aktuelle Alter von ${a} ist ${das_aktuelle_Alter} jahre alt`);
    if (das_aktuelle_Alter < 67) {
        console.log(`${a} soll nach ${67 - das_aktuelle_Alter} Jahren in Rente gehen`);
        return 67 - das_aktuelle_Alter;
    }
    else {
        console.log(`${a} ist schon Renter`);
        return 0;
    }
}

console.log(das_aktuelle_Alter);

//var name = prompt("What is your name?");

//var birthday = prompt("What is your birthday ?");


//gehtInRente(name,birthday);
//gehtInRente('Alex', 1970);
//gehtInRente('Peter', 1950);

//var person = prompt("Please enter your name", "Harry Potter");

//var person_birthday = prompt("What is your birthday ?", 1989);
//var person_birthday = prompt("What is your birthday ?");
//var person_birthday =1989;

//if (person != null) {
    //console.log("Hello " + person + "! How are you today?");
   // gehtInRente(person, person_birthday);
//}


var x = 4;
var y = 0;
console.log(`y value befor ++x ${y}`);
y += x; // y = y+x; 
x++; // x=x+1;
++x;

console.log(`y value after ++x ${y}`);



// Nikolaus- Funktion- zum Debuggen

function dasHausVonNikolaus(){
    console.log('das');
    console.log('ist');
    console.log('das');
    console.log('Haus');
    console.log('vom');
    console.log('ni');
    console.log('ko');
    console.log('laus');
}

dasHausVonNikolaus();