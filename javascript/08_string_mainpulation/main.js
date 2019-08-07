console.log('HAllo world !!--string_mainpulation--');

var aplhabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var alphabetLange = aplhabet.length; //output:26

console.log(alphabetLange);

var str = "Please locate where 'locate' occurs"

var pos = str.indexOf("locate");
console.log(pos);// 7

var lastpos = str.lastIndexOf("locate");
console.log(lastpos);// 21

// wo interessiert es uns genau?
var exactPos = str.indexOf("locate", 15);
console.log(exactPos);//21


//michas Idee
var michasPos = str.indexOf("locate", pos + 1);
console.log(michasPos);//21

//search
var search = str.search("locate");
console.log(search);

// search und indexOf machen das gleich

var str2 = "Apple, Banana, Kiwi";
var res = str2.slice(7, 13);
console.log(res); //Banana
console.log(str2); // bleibt wie er ist 


var negativeRes = str2.slice(-12, -6); //rückwätrs
console.log(negativeRes); // Banan , LIEST VON HINTEN!

var nurEinZahl=str2.slice(7);
console.log(nurEinZahl); //Banana, Kiwi

var negativeRes2 = str2.slice(-2); //rückwätrs
console.log(negativeRes2); // wi


// Substrings
var substring=str2.substr(7,6);
console.log(substring); // Banana