console.log('Hallo World ..!');

var name0 = 'John';
var name1 = 'Mary';
var name3 = 'Bob';
var name4 = 'Peter';
var name5 = 'Julia';

//             0       1     2     3       4
var namen = ['John', 'Mary', 'Bob', 'Peter', 'Julia'];

console.log(namen);
console.log('The length of Array "namen" is :' + namen.length);

console.log(namen[3]);
console.log(namen[2]);

var mixed = ['Matthias', 45, false];

//Aufgabe
//
//Erstelle Ein Array über Dich selber! Informationen!

var zohir = [
    'ZOhir', // 0
    30,       //1
    'Berlin',  //2
    172,        //3
    true      //4
];


var fruechte = [];

console.log(fruechte);

fruechte.push('Apfel'); // .puch() fügt ein neues Element am Ende des Arrays.
console.log(fruechte);

fruechte.push('Banane');
console.log(fruechte);

fruechte.push('Melone');
fruechte.push('Banane');

console.log(fruechte);

fruechte.unshift('Ananas'); // .unshift() fügt ein neues Element am Anfang des Arrays.
console.log(fruechte);

fruechte.pop();           //'entfernt das letzte Element' delete for the last element 
console.log(fruechte);

fruechte.shift();           //entfernt das erste Element delete for the first element 
console.log(fruechte);


//Aufgabe 
//
//Erstelle ein Array numbers dass die Zahlen 5 bis 10 beinhaltet.
//a) Ändere den Wert des Elements ,it dem index = 1 zu 7.
//b) Füge ein neues Element an das Ende sed Array mit dem Wert 11.
//c) Füge ein neues Element an den Anfang des Arrays mit dem Wert -1.

var numbers = [5, 6, 7, 8, 9, 10];
console.log(numbers);

numbers[1] = 7;
console.log(numbers);

numbers.push(11);
console.log(numbers);

numbers.unshift(-1);
console.log(numbers);


//Aufgabe 
//
//Scheibe eine Funktion shiftPop() die einen Parameter a entgegennimmt.
//a soll ein Array sein. Die Funktion shiftPop() entfernt das erste un das letzte Element von a un gibt das resultierende Array zurück.

function shiftPop(a) {

    a.shift();
    a.pop();

    return a;
};

var x = [10, 20, 30, 40];
console.log(shiftPop(x));

var y = shiftPop([1, 2, 3, 4, 5, 6])
console.log(y);

console.log(shiftPop([1, 2, 3, 4, 5, 6]));

//console.log(shiftPop("ABCDEF")); // TypeError


//printFirst - printet das erste Element eines Array aus

function printFirst(a) {
    console.log(a[0]);
}

printFirst(['hallo', 'welt']);

//Aufgabe: 


console.log([1, 2, 3, 4, 5, 6].reverse()); //The reverse() method is used to reverse an array in place.
//output :[6, 5, 4, 3, 2, 1]

console.log('Hallo World'.split('')); //The split() method is used to split a String object into an array of strings by separating the string into substrings.
//output: ["H", "a", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

console.log([1, 2, 3, 4, 5, 7].join()); //output: 1,2,3,4,5,7

//The join() method is used to join all elements of an array into a string.

console.log([1, 2, 3, 4, 5, 7].join('')); // output: 123457

console.log(["H", "a", "l", "l", "o", " ", "W", "o", "r", "l", "d"].join());//output: H,a,l,l,o, ,W,o,r,l,d

console.log(["H", "a", "l", "l", "o", " ", "W", "o", "r", "l", "d"].join(''));// output: Hallo World

console.log(["H", "a", "l", "l", "o"].reverse().join(''));//output: ollaH


//Aufgabe:
//
//Write a JavaScript function that reverse a number.

/*Sample Data and output: 
Example x = 123456; 
Expected Output: 654321*/

function reverse_a_number(n) {
    console.log("n :" + typeof n);

    n = n + ""; // Convert a number to a string :

    console.log("n :" + typeof n);

    /*  
    
    Note : There are different ways to convert number to string :

            String literal -> str = "" + num + "";

            String constructor -> str = String(num);

            toString -> str = num.toString();

            String Literal simple -> str = "" + num;

    
    */
    return n.split("").reverse().join("");
}
console.log(reverse_a_number(123456));


//------------------- numbers nach strings konvertieren --------------------------------------
console.log("------- numbers nach strings konvertieren ----------------")
var nbr = 11223344;
console.log('the type of nbr is : ' + typeof (nbr));

nbr.toString();
console.log('the type of nbr after .toString() is : ' + typeof (nbr));

