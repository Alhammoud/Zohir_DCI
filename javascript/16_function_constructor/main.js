console.log('16_function_constructor');


// let john = {
//     name: 'John',
//     yearOfBrith: 1990,
//     job:'teacher'
// }

let Person = function (name, yearOfBirth, job) {
    // this referenziert aufs leere Objekt!!
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.foo = null;
    // this.calculateAge = function () {
    //     console.log('Alter von ' + this.name + ' ist ' + (2019 - this.yearOfBirth));
    //     // return (2019 - this.yearOfBirth);
    // }
}

//New elgt eine Instanz  von Person an.
let john = new Person('John', 1990, 'teacher');

// console.log(john.calculateAge());

//john.calculateAge();

// Aufgabe ::
//
// Bitte legtzwei Personen an: Jane & Mark
// und denkt euch deren Geburtsjahr und Beruf aus
// und lasst euch deren Alter ausgeben

let jane = new Person('Jane', 1995, 'artz');
let mark = new Person('Mark', 1989, 'kaufman');

// console.log('Alter von '+jane.name +' ist '+jane.calculateAge());
// console.log('Alter von '+mark.name +' ist '+mark.calculateAge());

// jane.calculateAge();
// mark.calculateAge();



// Prototypeing
console.log('  ');
console.log('  ');
console.log('----Prototypeing----');
Person.prototype.calculateAge = function () {
    console.log(2019 - this.yearOfBirth);

};

// jane.calculateAge();
console.log('john.calculateAge()' + john.calculateAge());
console.log(john);

//Person.prototype.lastName=null;
Person.prototype.lastName = 'smith';

// Person.prototype.lastName='';


console.log(john);
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


console.log('john.__proto__' + john.__proto__);
console.log('Person.prototype' + Person.prototype);

console.log(john.__proto__ === Person.prototype); //Output: true  //Alt
console.log(Object.getPrototypeOf(john) === Person.prototype); //Output: true  // Neu

console.log('Object.getPrototypeOf(john) ist ' + Object.getPrototypeOf(john));
//Output: Object.getPrototypeOf(john) ist [object Object]

jane.lastName = 'Hoffenman';

console.log(jane.lastName);

console.log(jane); //Output : 
/* Person {name: "Jane", yearOfBirth: 1995, job: "artz", foo: null, calculateAge: ƒ, …}
calculateAge: ƒ ()
foo: null
job: "artz"
lastName: "Hoffenman"
name: "Jane"
yearOfBirth: 1995
__proto__: Object
*/


console.log(john);  //output: 
/* 
    Person {name: "John", yearOfBirth: 1990, job: "teacher", foo: null, calculateAge: ƒ}
    calculateAge: ƒ ()
    foo: null
    job: "teacher"
    name: "John"
    yearOfBirth: 1990
    __proto__: Object
*/


console.log('john.hasOwnProperty(job)' + john.hasOwnProperty('job')); //true
console.log('john.hasOwnProperty(lastName)' + john.hasOwnProperty('lastName')); //false

console.log('john.hasOwnProperty(lastName)' + jane.hasOwnProperty('lastName')); //true


console.log(john instanceof Person); // true

let x = [2, 4, 6];

console.log(x.length); // 3

console.log('Object.getPrototypeOf(x) ist ' + Object.getPrototypeOf(x));
// x.pop()
// x.push()

console.log(x.push()); //3
console.log(x.pop()); //6

let personProto = {
    calculateAge: function () {
        console.log(2019 - this.yearOfBirth);
    }
};

let john2 = Object.create(personProto);

john2.yearOfBirth = 1999;
john2.job = 'kunster';
john.lastName = 'schneider';

console.log(john2); // Output : 
/* 
        {yearOfBirth: 1999, job: "kunster"}
            job: "kunster"
            yearOfBirth: 1999
            __proto__:
                calculateAge: ƒ ()
                __pro to__: Object
*/


// primitive daten  --- call by value---  string -  Number - Bool

let a = 'fischstaebchen'; // string
let b = true;  //Boolean
let c = 250; // Numbers
let d = null; //null
let e = a * null; // not A Number
console.log(e);  //(NaN)
let f; // undefined


let z = c;
console.log(z);
console.log(c);

