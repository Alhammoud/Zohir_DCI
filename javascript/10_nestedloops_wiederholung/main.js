

console.log("hallo world --- Nested loops ----");

// nested = verschachtelt
// loops in looops

for (var i = 0; i < 10; i++) {
    console.log(`i : ${i}`);
    for (var j = 0; j < 3; j++) {
        console.log(`   j : ${j}`);
    }
};

//Aufgabe :
//
// Schreibe eine verschachtelte For-schleife, die folgenden Output generiert:

// *
// **
// ***
// ****
// *****
// ******

var stern = "";
for (var i = 0; i < 7; i++) {
    for (var j = i; j <= i; j++) {
        stern = stern + "*";
        //console.log(stern);
    }
    console.log(stern);

};

//console.log(stern);


// Aufgabe:
// ~~~~~~~~

// Erstelle eine Funktion numberTable(), die zwei Parameter entgegennimmt:
// rows und columns. (Also Anzahl Zeilen und Spalten)

// 1. numberTable(rows, columns) soll ein Array mit der Länge von rows zurück-
//    geben. Jedes Element dieses Arrays soll wieder ein eigenes Array mit der Länge
//    columns sein. Jedes Element dieses Arrays soll eine 0 sein.

// Beispiel:
// numberTable(3,4) soll folgendes verschachteltes Array zurückgeben:

// [ [0,0,0,0], [0,0,0,0], [0,0,0,0] ]

// 2. Erweitere die Funktion numberTable so, dass anstatt Nullen in jedem
//    Unter-Array aufsteigende Zahlen sind von 1 bis columns.

// Beispiel:
// numberTable(3,4) soll folgendes verschachteltes Array zurückgeben:

// [ [1,2,3,4], [1,2,3,4], [1,2,3,4] ]

// 3. Erweitere die Funktion numberTable nun so, dass es folgendes
//    verschachteltes Array zurückgibt:

// [ [1,2,3,4], [5,6,7,8], [9,10,11,12] ]


function numberTable(rows, columns) {
    var arrayx = []; //rows
    var numberinArray = 0;
    for (var i = 0; i < rows; i++) {
        var arrayy = [];  //columns
        for (var j = 0; j < columns; j++) {
            arrayy[j] = 0; // Ertste Aufgabe
            // arrayy[j]=j+1; // zweite Aufgabe
            // numberinArray++;
            // arrayy[j] = numberinArray;  // driete Aufgabe

        };
        arrayx[i] = arrayy;
    }
    return arrayx;
}


console.log(numberTable(3, 4));



function numberTable2(rows, columns) {
    var arrayxy = []; 
    for (var i = 0; i < rows; i++) {
        arrayxy[i] = [];
        for (var j = 0; j < columns; j++) {
           // arrayxy[i][j] = 0;
            arrayxy[i][j] = i*rows+i+j+1;
            console.log(arrayxy.toString());
        };
    }
    return arrayxy;
}


console.log(numberTable2(4, 5));
