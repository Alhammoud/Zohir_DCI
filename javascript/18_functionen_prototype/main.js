console.log('18_functionen_prototype');

var obj = {
    dummyKey: 'Dummy Value'
};
console.dir(obj);

// function Person(name, gender, weight) {
//     this.name = name;
//     this.gender = gender;
//     this.weight = weight;

//     this.marry = function (partner/*frau*/) {
//         this.partner/*mann*/ = partner/*frau*/;
// /*frau*/partner.partner = this/*mann*/;

//     };

//     this.divorce = function () {
//         this.partner.partner = null;
//         this.partner = null;

//     };
// };

// var p1 = new Person("p1", "m", 97);
// var p2 = new Person("p2", "f", 57);

// p1.marry(p2); // p1 und p2 werden heiraten 


// console.log(p1.marry == p2.marry); //output : false


function Person(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    //this.marry = function (partner/*frau*/) {
    Person.prototype.marry = function (partner) {
        this.partner/*mann*/ = partner/*frau*/;
/*frau*/partner.partner = this/*mann*/;

    };

    //this.divorce = function () {
    Person.prototype.divorce = function () {
        // this.partner.partner = null;
        // this.partner = null;
        // partner.partner = null;


    };
};

var p1 = new Person("p1", "m", 97);
var p2 = new Person("p2", "f", 57);

// console.log(p1.marry === p2.marry); //output : true

p1.marry(p2); // p1 und p2 werden heiraten 


console.log(p1.marry === p2.marry); //output : true

p1.divorce();
p2.divorce();
console.log(p1.marry === p2.marry); //output : true
