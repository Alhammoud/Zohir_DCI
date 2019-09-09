const fs = require('fs');

console.log('Hallo world FS');


// asynchrones Öffnen
const data =fs.readFileSync('./blabla.txt', 'utf-8'/* , (err, data) => {
    consloe - log(`
                    Datei fertig geladen:
                    ${data}`)
} */);

// hier wird gewartet
console.log(data);