const fs = require('fs');

const items = fs.readdirSync('/home/temp/Desktop/Zohir_DCI/NodeJS/07_folderaccess/test');
for (item of items) {
    console.log(item);
}

console.log(`der Ordner hat ${items.length} direkte files ..`);

let path1 = '/home/temp/Desktop/Zohir_DCI/NodeJS/07_folderaccess/test'; // Datei
let path2 = '/home/temp/Desktop/Zohir_DCI/NodeJS/07_folderaccess/test/hallo'; // Verzeichnis

const infoPath1 = fs.lstatSync(path1);
const infoPath2 = fs.lstatSync(path2);

const sum = (x) => {
    let sum0fX = 0;
    for (let i = 0; i < x; i++) {
        sum0fX = x + sum(x - 1);
    }
    return sum0fX;

}
console.log(sum(5))

// Aufgabe 2:

const fs = require('fs');
const listFiles= path=>{};


