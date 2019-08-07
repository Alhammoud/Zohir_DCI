console.log('Aufgabe Vererbung');
 //Patrik lösung

/* Führe diesen Code aus und analysiere das Objekt gonzo in der Konsole. Was hat call() gemacht?
Erstelle eine Funktion im Objekt alfred namens setLastName(lastname), welche ein neue Variable zu
dem Objekt alfred hinzufügt namens lastname und es den Parameter lastname zuweist.
Benutze call() nochmal um setLastName() auf gonzo ausführen mit dem Parameter „Gonzales“. */

var alfred = {
    name: 'Alfred',
    count: 0,
    sayYourName: function () {
        if (this.count === undefined)
            this.count = 0;
        console.log('My name is ' + this.myName);
        this.count++;
    },
    setLastName: function (lastname) {
        this.lastname = lastname;
        console.log(`My name is ${this.myName} ${this.lastname}`)
    }
}
var gonzo = {
    myName: 'Gonzo'
}
alfred.sayYourName.call(gonzo);
alfred.setLastName.call(gonzo, 'Gonzales');



/**1. Analysiere diesen Code kurz und
beschreibe, was er tut.
2. Benutze call() um die Funktion
presentation() vom
john-Objekt auf dem emily-Objekt
zu benutzen – mit den Parametern
„friendly“ und „evening“.
3. Tue (2) nochmal mit apply(). */

var john = { //  'john' wird angelegt
    name: 'john', // 'john.name = "john"' // Name wird zugewiesen
    age: 26, // 'john.age = 26 // Alter wird zugewiesen
    job: 'teacher',
    presentation: function (style, timeOfDay) { //'john.presentation' - eingebettete Funktion
        if (style === 'formal') {
            console.log('Good ' + timeOfDay +
                ' Ladies and Gentlemen I am ' +
                this.name + ', I am a ' +
                this.job + ' and I am ' +
                this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey whatsup.' +
                'I am ' +
                this.name + ', I am a ' +
                this.job + ' and I am ' +
                this.age + ' years old.' +
                'Have a nice ' + timeOfDay);
        }
    }
};
john.presentation('formal', 'morning'); // Funktion 'john.presentation' wird aufgerufen
var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation.call(emily, 'friendly', 'evening');//
john.presentation.apply(emily, ['friendly', 'evening']);

/////////////////////////////////////////////////////////////////////////////////////

function Item(name, price) {
    this.name = name;
    this.price = price;
    this.sold = false;
}
Item.prototype.sell = function () {
    this.sold = true;
}

function Book(name, price, author) {
    Item.call(this, name, price);
    this.author = author;
    this.category = 'book';
}
Book.prototype = Object.create(Item.prototype);

function Movie(name, price, director) {
    Item.call(this, name, price);
    this.director = director;
    this.category = 'movie';
}
Movie.prototype = Object.create(Item.prototype);

/**
Führe den Code aus und analysiere ihn. Beachte, dass call()
benutzt wird, um den Funktions-Konstruktor eines anderen
Objekts zu benutzen und dass Object.create() benutzt wird, um
zwei Prototyp-Ketten miteinander zu verbinden.
Erstelle ein Movie-Objekt „Casino“ von „Martin Scorsese“ und ein
Buch „ES“ von „Stephen King“.
Verkaufe sie beide.

Erstelle einen neuen Funktions-Konstruktor ComicBook, der Book
vererbt and erstelle eine neue Variable minAge die auf 6 gesetzt
wird, falls der Parameter minAge undefined oder kleiner als 6 ist.
Erstelle das Comic-Buch „Jessica Jones“ von „Marvel“ mit minAge
gleich 12.
Verkaufe es. 
*/

let casino = new Movie('Casino', 14.99, 'Martin Scorsese');
let es = new Book('ES', 9.99, 'Martin Scorsese');

console.log(casino, es);

casino.sell();
es.sell()
console.log(casino, es);



function ComicBook(minAge, name, price, author) {
    Book.call(this, name, price, author);
    if (minAge === undefined || minAge < 6) {
        this.minAge = 6;
    } else {
        this.minAge = minAge;
    }
}

ComicBook.prototype = Object.create(Book.prototype);

let jessicaJones = new ComicBook(12, 'Jessica Jones', 9.99, 'Marvel');

console.log(jessicaJones);
jessicaJones.sell();
console.log(jessicaJones);

