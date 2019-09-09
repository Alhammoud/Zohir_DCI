// Aufgabe:

// 1. lade users.csv und konvertiere CSV-format in Javascript-Objekte/JSON

// 2. schreibe eien Funktion csv2json ,welche alle csv.daten (mit beliebter Anzahl von splaten) in JSON konvertiert.



function csv2json(csvfile) {

    var lines = csvfile.toString().split('\n');

    console.log("lines");
    console.log(lines);
    console.log('       ');
    // output:
    /*        lines
             [ 'id, name, email',
             '1, bob, bob@baumeister.com',
             '2, tom, tom@jerry.com',
             '3, maria, maria@gmail.com',
             '4, julia, julia@romeo.com' ] */



    var headers = lines[0].toString().split(",");

    console.log("headers");
    console.log(headers);
    console.log('       ');

    // output:
    /*        headers
            [ 'id', ' name', ' email' ]
*/

    var result = [];

    for (var i = 1; i < lines.length; i++) { // Array von Objekts erstellen

        var currentline = lines[i].split(',');

        console.log("currentline");
        console.log(currentline);
        console.log('       ');

        var obj = {};

        for (var j = 0; j < headers.length; j++) { // Objekts erstellen
            obj[headers[j]] = currentline[j];
            // obj['id'] = '1'
            //obj['name']='bob'
            //obj['email']="bob@baumeister.com"
        }

        result.push(obj);

        console.log("result Array");
        console.log(result);
        console.log('       ');
    }

    console.log('users.JSON');
    return JSON.stringify(result); //JSON Format
}


const fs = require('fs');
let data = fs.readFileSync('./users.csv', 'utf-8');

console.log('typeof data ist :' + typeof data);
console.log('       ');

console.log('users.csv')
console.log(data);

data = data.replace(new RegExp('"', 'g'), '');
data = data.replace(new RegExp(' ', 'g'), '');


console.log('       ');


console.log(csv2json(data));