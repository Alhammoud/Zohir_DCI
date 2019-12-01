//Destructuring : wir extrahieren Valuesaud Array oder Objektenlet



let array = [1, 2];
// let array = [1, 2, 3];
// let a = array[0];
// let b = array[1];

let [a, b] = array // neue Syntax
// let [a, , b] = array; // neue Syntax
console.log(a, b);


let obj = {
    p: 5,
    q: 6
};



// let p = obj.p;
// let q = obj.q;

// die variablen-namen müssen gleich den keys sein
let {
    p,
    q
} = obj;
console.log(p, q);

//Aufgabe:
//
//Geben sei das folgende Objekt:

let user = {
    email: 'gonzo@gmail.com',
    id: 102,
    addresses: [{
            street: 'Mainstreet 1',
            postal: 12345,
            city: 'Berlin'
        },
        {
            street: 'Heavenway 5',
            postal: 45678,
            city: 'Hamburg'
        }
    ],
    phone: '49-12345678'
};


// 1) Analysieren das Objekt
// 2) Speichere die Straße der ersten Adresse in einer Variable namens "street".
//     Versuche, dabei NUR Destructuring zu verwenden.


// const street = user.addresses[0];

// console.log(street);


// mit Destructuring :

// let {street}= user.addresses[0];   =   

let street1 = user.addresses[0].street;
console.log(street1);

let street2=user.addresses[1].street;
console.log(street2);

//let {street}= user.addresses[0]
//console.log(street);

let {street} = user.addresses[1];
console.log(street);


