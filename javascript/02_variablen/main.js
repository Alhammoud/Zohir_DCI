console.log('Hallo Welt');


var hw = 'Hallo Welt aus einer Variable';
console.log(hw);


var name = 'Zohir';
console.log(name);


var zwei=2;
console.log(zwei);

var zweiAlsString ='2';
console.log(zweiAlsString);

var vier=2+2;
console.log(vier);

vier=zwei+5;
console.log(vier);

var name='jan';
var job = 'lehrer';
var alter= 33;

// bei backticks mit ${variablenName}
console.log(`Ich bin ${name}. Ich arbeite als ${job} und bin ${alter}. `);

//bei gänsefüßen mit string-konkatenierung
console.log('Ich bin '+ name + '.Ich arbeite als'+ job + 'und bin' + alter +'Jahre alt ');

var jetzt=2019;
var geburtsJahr=jetzt-alter;
console.log(`Mein Geburtsjahr ist : ${geburtsJahr}`);

var alterMax=30; // variablen-initialisierung
var alterSteffi=alterMax;

//Aufgabe:
//  
//Gib das Alter - 5 Jahre von Max und Steffi auf der Console aus. In einem Text wie folget:
//Max ist x Jahre alt.
//Steffi ist x Jahre alt.

//Lösung 1:
var neuesAlterSteffiMax=alterSteffi-5;
console.log(`Max ist ${neuesAlterSteffiMax} Jahre alt
Steffi ist ${neuesAlterSteffiMax} Jahre alt`) ;

//lösung 2:
console.log(`MAx ist ${alterMax-5} jahre alt
Steffi ist ${alterSteffi-5}Jahre alt `);

//Lösung 3:
console.log('Max ist '+(alterMax-5)+'Jahre alt \n'+ 'Steffi ist '+(alterSteffi-5)+'Jahre alt.');

var doppletestAlterMax=alterMax*2;
console.log(`2faches Alter von Max ist ${doppletestAlterMax}`);


console.log(`10-490=${10-490}`);
console.log(`2.5*7 =${2.5*7 }`);
console.log(`(2+7)*10=${(2+7)*10}`);

//boolesche variablen
var heuteRegnetEs=false;
var heuteSchneitEs=false;
var heuteScheintDieSonne=true;

console.log(`
Heute regnet es: ${heuteRegnetEs}. 
Heute scheint es: ${heuteSchneitEs}.
Heute scheint die Sonne: ${heuteScheintDieSonne}
`);

//camel-case vs lowdash
var windowsSizeWidth = 450;//camel case
var window_size_width = 450;//lowdash


//Aufgabe 2:
//
//Stelle dir einen Baum vor. Überlege dir 5 Variablen zu dem Baum.
//(z.b. anzahlAeste, ...). Verwende diese Variablen in einem Text 
//den Du über  den Baum schreibst.
//Gib den Text mit console.log auf der console aus.

//Lösug :

var baum_Name='Apfel';
var baum_Alt=20;
var baum_hohe=3;
var baum_farbe='grün';
var text_über_baum=`Mein Name ist ${baum_Name} ,Ich bin ${baum_Alt} alt und ${baum_hohe}m hoch und meine Farbe ist ${baum_farbe}`;

console.log(text_über_baum);