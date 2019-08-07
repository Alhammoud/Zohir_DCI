console.log('21_task_vererbung');

var alfred = {
    name: 'Alfred',
    count: 0,
    sayYourName: function () {
        if (this.count === undefined)
            this.count = 0;
        console.log('My name is ' + this.myName);
        this.count++;
    },
    setLastName: function (lastNAme) {
        this.lastNAme = lastNAme;

    }
}



var gonzo = { myName: 'Gonzo' };

alfred.sayYourName.call(gonzo);

alfred.setLastName.call(gonzo, `Gonzales`);

console.log(gonzo);






var john = {
    name: 'john',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay
                + ' Ladies and Gentlemen I am '
                + this.name + ', I am a '
                + this.job + ' and I am '
                + this.age + ' years old.');
        }
        else if (style === 'friendly') {
            console.log('Hey whatsup.'
                + 'I am '
                + this.name + ', I am a '
                + this.job + ' and I am '
                + this.age + ' years old.'
                + 'Have a nice ' + timeOfDay);
        }
    }
};
john.presentation('formal', 'morning');

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};


// john.presentation.call(emily,'friendly','eveninig');
john.presentation.apply(emily, ['friendly', 'eveninig']);



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

var mov1 = new Movie('Casino', null, 'Martin Scorsese');

console.log(mov1);

var buch1 = new Book('Es', null, 'Stephen King');

console.log(buch1);

buch1.sell();

mov1.sell();


console.log(buch1);
console.log(mov1);




/*
   3. Mehr-Stufige Vererbung
1.
Mit Deinem Wissen aus der Aufgabe 2: 
Erstelle Funktions-Konstruktoren zu dem Animal-Diagramm und beachte dabei folgende Regeln:

    1.Jedes Animal hat einen name wenn es erstellt wird.
    2.Jedes Animal hat die Methoden sleep, eat und die (benutze dafür
        Funktionen, z.B. sleep())
    3.Mammals (Säugetiere) und birds haben die Methode breathe.
    4.Fishes haben die Methode swim.
    5.Birds haben die Methode fly.
    6.Tigers und Sharks haben die Methode kill, wobei kill() einen Parameter
        otherAnimal erwartet. kill() ruft die die() Funktion von otherAnimal auf.

2.Erstelle einen Tiger mit name „Vitaly“, einen Shark mit name „Nemo“
und ein Horse mit name „Fury“.
3.Nemo ist hungrig und tötet Fury und Vitaly. Dann isst Nemo.
4.Nemo stirbt.
*/

function Animal(name) {
    this.name = name;
    // this.sleep = false;
    // this.eat = false;
    // this.die = false;
}



Animal.prototype.sleep = function () {
    this.sleep = true;
};

Animal.prototype.eat = function () {
    this.eat = true;
};

Animal.prototype.die = function () {
    this.die = true;
}

function Mammals(name) {
    Animal.call(this, name);
   // this.breathe = false;

}

Mammals.prototype = Object.create(Animal.prototype);


Mammals.prototype.breathe = function () {
    this.breathe = true;
}
Mammals.prototype = Object.create(Animal.prototype);

function Birds(name) {
    Animal.call(this, name);
    // this.breathe=false;

}
Birds.prototype = Object.create(Mammals.prototype);

var bird1 = new Birds('Rabe');

console.log(bird1);

bird1.sleep();
bird1.eat();
bird1.die();
bird1.breathe();

console.log(bird1);