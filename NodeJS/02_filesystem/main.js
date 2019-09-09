const fs = require('fs');

console.log('Hallo world FS');


// asynchrones Öffnen
fs.readFileSync('./blabla.txt', 'utf-8', (err, data) => {
    consloe.log(`
                    Datei fertig geladen:
                    ${data}`)
});