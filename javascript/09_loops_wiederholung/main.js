//Aufgabe
//
// gib den satz: "hallo mein name ist " + deinen namen 5 mal aus.
// gib dabei den aktuellen index + 19 aus.

for (var i = 0; i < 5; i++) {
    console.log(`hallo mein name ist Zohir ${i * 10}`);
};

for (var i = 0; i < 50; i = i + 10) {
    console.log(`hallo mein name ist Zohir ${i}`);
};


// for -schleifen und Arrays
var namen = [
    [
        'Peter1',
        'Hans1',
        'Julia1',
        'Astried1'
    ],
    [
        'Peter2',
        'Hans2',
        'Julia2',
        'Astried2',
        'Tim2']
]


// Aufgabe:
//
// Benutze eine for-schleife, um alle Namen in dem Array nacheinander auszugeben.

for (var i = 0; i < namen[0].length; i++) {
    console.log(namen[0][i]);
}

for (var j = 0; j < namen[1].length; j++) {
    console.log(namen[1][j])
}

//------------------------------

var arrayLength = 10;
var array = [];

// array.push(1);
// array.push(2);
// array.push(3);
// array.push(4);
// array.push(5);
// array.push(6);
// array.push(7);
// array.push(8);
// array.push(9);
// array.push(10);

//Aufgabe:
//
//schreibe die vorgehenden Befehle  als for-schleife.


for (var i = 0; i < arrayLength; i++) {
    //array[i]=i+1;
    array.push(i + 1);
    console.log(array[i].toString());
}

var text = "hallo";

text = text.replace(text[0], text[0].toLocaleUpperCase());
console.log(text);

function uppercase1(str) {
    var string1 = " ";
    for (var i in str) {
        if (str[i] !== str[i].toLocaleUpperCase()) {
            string1 += str[i].toLocaleUpperCase();
        }
    }
    return string1;

}

console.log(uppercase1("zoheer klla öööe oor reez tztu7l zii6i6 "))


//Aufgabe:
//
// Programmiere eine for-schleife, die alle ungeraden Zahlen bis 100 ausgibt.

var ungradenzahlenarray = [];
for (var k = 1; k < 100; k = k + 2) {

    ungradenzahlenarray.push(k);

    // console.log(ungradenzahlenarray[k]);


}

console.log(ungradenzahlenarray);


// Aufgabe 1:

// Gib alle Zahlen zwischen 1 und 100 aus. Gibt als Zusatzinformation an zu jeder
// Zahl an, ob sie durch 7 teilbar ist

// Aufgabe 2 (schwierig):

// Gib alle Primzahlen zwischen 1 und 100 an. Verwende dafür den Befehl mod. Beispiel 7%5=2.
// Überlege, welchen mod es für Primzahlen geben muss (Modulo ist Restzahl, die bei einer Division
// ürbig bleibt.)


//Aufgabe 1:
//
//

for (var r = 1; r < 100; r++) {
    if (r % 7 == 0) {
        console.log(r);
    }
}

//Aufgabe 2:
//
//

for (var h = 2; h < 100; h++) {

    if (h % h === 0) {
        // console.log(h);
    }
}

// function findFactors(nr) {
//     for (var i = 1, res = []; i <= nr; i++) {
//       if (nr % i === 0) {
//         res[res.length] = i;
//       }
//     }
//     return res;
//   }


function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function display(n) {
    var arr = [];
    for (var i = 2; i < n; i += 2) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }
    console.log(arr); // use arr result on your own
}

display(100);



var teilnehmerliste = [
    { gender: 'M', name: ' klaus' },
    { gender: 'F', name: ' maria' },
    { gender: 'F', name: ' petra' },
    { gender: 'M', name: ' peter' },
    { gender: 'M', name: ' sebastian' },
    { gender: 'M', name: ' emil' },
    { gender: 'F', name: ' julia' },
    { gender: 'F', name: ' lisa' },
    { gender: 'M', name: ' klaus' }
];

//Aufgabe:
//
//

var anzahlMaenner = 0, anzahlFrauen = 0;

for (var i = 0; i < teilnehmerliste.length; i++) {
    if (teilnehmerliste[i].gender === 'M') {
        anzahlMaenner++;
    } else if (teilnehmerliste[i].gender === 'F') {
        anzahlFrauen++;
    }

}

console.log(`Die AnzahlMaenner ist ${anzahlMaenner}`);
console.log(`Die FnzahlFrauen ist ${anzahlFrauen}`);



var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(`Alle Elemente in [0,1,2,3]Array  summieren = ${sum}`)  // sum is 6



// Aufgabe:

// gegeben sei folgender String alphabet:

// var alphabet = `abcdefghijklmnopqrstuvwxyz`;

// und die Funktion randomNumber

// function randomNumber(n) {
//    return Math.floor(Math.random() * n)
// }

// .. die eine Zufallszahl zwischen 0 und n zurückgibt.

// 1) Schreibe eine Funktion randomString(stringLength) die einen
// zufälligen String der der Länge stringLength generiert und
// zurückgibt. Verwende als Hilfe die Funktion randomNumber()

// 2) zusätzlich soll randomstring auch Zahlen zwischen 0 und 9
// mit in den zufälligen String numbers = `01234546789`
// Erweitere randomString hierfür.

// 3) Füge noch zufällige Groß und Kleinschreibung dazu.



var alphabet = 'abcdefghijklmnopqrstuvwxyz'
//var alphabet = 'abcdefghijklmnopqrstuvwxyz0987654321'
// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers = numbers.join("");
// alphabet = alphabet+numbers;
// console.log(alphabet);

function randomNumber(n) {
    return Math.floor(Math.random() * n);
};


function randomString(stringlength) {
    var stringRandom = "";
    for (var i = 1; i <= stringlength; i++) {

        stringRandom = stringRandom + alphabet[randomNumber(alphabet.length)];

        // stringRandom = stringRandom + alphabet.charAt(randomNumber(stringlength));
        //stringRandom = stringRandom + alphabet.split(randomNumber(alphabet.length));
        // stringRandom = stringRandom + alphabet[randomNumber(alphabet.length)] + numbers[randomNumber(stringlength)];

       // stringRandom = alphabet[randomNumber(stringlength)].toUpperCase()+stringRandom + alphabet[randomNumber(stringlength)]+ alphabet[randomNumber(stringlength)].toUpperCase();

        // console.log(stringRandom);
    }
    console.log(stringRandom);
    return stringRandom;
}

randomString(1);
randomString(2);
randomString(3);
randomString(5);
randomString(8);
console.log(randomString(10));