nbr = nbr + "";// Convert a number to a string :
console.log('the type of nbr after nbr+"" is : ' + typeof (nbr));

parseInt(nbr);// Convert a string to a number
console.log('the type of nbr after parseInt() is : ' + typeof (nbr));

parseInt(nbr);// Convert a string to a number
String(nbr);
console.log('the type of nbr after String(nbr) is : ' + typeof (nbr));


console.log(nbr.toString().split("").reverse().join(""));
console.log(String(556677).split('').reverse().join(''));
//---------------------------------------------------------


// length - Attribut
var autos = [
    'Audi',
    'BWM',
    'Peugeot',
    'Renault',
    'Maserati'
];

console.log(`
    Das Array autos hat ${autos.length} Elemente
`);
autos.push('Mercedes');
autos.push('porsche');

console.log(`
    Das Array autos hat ${autos.length} Elemente
`);
autos.shift();
autos.shift();
autos.shift();

console.log(`
    Das Array autos hat ${autos.length} Elemente
`);


// splice - index-basiertes Herausschneiden

var f = 'abcdefgh';
f = f.split('');
//      0    1    2    3    4    5    6    7
console.log(f); //output: ["a", "b", "c", "d", "e", "f", "g", "h"]

f.splice(3, 2); //The splice() method is used to remove old elements and add new elements to an array. It changes the content of the array.

/* 
Syntax

splice(startIndex, removeCount, element1,element2,..., elementN)

*/

/*

Parameters

startIndex: Index at which to start changing the array.

removeCount:  An integer indicating the number of old array elements to remove. If removeCount is 0, no elements   are removed. In this case, you should specify at least one new element.

element1,element2,.........,elementN : The elements to add to the array. If you don't specify any elements, splice simply removes elements from the array.



*/

console.log(f); // output: ["a", "b", "c", "f", "g", "h"]

// Aufgabe:
//
//Geben sei folgendes Array n:[2,3,5,7,11,13,17,19,23]
//
//Du weißt nicht, dass das Array 9 Elemente hat.
//
// a) Entferne das erste Element mit splice.
// b) Entferne das letzte Element mit splice.
// c) Entferne nun das 4. und 5. Element mit splice.


// 0 1 2 3 4 5 6  7 8 9
var n = [2, 3, 5, 7, 11, 13, 17, 19, 23];

n.splice(0, 1);
console.log(n);
//output: [3, 5, 7, 11, 13, 17, 19, 23]

n.splice(n.length - 1, 1);
console.log(n);
//output: [3, 5, 7, 11, 13, 17, 19]

n.splice(3, 2);
console.log(n);
//output: [3, 5, 7, 17, 19]

n.splice(0, 0, 88, 99);
console.log(n);
//output: [88, 99, 3, 5, 7, 17, 19]

n.splice(2, 0, 55, 66);
console.log(n);
//output: [88, 99, 55, 66, 3, 5, 7, 17, 19]


// splice Zum adden von elementen

var list = ["foo", "bar"]
list.splice(1, 0, "baz", "qux");
console.log(list);
//output: ["foo", "baz", "qux", "bar"]



// split - erzeugt arrays aus strings:

var gemuese = 'Spinat;Gurke;Zucchini;Lauch;Zwiebel';
var gemueseArray = gemuese.split(';');

console.log(gemueseArray);//output:  ["Spinat", "Gurke", "Zucchini", "Lauch", "Zwiebel"]


//join - erzeugt strings aus Arrays:

var cityArray = ['Berlin', 'Hamburg', 'Muenchen', 'Frankfurt', 'koeln'];

var cityString = cityArray.join(';');
console.log(cityString);
//output: Berlin;Hamburg;Muenchen;Frankfurt;koeln



// delete - element löchen,ohne splice

var countryArray = ['Germany', 'Austria', 'Switzerland', 'lichtenstein'];

delete countryArray[1];
console.log(countryArray);//output:  ["Germany", empty, "Switzerland", "lichtenstein"]


// contcat - mergen von arrays

var array1 = [1, 3, 5];
var array2 = [2, 4, 6];

var array3 = array1.concat(array2);
console.log(array3);//output: [1, 3, 5, 2, 4, 6]


//Aufgabe:
//
//Gegeben seien die beiden folgenden Strings:
// str1 = 'abcdefghijklmnopqrstuvwxyz';
// str2 = '0-9-8-7-6-5-4-3-2-1';
//
// a) Konvertiere Str1 und str2 in jeweils ein Array mit 26 bzw. 10 Elemente.
// b) Erzeuge ein Array numbersLetters das aus den beiden Arrays aus a) erzeugt wird.
// c) Erzeuge einen String finalString aus dem Array aus b)

