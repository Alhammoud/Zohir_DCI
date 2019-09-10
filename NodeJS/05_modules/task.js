// Aufgaba 1:
// Erstelle  ein Modul "countdown.js".
// Dieses soll eine Funktion exportieren,
// welche alle Zahllen von 0 bis 20 ausgibt.

console.log('Hallo World from task.js \n');


const count_obj = require('./countdown.js');

// count_obj.count();
count_obj();

// Aufgabe 2:
// Erstelle ein Modul "introduction.js"
// welche eine Funktion intro exporttttttttttiert.
// intro erwartet ein Parameter userInfo.
// userInfo soll ein Objekt sein mit den Keys firstName, lastName, email und birthyear.
//     
// intro soll eonen text ausgeben, der so ungefähr aussieht wie der folgende:
//
// "Hi, mein Name  ist FIRSTNAME LASTNAME und meine Email ist EMAIL. Ich wurde geboren am BIRTHYEAR. "

const obj_1={
    firstname:'Zohir',
    lastname:'Alhammoud',
    email:'z.alhammoud@icloud.com',
    birthyear:1989
}

const intro_obj = require('./introduction.js');

intro_obj(obj_1);


// AUfgabe 3:
//
// a) Erstelle ein modul "Person.js" 
// mit folgender klasse:

/* class Person{
    constructor(
        firstname,
        lastname,
        email,
        birthyear
    ){
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.birthyear=birthyear;
    }
} */

// b) Impotiere Person hier rein.
// c) Erstelle 3 verscheidene Personen mit (erfundenen)fiktiven Daten.
// d) Erweitere Person um eine Methode ,die Alter berechnet aufgrund des aktuellen Jahres 2019 und returne dieses .
// Führe die Methode hier ein.


const Person_class = require('./Person.js');

const person_obj1 = new Person_class('Tom','Müller','müller@gmx.de',1980);

const person_obj2 = new Person_class('Bob','Hans','Hans@gmx.de',1983);

const person_obj3 = new Person_class('Karl','Herrman','herrmen@gmx.de',1986);


person_obj1.alter_count();

//setTimeout(,);

person_obj2.alter_count();
person_obj3.alter_count();