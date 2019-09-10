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