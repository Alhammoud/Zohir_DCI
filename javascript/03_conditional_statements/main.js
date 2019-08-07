var name = 'Peter';
var alter=20;
var verheiratet = true;

console.log(`datentyp von verheiratet:  ${typeof verheiratet} `);
if(verheiratet === true){
    console.log(`${name} ist verheiratet`);
}

verheiratet=false;

if(verheiratet === true){
    console.log(`${name} ist verheiratet`);
}


if(verheiratet === true){
    console.log(`${name} ist verheiratet`);
}
else{
    console.log(`${name} ist nicht verheiratet`);
}


verheiratet='true'; // 'true' ist ein string

console.log(`datentyp von verheiratet:  ${typeof verheiratet} `);
if(verheiratet ===true){ 
    console.log(`${name} ist verheiratet`);
}
else{
    console.log(`${name} ist nicht verheiratet`);
}

console.log("//Aufagbe :.....")
//Aufagbe :
//
//a) schreibe ein Conditional Statement das prüft ob Peter über 30 Jahre alt ist.
//   falls ja; dann schreibe Peter ist über 30, falla nein, dann schreibe Peter ist unter 30 Jahre alt:
//
//b) Peter ändert seinen NAmen in Max. Prüfe ob Peter Max heißt, falls ja,
//   dann schreibe Peter hat seinen Namen geändert. Ansonten ,schreibe nichts.



//a)
if(alter>30){
    console.log("Peter ist über 30 Jahre alt ")
}
else{
    console.log('Peter ist unter 30 Jahre alt ')
}

//b)
name='Max';

if(name==='Max'){
    console.log('Peter hat seinen Namen geändert');
}


//
// Unterschied Zwischen:
// =     : Zweisungs-Operator
// ==    : Vergleiches_Operator; der prüft , ob der Wert von links und rechte gleich ist .
// ===   : Vergleiches_Operator; der prüft , ob der Wert von links und rechte gleich ist und prüft ,ob der Datentyp von links der gleiche ist wir rechts.

var x=5 ;

if(x=7){ // wir setzen x=7 und fragen, ob die Zuweisungs-Operation erfolgreich war 
    console.log('x ist 5');
}
    console.log(`x=${x}`);

var y=10;
if(y==10){
    console.log('y ist 10');
}

if(y == '10'){ // '10' wird nach number Konvertiert und dann mit y vergleichen, weil y datentyp number ist 
    console.log(`y ist '10'`);
}

if(y === '10'){
    console.log(`y ist '10' , also der String`);
}
else{
    console.log(`y ist nicht der String  '10'`);
}

if (y===10){ // erst werden die datentypen geprüft, dann die Werte
    console.log(`y ist 10, also die Zahl`)
}

// Vergleichsoperator ein bisschen genauer

if(alter > 30){
    console.log(`Peter ist älter als 30`); // 31,32, ... unendlich
}

if(alter >= 30){
    console.log(`Peter ist älter als 30 oder genau 30`); // 30,31,32, ... unendlich

}

if(alter <= 30){
    console.log(`Peter ist jünger als 30 oder genau 30`); // 30,29,28,27 ... unendlich

}

if(alter < 30){
    console.log(`Peter ist jünger als 30 `); // 29,28,27 ... unendlich
}


//
//
// Zusammengesetzte Conditional- Statements an

var a = 5;
if(a>=15){
    console.log(' a ist größer oder gleich 15 ');

    if( a<= 40){
        console.log(' a ist kleiner oder gleich 40');
    }
}

a = 249;
if( a >= 15 && a <=40){
    console.log(' a ist größergleich 15 und kleinergleich 40');
}
else if(a >= 200 && a>=250){
    console.log(' a ist größergleich 200 und kleineregleich 250 ')
}


//Augabe:
//
//a) Definiere
//
// Aufgabe
//
// a) Definiere eine neue Variable alterVonKlaus und setze sie auf einen Wert von zwischen -10 und 90.
// b) Definiere ein Conditional-Statement das auf Basis von alterVonKlaus ausgibt, in welchem Lebensabschnitt er sich befinden könnte:
//    Unter 0, Klaus ist noch nicht geboren
//    0-21, Klaus ist noch nicht erwachsen
//    21-65, Klaus ist ein erwachsener Mann
//    65-80, Klaus ist ein Opa
//    über 80, Klaus erlebt seine letzten Tage 



var alterVonklaus = 70;

if(alterVonklaus<0){ // -1, -2, ....
    console.log('Klaus ist noch nicht geboren')
}else if(alterVonklaus>=0 && alterVonklaus<=21){ // 0,1,2,..,21
    console.log('Klaus ist noch nicht erwachsen');
}else if(alterVonklaus>=22 && alterVonklaus<=65){
    console.log('Klaus ist ein erwachsener Mann');
}else if(alterVonklaus>=65 && alterVonklaus<=80){
    console.log('klaus ist ein Opa');
}else{ // alterVonKlaus > 80
    console.log('Klaus erlebt seine letzten Tage')
}


// Oder-Verknüpfungen

var ampelFarbe='schwarz'
if(ampelFarbe==='grün'|| ampelFarbe==='rot'|| ampelFarbe==='gelb'){
    console.log('Ampel funktioniert.!')
}
else{
    console.log('Ampel funktioniert nicht.!')
}

// switch conditional statement

var job='lehrer';

switch(job){
    case 'lehrer':
        console.log('er unterrichtet studenten');
    break;
    case 'taxifahrer':
        console.log('er fährt ein taxi durch berlin');
    break;
    case 'polizist':
        console.log('er kämpft gegen die kriminalität');
    break;
    default:
        console.log('er macht was anderes');
}

console.log((job).toUpperCase);
switch(job){
    case job.toUpperCase():
        console.log('ok');
    break;
     
}
