
console.log('Hallo Wordl from main.js');
console.log('        ');

const greet_1 = require('./greet1.js'); 
// .js kann man weglassen
// greet_1 ist eine referenz auf eine funktion
greet_1();
console.log('        ');


const greet_2 = require('./greet2.js');
greet_2.greet();
console.log('        ');

const variables1 = require('./variables.js');

console.log(variables1.str1);
console.log(variables1.str2);
console.log(variables1.str3);
console.log('        ');


// Aufgabe:
// importieren die klasse Greetr hier rein und führe die Methode greet aus.

const greet_4 = require('./greet4.js');

let greet_4_obj = new greet_4();

greet_4_obj.greet();
console.log('        ');