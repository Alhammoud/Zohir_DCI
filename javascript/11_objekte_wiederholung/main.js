console.log('HAllo world !!--objekte_wiederholung--');



var person = {
    //key    : value
    name: 'peter',
    alter: 23,
    beruf: 'Hatzer',
    aendereBeru: function (neuerBeruf) {
        this.beruf = neuerBeruf;
    },
    print: function () {
        console.log(`
        name: ${this.name}
        alter: ${this.alter}
        beruf: ${this.beruf}
        `)
    }
};

console.log(person);

person.aendereBeru("Web Developer");
console.log(person.beruf);

console.log(person);

//person.toSting();

person.print();



var personX = {
    firstname: "Noor",
    lastname: "Moon",
    age: 31,
    residence: 10,
    nationality: "Syrisch",
    currentProfession: "Teacher",
    currentSalay: 2000,
    changeNationality: function (newNationality) {
        if (this.residence >= 7) {
            this.nationality = newNationality;
        }
    }

};

console.log(personX);
personX.changeNationality("Deutsche");
console.log(personX);




var person1 = {
    firstname: "Peter1",
    lastname: "Peter1",
    bankAccount: 2000,
    currentResidence: "Greece",
    countryCurrentForoneDollar1: 5,
    neuBankAccount: 0,


    convertCurrency: function () {
        this.neuBankAccount = this.bankAccount * this.countryCurrentForoneDollar1;
        console.log(`The bank account of ${this.firstname} ${this.lastname} is ${this.bankAccount} in his country's money.`);

    }
};

var person2 = {
    firstname: "Peter2",
    lastname: "Peter2",
    bankAccount: 3000,
    currentResidence: "Switzerland",
    countryCurrentForoneDollar2: 10,
    neuBankAccount: 0,

    convertCurrency: function () {
        this.neuBankAccount = this.bankAccount * this.countryCurrentForoneDollar2;
        console.log(`The bank account of ${this.firstname} ${this.lastname} is ${this.bankAccount} in his country's money.`);
    }
};

var person3 = {
    firstname: "Peter3",
    lastname: "Peter3",
    bankAccount: 4000,
    currentResidence: "Australia",
    countryCurrentForoneDollar3: 15,
    neuBankAccount: 0,

    convertCurrency: function () {
        this.neuBankAccountfunction = this.bankAccount * this.countryCurrentForoneDollar3;
        console.log(`The bank account of ${this.firstname} ${this.lastname} is ${this.bankAccount} in his country's money.`);

    }
};


person1.convertCurrency();
person2.convertCurrency();
person3.convertCurrency();



//----- Constructor -----
let Person = function (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

let jake = new Person('kostas', 'Diakogiannis', 30);
let kim = new Person('Mauro', 'Cifuentes', 40);

console.log(typeof (Person));
console.log(typeof (jake));
console.log(jake);
console.log(`
            The First Name : ${jake.firstName}
            The Last  Name : ${jake.lastName}
            `);

jake.age = 50;
console.log(jake);

let Constructor1 = function (myFirstName, myLastName, myAge) {
    this.firstName = myFirstName;
    this.lastName = myLastName;
    this.age = myAge;
}


let Constructor2 = function (parameter1, parameter2, parameter3) {
    this.key1 = parameter1;
    this.key2 = parameter2;
    this.key3 = parameter3;
}

var objektVomConstructure2 = new Constructor2('wert_1', 'wert_2', 'wert_3');

console.log(objektVomConstructure2);



let Person1 = function (myfirstName, mylastName, myage, mybankAccount, mycurrentResidence, mychange) {

    this.firstName = myfirstName;
    this.lastName = mylastName;
    this.age = myage;
    this.bankAccount = mybankAccount;
    this.currentResidence = mycurrentResidence;
    this.change = mychange;


    this.convertCurrency = function () {
        this.neubankAccount = this.bankAccount * this.change;
        console.log(`
                    The bank account of ${this.firstName} ${this.lastName} is ${this.neubankAccount} in his country's money.
                    `);
    }
};

let schweizer = new Person1('kostas', 'Diakogiannis', 30, 2500, 'Deutschland', 10);

console.log(schweizer);
schweizer.convertCurrency();

console.log(schweizer.neubankAccount);
console.log(schweizer.bankAccount);

console.log('The type of varibel schweizer is ' + typeof (schweizer));
console.log('The type of varibel Person1 is ' + typeof (Person1));



// 1.Aufgabe: Bitte gebt all Properties, die eure Objekte z.B. Schweizer besitzen auf der console aus.
//Tipp: Benutze die for(.. in .. )schleife.

for (prop in schweizer) {
    console.log(prop);
    /*
     firstName
     lastName
     age
     bankAccount
     currentResidence
     change
     convertCurrency
     neubankAccount
      */
}

//2. Aufgabe: Jetzt interessieren uns auch die Werte. Wie können wir diese ebenfalls auf der Console 
// auseben ? so soll es ausgeben werden: key:value.

for (prop in schweizer) {

    //console.log(prop + " : " + schweizer[prop]);
    console.log(`${prop}  :  ${schweizer[prop]}`);
    /*
            OUTPUT:
        firstName  :  kostas
        lastName  :  Diakogiannis
        age  :  30
        bankAccount  :  2500
        currentResidence  :  Deutschland
        change  :  10
        convertCurrency  :  function () {
                this.neubankAccount = this.bankAccount * this.change;
                console.log(`
                            The bank account of ${this.firstName} ${this.lastName} is ${this.neubankAccount} in his country's money.
                            `);
            }
        neubankAccount  :  25000
     */


}


let Student = function(first_Name, last_Name, htmlSkills, cssSkills, jsSkills) {
    this.first_Name = first_Name;
    this.last_Name = last_Name;
    // this.skils = skils;
    this.skills = {
        html: htmlSkills,
        css: cssSkills,
        js: jsSkills
    };
    this.average=function(){

        this.averageSkills = (this.skills.html + this.skills.css + this.skills.js) / 3;
        console.log(`Der Durchschnitt der Skills von ${this.last_Name} ${this.last_Name} ist ${ this.averageSkills}`);
    }
}


var tom = new Student('Tom', 'Toman', 2, 3, 5);
// tom.average()  main.js:243 Uncaught TypeError: tom.average is not a function
var kar = new Student('Kar', 'Kiman', 8, 4,7);
var rone = new Student('Rone', 'Hals', 2, 3, 5);

tom.average();
kar.average();