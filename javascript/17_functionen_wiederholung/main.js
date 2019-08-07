console.log('17_functionen_wiederholung');




function x() {
    let a = 10;
    let b = 20;
    console.log('a + b = ' + (a + b));
};

x(); //Spätere Ausführung nur mit Namen !!


(function () { // Anonyme Funktion
    let a = 10;
    let b = 20;
    console.log('a + b = ' + (a + b));
})(); // Sofortige Ausführung  möglich


function summe() {
    let a = 10;
    let b = 20;
    //console.log('a + b = '+(a+b));
    return (a + b);
};

let punkte = summe();
console.log('a + b = ' + punkte);

function summe1(a, b) {
    return (a + b);
};

console.log('10 + 20 = ' + summe1(10, 20));


function typeOfArgument(input) {
    return typeof (input);
}

let input1 = 'Zohir';
console.log(` input1= 'Zohir' ` + typeOfArgument(input1));

let input2 = 12213;
console.log(` input2=  12213  ` + typeOfArgument(input2));

let input3 = true;
console.log(` input3= true ` + typeOfArgument(input3));

let person = { name: 'zohir', age: 30 };
console.log(`Der Type von person ist ` + typeOfArgument(person));
console.log(`
                (value(Wert)): von (key:name) von objekt (person) ist ${person['name']}
                (value(Wert)): von (key:age) von objekt (person) ist ${person['age']}
                `  );


let input4 = function () { let x = 3; };
console.log('Der Type von input4 ist ' + typeOfArgument(input4));

let input5 = 'hallo' * 5;
console.log('Der Type von input5 ist ' + typeOfArgument(input5));

let input6 = [1, 2, 3, 4, 5];
console.log('Der Type von input6 ist ' + typeOfArgument(input6));

let y;
console.log('Der Type von y ist ' + typeOfArgument(y));

console.log('Der Type von null ist ' + typeOfArgument(null));

function assignGrade(punkte) {
    switch (true) {
        case (punkte < 50 && punkte > -1):
            console.log('Nicht bestanden');
            break;
        case (punkte >= 50 && punkte <= 60):
            console.log('Ihre Note ist 4');
            break;
        case (punkte >= 61 && punkte <= 80):
            console.log('Ihre Note ist 3');
            break;
        case (punkte >= 81 && punkte <= 90):
            console.log('Ihre Note ist 2');
            break;
        case (punkte >= 91 && punkte <= 98):
            console.log('Ihre Note ist 1');
            break;
        case (punkte === 99):
            console.log('Fast Perfekt');
            break;
        case (punkte === 100):
            console.log('Du hast morgen frei !!');
            break;

        default:
            console.log('falsch punkte ::!!!::')
            break;
    }
}

assignGrade(0);
assignGrade(1);
assignGrade(45);
assignGrade(55);
assignGrade(65);
assignGrade(85);
assignGrade(90);
assignGrade(95);
assignGrade(99);
assignGrade(100);
assignGrade(150);
assignGrade(-1);
assignGrade(-5);
assignGrade('sssss');



function calculatePension(aktulleAlter, rentenAlter, mEinkommen, mProzent) {
    if (aktulleAlter >= rentenAlter) {
        console.log("Erinnere dich mal an früher");
    } else {
        let arbeitsjahre = rentenAlter - aktulleAlter;
        let geldangespartMonatlich = (mEinkommen * mProzent) / 100;
        let geldGespartProJahr = geldangespartMonatlich * 12;
        let geldGespartIngesamt = geldGespartProJahr * arbeitsjahre;

        console.log(`
           Sie haben ${ arbeitsjahre} Jahre gearbeitet 
           und monatlich ${geldangespartMonatlich} € angespart
           und Am Ende bei Eintritt ins Rentenalter ${geldGespartIngesamt} € angespart`);
    }
}

calculatePension(40, 60, 2000, 5);

calculatePension(40, 65, 2000, 5);
calculatePension(65, 65, 2000, 5);



function quadratzahl(zahl) {

    if (typeof zahl != 'number') {
        console.log(`Falsche Eingabe !!!!`) ;
    }else{
        return (zahl*zahl);
        //return Math.pow(zahl,2);
    }

}

console.log(`Die QuadratZahl von 7 ist ${quadratzahl(7)} `);
console.log(`Die QuadratZahl von t ist ${quadratzahl('t')} `);
console.log(`Die QuadratZahl von -2 ist ${quadratzahl(-2)} `);
console.log(`Die QuadratZahl von 77 ist ${quadratzahl(77)} `);
console.log(`Die QuadratZahl von 453535636 ist ${quadratzahl(453535636)} `);
console.log(`Die QuadratZahl von true ist ${quadratzahl(true)} `);
console.log(`Der Type von Infinity ist `+ typeof Infinity);
console.log(`Die QuadratZahl von Infinity ist ${quadratzahl(Infinity)} `);

console.log(`Infinity*14 = `+Infinity*'14');

console.log(Infinity*-Infinity);

function factorialNumber(number){
    let result=0;
    if(number===0){
        return 1;
    }
    console.log('number ist '+(number*factorialNumber(number-1)));
    return number*factorialNumber(number-1);
};

/*for(let i=1;i<=number;i++){
        result=(i*(number-1));

    } */

    console.log('Faktor von 4 =1*2*3*4*5=' +factorialNumber(4));

    console.log(factorialNumber(5));

    let holger = null;
    console.log(holger);
    console.log(typeof null);

    let d = null;
    console.log(typeof d);
    console.log(d);
   console.log( typeof (1===null));