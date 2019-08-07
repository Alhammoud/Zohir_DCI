// Wir möchten das Objekt hier verschicken an ein anderes System

let obj1 = {
    name: 'Klaus',
    age: 40,
    city: 'Berlin',
    street: 'Friedrichstr.',
    number: '10b'
};
console.log('console.log(obj1);');
console.log(obj1);

// Wir müssen erst das Objekt in einen String konvertieren. das machen wir mit JSON.stringify()

// "stringifizieren"

let obj1_JSON = JSON.stringify(obj1);
console.log('console.log(obj1_JSON);');
console.log(obj1_JSON);



let obj2_JSON = '{"name":"sarah","city":"berlin","age":33}';
console.log('console.log(obj2_JSON);');
console.log(obj2_JSON);
let obj2 = JSON.parse(obj2_JSON);
// .parse = aus einem string etwas generieren, z.b. javascript oder HTML
console.log('console.log(obj2);');
console.log(obj2);

let obj3 = [1, 2, '3', 'abc', 10, 'hallo world'];
console.log('console.log(obj3);');
console.log(obj3);

let obj3_JSON = JSON.stringify(obj3);
console.log('console.log(obj3_JSON);');
console.log(obj3_JSON);


//Aufgabe:
//
//Gegeben sei folgendes Objekt:

const fruits = [
    { name: 'apple', color: 'green' },
    { name: 'mango', color: 'yellow' },
    { name: 'apple', color: 'red' }
];

console.log(fruits);

// 1. Füge dem Array eine Frucht hinzu und konvertiere es nach JSON.
let fruits_JSON = JSON.stringify(fruits);
console.log('console.log(fruits_JSON);');
console.log(fruits_JSON);

// 2. Konvertieren es nach JSON.
let fruits_obj = JSON.parse(fruits_JSON);
console.log('console.log(fruits_obj);');
console.log(fruits_obj);