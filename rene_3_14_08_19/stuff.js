const people = [
    // {
    //     name: "Rene",
    //     lastName: "Füchtenkordt",
    //     dateOfBirth: "02/13/1986",
    //     age: function () {
    //         return Math.floor((new Date() - new Date(this.dateOfBirth).getTime()) / 3.15576e+10);
    //     }, //Age Method
    //     fullName: function () {
    //         return this.name + ' ' + this.lastName;
    //     } //fullName Method
    // },
    {
        name: "Rene",
        lastName: "Füchtenkordt",
        dateOfBirth: "02/13/1986",
        age: "?", //Age Method
        fullName: "?" //fullName Method
    },
    {
        name: "Hans-Heinrich",
        lastName: "Klamß",
        dateOfBirth: "07/26/1974",
        age: "?", //Age Method,
        fullName: "?", //fullName Method
    },
    {
        name: "Holger",
        lastName: "Zerbe",
        dateOfBirth: "02/24/1969",
        age: "?", //Age Method,
        fullName: "?", //fullName Method
    },
    {
        name: "Patrick",
        lastName: "Weiss",
        dateOfBirth: "02/25/1980",
        age: "?", //Age Method,
        fullName: "?", //fullName Method
    },
    {
        name: "Zohir",
        lastName: "Alhammoud",
        dateOfBirth: "01/01/1989",
        age: "?", //Age Method
        fullName: "?", //fullName Method
    },
    {
        name: "Almas",
        lastName: "Kanguzhin",
        dateOfBirth: "07/17/1954",
        age: "?", //Age Method
        fullName: "?", //fullName Method
    },
    {
        name: "Björn",
        lastName: "Schmudde",
        dateOfBirth: "07/03/1982",
        age: "?", //Age Method
        fullName: "?", //fullName Method
    }
];


// console.log(people[0].fullName());

// console.log(people[0].age());


// let ageFun = (arr) => {
//     arr.forEach(element => {
//         // arr.age= Math.floor((new Date() - new Date(element.dateOfBirth).getTime()) / 3.15576e+10);
//         return Math.floor((new Date() - new Date(element.dateOfBirth).getTime()) / 3.15576e+10);
//     });
// }

// ageFun(people);

// console.log(ageFun(people));


// let ageSort = people.forEach((person) => {
//     person.age=Math.floor((new Date() - new Date(person.dateOfBirth).getTime()) / 3.15576e+10);
//     console.log(people.sort( (x, y)=> {
//         return x.age - y.age;
//     }))
// })


// console.log(people[0].age)


//




let ageF =(dateOfBirth) => {
  return Math.floor((new Date() - new Date(dateOfBirth).getTime()) / 3.15576e+10);   
}

//Constructor
const Person = function (name, lastName, dateOfBirth) {
    this.name = name;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.fullName = name + " " + lastName;
    this.age = ageF(this.dateOfBirth)
};
const person1 = new Person("Rene", "Klaus", "02/13/1986")
console.log(person1.fullName);
console.log(person1.age);