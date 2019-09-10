const fs = require('fs');

// datei lesen
const buffer = fs.readFileSync('./blabla.txt', 'utf-8');

console.log(buffer);

// datei schreiben
const newTxt = 'Sehr geehrte Damen und Herren';

fs.writeFileSync('./new_blabla.txt', newTxt);

// Aaufgabe :
//
// 1. gehe auf http://bytesizematters.com/
// 2. Erstelle einen String von 1024 Bytes
// 3. 1024 Bytes ist 1 KB.
// 4. Erstelle einen Algorithmus, der eine Datei von 512 MB erzeugt
// uns erzeugt damit eine Datei dummy.txt



// oneByte
const oneByte = 'a';
fs.writeFileSync('./oneByte.txt', oneByte);


//oneKiloByte
/* const text_1024Byte = '';*/

let oneKiloByte = '';
for (let i = 0; i < 1000; i++) {
    oneKiloByte += oneByte;
}

fs.writeFileSync('./oneKiloByte.txt', oneKiloByte);


//oneMegaByte

let oneMegaByte = '';
for (let i = 0; i < 1000000; i++) {
    oneMegaByte += oneByte;
}

/* for (let i = 0; i < 1000; i++) {
    oneMegaByte += oneKiloByte;
} */

fs.writeFileSync('./oneMegaByte.txt', oneMegaByte);



/* let dummyText = '';

for (let i = 0; i < 512 * 1024; i++) {
    dummyText += text_1024Byte;
}

fs.writeFileSync('./dummy.txt', dummyText); */



// strings an anhängen
const newStr = '\n\n Ps: Bitte die Rechnung überweisen ..!';

fs.appendFileSync('./blabla.txt', newStr);


// dateien löschen 
try {
    fetch.unlinkSync('./deletme.txt');

} catch {
    console.log('Datei nicht gefunden.!!');
}

// Aufgabe:
//  
// Gegeben sei folgendes JavaScript-Array:

const users = [{
        id: 1,
        name: 'John',
        email: 'john@gmx.de'
    },
    {
        id: 2,
        name: 'Bob',
        email: 'bob@gmail.com'
    },
    {
        id: 3,
        name: 'Sarah',
        email: 'sarah@hotmail.de'
    }
]

// 1. Finde einen Weg , dieses Array in einer Datei zu speichern.
//    Nenne die Datei users.json
// 2. Speichere die Datei auch als CSV ab -> users.csv


// 1.
const usersJSON = JSON.stringify(users);

// console.log(usersJSON);

fs.writeFileSync('./usersJSON.json', usersJSON);
//fs.writeFileSync('./usersJSON.json',JSON.stringify(users));


// 2.


/* users = [{
    id: 1,
    name: 'John',
    email: 'john@gmx.de'
},
{
    id: 2,
    name: 'Bob',
    email: 'bob@gmail.com'
},
{
    id: 3,
    name: 'Sarah',
    email: 'sarah@hotmail.de'
}
] */


fs.writeFileSync('./usersCSV.csv', `id,name,email\n`);

for (elem of users) {
    fs.appendFileSync('./usersCSV.csv', `\n${elem.id},${elem.name},${elem.email}\n`);
}