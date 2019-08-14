// Rest-Operator : 
//wird V.a. in Funktionen angewandt
// in der Parameterliste. Er wird gebraucht, um eine unendliche Anzahl von Parametern als Aray darzustellen

const words = (...args) => {
    // args ist hier als Array sehen
}




// Aufgabe :
//

const multiSum = (...args) => {

    if (args.length < 2) {
        return null;

    } else if (args.length === 2) {

        return args[0] * args[1];
    } else {

        let a = args[0];
        let b = args[1];
        let x = 0;

        for (let j = 2; j < args.length; j++) {
            // x = x + args[j];
            x += args[j];
        }
        return a * b + x;
    }
}

console.log(multiSum(2, 6)); // 12
console.log(multiSum(2, 6, 3)); // 15
console.log(multiSum(2, 6, 3, 1)); // 16
console.log(multiSum(2, 6, 3, 1, 1)); // 17

console.log(multiSum(4)); //null