// Aufgabe : 
//
// Erstelle eine Funktion cube mit einem parameter length.
// cube returned ein 3-dimensionales Array der länge n und soll von der Structur her an einen Würfel erinnern.
// jedes Element des Cubes soll abwechselnd eine 0 und eine 1 sein.
// z.B.

//cube(3);

// [
//     [[0,1,0],[1,0,1],[0,1,0]],
//     [[1,0,1],[0,1,0],[1,0,1]],
//     [[0,1,0],[1,0,1],[0,1,0]],
// ]

// const cube = (l) => {
//     let arr = [];
//     if (l === 3) {
//         for (let i = 0; i <l; i++) {
//             for (let j = 0; j <i; j++) {
//                 for (let k = 0; k <j; k++) {
//                     if (k % 2 === 1) {
//                         arr[i][j][k] = 0;
//                     } else {
//                         arr[i][j][k] = 1;
//                     }
//                 }
//             }
//         }
//     }
// };

// console.log(cube(3));


// Aufgabe :
// 
// Erstelle eine Funktion increasingNumbers mit einem parameter n. increasingNumbers erzeugt ein Array mit n Elementen, 
// Zahlen von 0 bis n.


// const increasingNumbers = (n) => {
//     let arr = [];
//     for (let i = 0; i <= n; i++) {
//         arr[i] = i;
//     }
//     return arr;
// };

// console.log(increasingNumbers(4));

const increasingNumbers = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr = [...arr, i]
        //arr.push(i);
    }
    return arr;
};

console.log(increasingNumbers(4));


// spread Operator mit Objekten

let obj1 = {
    x: 1,
    y: 5
}
console.log(obj1);

// obj1 wird direkt verändert
console.log('// obj1 wird direkt verändert');
obj1.x = 10;
console.log(obj1);

let obj2 = obj1;

// obj1 indirekt über die referenz von obj2 verändert
obj2.x = 12;
console.log(obj1);

// obj3 ist ein klon von obj1
let obj3 = { ...obj1 };
obj3.x = 50000;
console.log(obj1);

// obj3 ist ein klon von obj1, mit überschreibung des key-value paares y: 5
let obj4 = { ...obj1, y: 15 };
console.log( obj4 );




