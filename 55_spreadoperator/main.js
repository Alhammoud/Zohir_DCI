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

const cube = (l) => {
    let arr = [];
    if (l === 3) {
        for (let i = 0; i <l; i++) {
            for (let j = 0; j <i; j++) {
                for (let k = 0; k <j; k++) {
                    if (k % 2 === 1) {
                        arr[i][j][k] = 0;
                    } else {
                        arr[i][j][k] = 1;
                    }
                }
            }
        }
    }
};

console.log(cube(3));


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
    }
    return arr;
};

console.log(increasingNumbers(4));