c = 25;
console.log(c);
console.log(z);


// komplexe Daten  ----- call by Reference---- z.B: Objekt -  Array -  Funktion 
var object1 = {
    name: 'Johhhne',
    age: 26
};

let object2 = object1; // keine kopie sondern eine Referenz 
// wir haben kein neues Objekt kriert sondern eine Referez, die auf alte Objekte zeigt 
// wie Links im Internet, website wird nicht kopiert.

//object1.age=30;
object1.age = object2.age;

console.log(object1.age);
console.log(object2.age);
console.log(object2.name);


/* --------------------------------------------------- */

let age = 32;
let obj = {
    name: 'Martina',
    city: 'Berlin'
};

function change(a, b) {
    // a=30;
    b.age = a;
    b.city = 'New York';
}

change(age, obj);

console.log(age);

console.log(obj);

function changeValue(a) {
    a = 30;
}





/* +++++++++++++++++++++++++ */
// Übergabe von Funktionen als Attribute
console.log('------------ Übergabe von Funktionen als Attribute----------');

let years = [1998, 1965, 1937, 2005, 1998, 1985, 1991];
console.log('Die Type von varibal (years) ist ' + typeof (years));

console.log(years);


function arrayCalc(arr/* parameter als array */, fn /* parameter als Function  */) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]));
    }
    return newArr;
};



function calculateAge(years) {
    console.log('in calculateAge(years)' + years);
    console.log(`Das Alter von ${years} ist ${2019 - years}`)
    return 2019 - years;
};

let ages = arrayCalc(years, calculateAge);

console.log('Die Type von varibal (ages) ist ' + typeof (ages));
console.log(ages);
console.log('Alter für die Elemente in Array(years) ' + ages);

/* 
Schreibe eine Funktion, die überprüft, ob jemand volljährig ist ,
übergebe diese Funktion an arrayClac und gib das Ergebnis aus!
Volljährig >= 18 Jahre Alt
 */

function istVolljährig(arr) {
    // return(arr >= 18);
    if (arr >= 18) {

        return true;
    } else {
        return false;
    }

};


let fullAges = arrayCalc(ages, istVolljährig);
console.log(fullAges);

/*********************************************/

function maxHeartRate(age) {
    if (age >= 18 && age < 81) {
        return Math.round(206.9 - (0.67 * age));
    } else {
        return -1;
    }
};

// Benutze diese Funktion mit arrCalc, und schau was rauskommt!
//Erkläre die Ausgabe

let pulse = arrayCalc(ages, maxHeartRate);
console.log(pulse);


console.log(maxHeartRate(80));
console.log(maxHeartRate(18));

// Funktionen die Funktionen zurückgeben

function interviewQuestion(job) {
    if (job === 'designer') {
        // return anonyme funktion

        return function (name) {
            console.log(name + ' can you please explain what UX design is ?')
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach' + name + '?');
        };
    } else {
        return function (name) {
            console.log('Hello ' + name + ' ,What do you do ?')
        };
    }
};

let frage1 = interviewQuestion('tennistrainer');

console.log('Die Type von varibal (frage1) ist ' + typeof (frage1)); // function
frage1('Paul');

let frage2 = interviewQuestion('designer');
frage2('Michelle');

// andere Moglichkeit für Aufrufen 

interviewQuestion('tennistrainer')('Jürgen');



// IIFE Immediately invoked function expression

function game() {
    let score = Math.random() * 10;
    console.log(score);

    console.log(score >= 5);
};

game(); // bennante Funktion aufrufen

(function () {
    let score = Math.random() * 10;
    console.log(score);
    console.log(score >= 5);
})(); //anonyme Funktion aufrufen


(function (goodluck) {
    console.log('goodluck ');
    let score = Math.random() * 10;
    console.log(score);
    console.log(score >= 5 - goodluck);
})(2); 


// closures

function retirement(retirementAge){
    let k=' Jahre bis zur Rente';

    return function (year){
        let alter = 2019-year;
        console.log((retirementAge - alter) + k) ;
    }
};

let retirementUs = retirement(66);
retirementUs(1990);
// Kurzschreibweise für die beiden oberen zeilen
retirement(66)(1990);