//////////////////////////////////////////////////////////////////////////////////////////
/*
1.
Mit Deinem Wissen aus der Aufgabe 2: Erstelle Funktions-Konstruktoren
zu dem Animal-Diagramm und beachte dabei folgende Regeln:
    1. Jedes Animal hat einen name wenn es erstellt wird.
    2. Jedes Animal hat die Methoden sleep, eat und die (benutze dafür
       Funktionen, z.B. sleep())
    3. Mammals (Säugetiere) und birds haben die Methode breathe.
    4. Fishes haben die Methode swim.
    5. Birds haben die Methode fly.
    6. Tigers und Sharks haben die Methode kill, wobei kill() einen Parameter
       otherAnimal erwartet. kill() ruft die die() Funktion von otherAnimal auf.
2.       
Erstelle einen Tiger mit name „Vitaly“, einen Shark mit name „Nemo“
und ein Horse mit name „Fury“.
3.
Nemo ist hungrig und tötet Fury und Vitaly. Dann isst Nemo.
4.
Nemo stirbt.
*/

function Animal(name) {
    this.name = name;
    // sleep = function () { 
    //     this.sleep = true;
}

Animal.prototype.sleep = function () { 
    this.sleep = true;
};

Animal.prototype.eat = function () {
    this.eat = true;
};

Animal.prototype.die = function () {
    this.die = true;
};

function Mammals(name) {
    Animal.call(this, name);
};

Mammals.prototype = Object.create(Animal.prototype);

Mammals.prototype.breathe = function () {
    this.breathe = true;
};

function Tiger(name) {
    Mammals.call(this, name);
}

Tiger.prototype = Object.create(Mammals.prototype);

Tiger.prototype.kill = function (otherAnimal) {
    otherAnimal.die();
}

function Horse(name) {
    Mammals.call(this, name);
}

Horse.prototype = Object.create(Mammals.prototype);// horse wird der gruppe mammals zugeordnet
Bird.prototype.breathe = function () {
    this.breathe = true;
};

Bird.prototype.fly = function () {
    this.fly = true;
};

function Woodpecker(name) {
    Bird.call(this, name);
}

Woodpecker.prototype = Object.create(Bird.prototype);

function Hummingbird(name) {
    Bird.call(this, name);
}

Hummingbird.prototype = Object.create(Bird.prototype);

function Fish(name) {
    Animal.call(this, name);
}

Fish.prototype.swim = function () {
    this.swim = true;
};

Fish.prototype = Object.create(Animal.prototype);

function Tuna(name) {
    Fish.call(this, name);
}

Tuna.prototype = Object.create(Fish.prototype);

function Shark(name) {
    Fish.call(this, name);
}

Shark.prototype = Object.create(Fish.prototype);

Shark.prototype.kill = function (otherAnimal) {
    otherAnimal.die();
}

let vitaly = new Tiger('Vitaly');
let fury = new Horse('Fury');
let nemo = new Shark('Nemo');

nemo.kill(fury);
nemo.kill(vitaly);
nemo.eat();
nemo.die();
console.log(nemo, fury);

////////////////////////////////////////////////////////////////////////////////////////////////

class Animal_EC6 {
    constructor(name) {
        this.name = name;
    }

    sleep() {
        this.sleep = true;
    }

    eat() {
        this.eat = true;
    }

    die() {
        this.die = true;
    }
}

class Mammals_EC6 extends Animal_EC6 {
    constructor(name) {
        super(name);
    }

    breathe() {
        this.breathe = true;
    }
}

class Tiger_EC6 extends Mammals_EC6 {
    constructor(name) {
        super(name);
    }

    kill(otherAnimal) {
        otherAnimal.die();
    }
}

class Horse_EC6 extends Mammals_EC6 {
    constructor(name) {
        super(name);
    }
}

class Fish_EC6 extends Animal_EC6 {
    constructor(name) {
        super(name);
    }

    swim() {
        this.swim = true;
    }
}

class Tuna_EC6 extends Fish_EC6 {
    constructor(name) {
        super(name);
    }
}

class Shark_EC6 extends Fish_EC6 {
    constructor(name) {
        super(name);
    }

    kill(otherAnimal) {
        otherAnimal.die();
    }
}

class Bird_EC6 extends Animal_EC6 {
    constructor(name) {
        super(name);
    }

    fly() {
        this.fly = true;
    }
}

class Woodpecker_EC6 extends Bird_EC6 {
    constructor(name) {
        super(name);
    }
}

class Hummingbird_EC6 extends Bird_EC6 {
    constructor(name) {
        super(name);
    }
}

let vitaly6 = new Tiger_EC6('Vitaly');
let fury6 = new Horse_EC6('Fury');
let nemo6 = new Shark_EC6('Nemo');

nemo6.kill(fury6);
nemo6.kill(vitaly6);
nemo6.eat();
nemo6.die();
console.log(nemo6, fury6);