console.log('58_map_filter')

const array = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
];


// Aufgabe :
//
// Erstelle ein Array doubleArray das die gleiche Länge hat wie array und für jedes Element von Array den doppeltten


const doubleArray1 = [];
for (n of array) {
    doubleArray1.push(n * 2);
}
console.log(doubleArray1)



// mit  map ...

// let doubleArray2 = array.map((n) => {
//     return 2*n
// });

let doubleArray2 = array.map((n) => 2 * n);
console.log(doubleArray2);


// Aufgabe :
//
// Erstelle ein Array evenArray, welches nur aus den geraden Zahlen von array besteht.

let evenArray1 = [];

for (n of array) {
    // if ((n % 2 )=== 0)
    if (!(n % 2))
        evenArray1.push(n);
}

console.log(evenArray1);

// mit filter ...
let evenArray2 = array.filter(n => !(n % 2));
console.log(evenArray2);








////////////////////
const users = [{
        money: 150,
        name: 'paul',
        country: 'germany',
        born: 1995
    },

    {
        money: -50,
        name: 'sarah',
        country: 'uk',
        born: 1990
    },

    {
        money: 20,
        name: 'bob',
        country: 'spain',
        born: 1988
    },

    {
        money: 550,
        name: 'hans',
        country: 'germany',
        born: 1982
    },
    {
        money: 5,
        name: 'julia',
        country: 'germany',
        born: 1972
    },

]

console.log('users');
console.log(users);



// Aufgabe :
//
// 1.Erstelle ein Array 


/* 
let uppercaseUser = users.map(
    (n) => {

        // console.log(n.name);
        // n.name = n.name.toUpperCase();
        // console.log(n.name);


        // console.log(n.country)
        // n.country = n.country.toUpperCase();
        // console.log(n.country)

        return {
            money: n.money,
            name: n.name.toUpperCase(),
            country: n.country.toUpperCase(),
            born: n.born
        }
    }
);

console.log('uppercaseUser');
console.log(uppercaseUser);
console.log('users');
console.log(users);
 */


let uppercaseUser3 = users.map(
    (n) => {
        return {
            ...n,
            name: n.name.toUpperCase(),
            country: n.country.toUpperCase()
        }
    }
);

console.log('uppercaseUser3');
console.log(uppercaseUser3);
console.log('users');
console.log(users);

/* 
const uppercaseUser2 = users.map(
    (n) => {
        n.name = n.name.toUpperCase();
        n.country = n.country.toUpperCase();

        return n;
    }
);

console.log('uppercaseUser2');
console.log(uppercaseUser2);

 */


let germans = users.filter((n) => (n.country === 'GERMANY' && n.money > 10));


console.log('germans');
console.log(germans);

let germans3 = users.filter((n) =>{
    if(n.country === 'GERMANY' && n.money > 10){

    }

});


let germans2 = [];
users.map((n) => {
    if (n.country === 'GERMANY' && n.money > 10) {
        germans2.push(n);
    }
});
console.log('germans2');
console.log(germans2);