console.log('HAllo world !!--loops(schleifen)--');

console.log('HAllo world !!');
console.log('HAllo world !!');
console.log('HAllo world !!');
console.log('HAllo world !!');
console.log('HAllo world !!');
console.log('HAllo world !!');
console.log('HAllo world !!');
console.log('HAllo world !!');
console.log('HAllo world !!');


for (var i = 0; i < 10; i++) {
    console.log(i);
    console.log('HAllo world mit For LOops');

};

var names = [
    'bbbbb', // index(i)=0
    'ccccc', // i=1
    'ddddd', //i=2
    'ffffff'  //i=3
];

for (var i = 0; i < 4; i++) {
    console.log(i + " : " + names[i]);
}

var apple1 = {
    color: 'red',
    size: 'big'
}

var apple2 = {
    color: 'green',
    size: 'small'
}

var apple3 = {
    color: 'blue',
    size: 'medium'
}

var apple4 = {
    color: 'yellow',
    size: 'larg big'
}

var apples = [
    apple1,
    apple2,
    apple3,
    apple4
]

for (var i = 0; i < apples.length; i++) {
    console.log(" Die Größe von apple" + (i + 1) + ": " + apples[i].size);
}


//Aufgabe:
//
//kreiert eine function numArray



function numArray(a, b) {
    if (a > b || a < 0 || b < 0) {
        return console.log(false);
    } else {
        console.log(`Die alle Zahlen zwischen ${b} und ${a} sind: `);
        var xArray = [];
        // for (var i = a; i <= b; i++) {
        //     xArray.push(i);
        // }

        for (var j = 0; j < (b - a + 1); j++) {
            xArray[j] = Math.floor(j + a);
        }
        console.log(xArray);
    }
}

numArray(8, 6);

numArray(12, 16);

numArray(-8, -6);

numArray(-8, -16);

numArray(12.5, 16.5);


var n = 6;
var stars = "";
for (var i = 0; i < n; i++) {
    stars += "*";
    console.log(stars);
}

var stars2 = "";
var zeile = 6;
var spalte = 5;
for (var k = 0; k <= zeile; k++) {
    for (var j = 0; j <= spalte; j++) {
        if (k == j) {
            stars2 += "*";
            console.log(stars2);

        }

    }

}


for (var stars = '*'; stars.length <= 6; stars += '*') {
    console.log(stars);
}

var stars3 = "";
for (var i = 0; i <= 6; i++) {
    stars3 = "";
    for (var j = 0; j < i; j++) {
        stars3 += "*";
    }
    console.log(stars3);
}


var numbers = [3, 6, 10, 3, 6, 10];
console.log('numbers hat die Länge von ' + numbers.length);

numbers.push(130);
numbers.push(-1);

console.log('numbers nochmal hat die Länge von ' + numbers.length);

//Schreibt eine Schleife die alle Nummern eines Arrays ausgibt
// eine Zahl pro Zeile


for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    //console.log(typeof(numbers[i].toString()));
}

console.log('-------------------------------------')

for (var i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}


//Aufgabe: 
//
// gebt die zahlen mit einer while SChleife aus 
console.log('Aufgabe: gebt die zahlen mit einer while SChleife aus ');
//nutzt dazu numbers.length

var numbers4 = [3, 6, 10, 12, 15, -1];
var m = 0;
while (m < numbers4.length) {
    console.log(numbers4[m]);
    m++;
}



var numbers = [13, 3, 10, 12, 15, -1];
console.log(numbers);

/*do {
    var caseFound = false;
    for (var i = 0; i < numbers.length; i++) {
        console.log(i);
        if (numbers[i] > numbers[i + 1]) {
            caseFound = true;
            for (var j = 0; j < numbers.length; j++) {
                if (numbers[j] > numbers[j + 1]) {
                    numbers[j + 1] = numbers[j];
                }
            }

        }
        console.log(numbers);
    }

} while (caseFound);*/

/*
var samllerNumber = numbers[i+1];
numbers[i+1]=numbers[i];
numbers[i]=samllerNumber; */

/*
for (var i = 0; i < numbers.length; i++) {
    console.log(i);
    if (numbers[i] > numbers[i + 1]) {
        caseFound = true;
        for (var j = 0; j < numbers.length; j++) {
            if (numbers[j] > numbers[j + 1]) {
                numbers[j + 1] = numbers[j];
            }
        }

    }
    console.log(numbers);
} */