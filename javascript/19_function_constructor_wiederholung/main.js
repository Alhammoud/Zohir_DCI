console.log('19_function_constructor_wiederholung');

console.log(this);

function Person(name, age, city) {
    // this.name = name;
    // this.age = age;
    // this.city = city;
    console.log('this in Person Funktion' + this);
    console.log(this);
    //     this.marry = function (partner/*frau*/) {
    //         this.partner/*mann*/ = partner/*frau*/;
    // /*frau*/partner.partner = this/*mann*/;

};

Person('jan', 33, 'berlin'); // normaler funktionsaufruf

// javascript syntax : new
let jan = new Person('jan', 33, 'berlin');

//new : weise der variablen jan alle
// des this-keywords



function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
};

//wir brauchen funktionskonstruktoren, um objekte schablonensrtig zu bauen

let user1 = new User('user1', 'user1@gmx.de', 'ddfdf123');
let user2 = new User('user2', 'user2@gmx.de', 'sdad123');
let user3 = new User('user3', 'user3@gmx.de', 'gthgetr123');

console.log(user1, user2, user3);


// methode : ist ein funktion im objekt

function Baum(hoehe, farbe, anzahlAeste) {
    this.hoehe = hoehe;
    this.farbe = farbe;
    this, anzahlAeste = anzahlAeste;
    this.wachsen = function () {
        this.hoehe++;
    }
}
// instanz : ein Exemplar aus einer Menge gleichartiger Dinge
let eiche = new Baum(10, 'weiss', 5);
let birke = new Baum(15, 'braun', 10);
let birke2 = new Baum(16, 'grün', 22);
console.log(eiche, birke);

birke.wachsen();

console.log(eiche, birke);


Baum.neuerAst = function () {
    this.anzahlAeste++;
};

// birke2.neuerAst(); //fehler , gibts nicht 

Baum.prototype.neuerAst = function () {  // existiert 1x im Speicher
    this.anzahlAeste++;

}

birke2.neuerAst();


/*************************************************************** */
function Haus(hoehe, breite, lange, licht, fenster) {
    this.hoehe = hoehe;
    this.breite = breite;
    this.lange = lange;
    this.licht = licht;
    this.fenster = fenster
};

Haus.prototype.lichtAus = function () {

    if (this.licht === true) {
        this.licht = false;
    } else {
        this.licht = true;
    }
};

Haus.prototype.fensterZu = function () {
    if (this.fenster === true) {
        this.fenster = false;
    } else {
        this.fenster = true;
    }
};

let haus1 = new Haus(4, 8, 7, true, false);
let haus2 = new Haus(4, 8, 7, false, false);
let haus3 = new Haus(4, 8, 7, false, false);

console.log(haus1);
console.log(haus2);
console.log(haus3);

console.log(`Das Fenster von haus1 :${haus1.fenster} `);
haus1.fensterZu();
console.log(haus1);
console.log(`Das Fenster von haus1 nach Aufrufen fensterZu() :${haus1.fenster} `);



let emily = {
    name: 'emily',
    age: 30,
    job: 'designer',
    hallo: function () {
        console.log(`
        Hallo, ich bin ${this.name}.Ich bin ${this.age}jahre ailt.Ich arbeite als ${this.job}
        `);
    }
};



let steffen = {
    name: 'steffen',
    age: 42,
    job: 'unternehmer'
}

emily.hallo.call(steffen);


// let boot = {
//     name: 'Anna Nass',
//     große: 30
// }


// let Boot = function (name, große) {
function Boot(name, große) {
    this.name = name;
    this.große = große

}

let boot1 = new Boot('Anna Nass', 30);
let boot2 = new Boot('Nanaa Nass', 40);


boot1.benzinStand = 0;
boot2.benzinStand = 0;

console.log(boot1);
console.log(boot2);


function tanken() {
    this.benzinStand++;
}

// bind

function halloSonne(temperatur) { 
    //normaler funktionsaufruf
    //bind erstelle eine neue funktion namens hallosonne35
    //eine neue funktion names hallosonne35 wird ersteelt,
    //mit der ich hallosonne(35)Aufruf
    console.log(`Hallo, ganz schön warm heute! Es sind ${temperatur}Grad heute !`);
}
halloSonne(32);
let halloSonne35 = halloSonne.bind(this, 35);
halloSonne35();


//Analysiere das object john.
//Erstelle ein neues object sarah das auch einen name,age und job hat.
//Erstelle eine funktion saraStelltSichKumpelhaftVor,die
//auf Basis der Methode intro von john erstellt wird.
//Benutze dafür bind.
let john = {
    name: 'john',
    age: 30,
    job: 'mechanic',
    intro: function (style) {
        if (style === 'formal') {
            console.log(`
             sehr geehrte Damen und Herren,
             ich heiße${this.name}und verweile schon
             ${this.age}jahre auf der Erde.Ich arbeite als
             ${this.job}.Viele Grüße,Ihr ${this.name}`);
        }
        else if (style === 'kumpelhaft') {
            console.log(`Na alles klar? ich bins,der ${this.name}und mitterweile
             habe ich schon ${this.age}jahre auf dem Bruckeln.momentan
             schlage ich mich durch als ${this.job}.Na dann bis später,
             Euer ${this.name}`)
        }

    }
}






////////////////////////.call() Function//////////////////////////////7777
var User_Mark = {
	id: 5,
	name: 'Mark',
	printUserName: function(){
		console.log('The User Name Is ' + this.name);
	}
};

User_Mark.printUserName(); // 'The User Name Is Mark'

// printUserName.call(); //Uncaught ReferenceError: printUserName is not defined

User_Mark.printUserName.call(); // 'The User Name Is' 

// printUserName.call(User_Mark); // Uncaught ReferenceError: printUserName is not defined

var User_Ahmed = {
	id: 9,
	name: 'Ahmed'
};
User_Mark.printUserName.call(User_Ahmed); // 'The User Name Is Ahmed

/********************************
 * 
 */

var User_Markx = {
	name: 'Mark',
	printUserName: function(upperCase){
		let name = this.name;
		if(upperCase === true){
			name = name.toUpperCase();
		}
		console.log('The User Name Is ' + name);
	}
};

var User_Ahmed = {
	name: 'Ahmed'
};

User_Markx.printUserName.call(User_Ahmed, true); // 'The User Name Is AHMED'