//Tipp: der leere String ist uch ein String...



var str1 = 'abcdefghijklmnopqrstuvwxyz';
var str2 = '0-9-8-7-6-5-4-3-2-1';

console.log(str1.split(""));
//Output: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

console.log(str2.split('-'));
//output: ["0", "9", "8", "7", "6", "5", "4", "3", "2", "1"]
console.log(str2.split(''));
//output: ["0", "-", "9", "-", "8", "-", "7", "-", "6", "-", "5", "-", "4", "-", "3", "-", "2", "-", "1"]
console.log(str2.split(' '));//output: ["0-9-8-7-6-5-4-3-2-1"]

var numbersLetters = str1.split("").concat(str2.split('-'));
console.log(numbersLetters);
//output: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "9", "8", "7", "6", "5", "4", "3", "2", "1"]

var finalString = numbersLetters.join("-");
console.log(finalString);
//Output: a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z-0-9-8-7-6-5-4-3-2-1


// exkurs: strings nach numbers konvertieren
var numberStr1 = '1';
var number1 = parseInt(numberStr1);
var number2 = number1 + 17;
console.log(number2);

numbersLetters[27] = parseInt(numbersLetters[27]);

var k = 5;
// k soll um 1 erhöht werden
k = k + 1;
// kürzere schreibweise
k += 1;
// kürzeste schreibweisen
k++;
++k;

var j = 10;
// j soll um ein 20 faches größer werden
j = j * 20; // kürzer
j *= 20; // am kürzesten
j /= 20; // division
j -= 20; // minus
j--; // minus 1
--j; // minus 1


// nested arrayas

var nestedArray1 = [
    [
        'Hallo',//0
        'Welt'   //1
    ]
];

console.log(nestedArray1[0][1]);

console.log(nestedArray1);


var nestedArray = [
    [1, 2, 3], //0
    [4, 5, 6],  //1
    [7, 8, 9] //2
];


console.log(nestedArray);

nestedArray[1][1] = 10;

console.log(nestedArray);


//Auffabe:
//Indexvon: 6? 8? 1? [7,8,9]?

console.log(nestedArray[1][2]); //6
console.log(nestedArray[2][1]);//8
console.log(nestedArray[0][0]);//1
console.log(nestedArray[2]); //[7,8,9]


// slice - kopiert ein Array in ein anderes

var testArray1 = [];
console.log(testArray1); //output : []

var testArray2 = [`Kölln`, 17, true, [1, `Berlin`]];
console.log(testArray2);// output :  [`Kölln`, 17, true, [1, `Berlin`]]

var testArray3 = [`Kölln`, `Berlin`, `Hannover`, `Dresden`];
var letztesItemVonTestarray3 = testArray3[testArray3.length - 1];
console.log(letztesItemVonTestarray3); //output : Dresden

var testArray4 = [`Deutschland`, `Frankreich`, `Österreich`];
testArray4.push(`Schweiz`); // fügt dem Array ein neues Item als letztes Item zu
console.log(testArray4); // output :  ["Deutschland", "Frankreich", "Österreich", "Schweiz"]

var testArray5 = [`Milch`, `Joghurt`, `Quark`];
testArray5.pop() // löscht bei dem Array testArray5 das letzte Item
console.log(testArray5); // output :  ["Milch", "Joghurt"]

/*
.unshift(neues_item)

// analog zu dem Befehl .push(neues_item) fügt es einem Array ein Item als erstes Item zu
und ändert dadurch für alle Items des Arrays den Index

.shift()

// analog zu dem Befehl .pop() entfernt es das erste Item eines Arrays und ändert dadurch für alle Items des Arrays den index.

splice()
// verwendet man, um einen Array Index-basiert zu verändern

 */


var testArray6 = [1,2,3,4,5,6,7,8,9,10];
testArray6.splice(3,2);// schneidet ab Index 3 zwei Items heraus.
console.log(testArray6);

// gibt auf der Console [1, 2, 3, 6, 7, 8, 9, 10] aus

var testArray7 = [1,2,3,4,5,6,7,8,9,10];
testArray7.splice(3,1, `a`);
// schneidet ab Index 3 ein Item heraus und setzt an dieser Stelle eine neues Item `a` ein
console.log(testArray7); // gibt auf der Console [1, 2, 3, "a", 5, 6, 7, 8, 9, 10] aus