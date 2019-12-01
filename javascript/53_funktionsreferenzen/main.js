const sayHalloWorld = () => {
    console.log('Hallo World');

    // Wenn eine Funktion kein return-Statement hat , dann returned sie undefind

    // return undefined;
}

sayHalloWorld();

// f soll eine Funktionsreferenz sein
const callSommeFunc = (f) => {
    f();
}

callSommeFunc(sayHalloWorld);

// callSommeFunc(sayHalloWorld()); = callSommeFunc(undefined);

// Aufgabe
//
//Rufe die Funktion sayHalloWorld nach 5 sekunden auf. Benutze dafür setTimeout.


// syntax von setTimeout
// setTimeout(function() { your_func(); }, 5000);

setTimeout(sayHalloWorld, 5000);


// Aufgabe :
//
// Erstelle eine Funktion arrayCall die 3 Parameter entd 

const arrayCall = (f1, f2, f3) => {
    let arrayOfFunc = [];
    arrayOfFunc.push(f1, f2, f3);

    // return arrayOfFunc;
    // console.log(arrayOfFunc);

    for (elem of arrayOfFunc) {
        elem();
    }
}


const sum = (x, y) => {

    return x + y;
};

const mul = (x, y) => {

    return x * y;
};

const div = (x, y) => {
    if (x > y) {
        return x / y;
    } else {
        return undefined;
    }

};

arrayCall(sum, mul, div);

console.log(arrayCall(sum(8, 4), mul(8, 4), div(8, 4)));