const fs = require('fs');

console.log('Hallo world FS');



/* var http = require('http');

http.createServer(function (req, res) {

  //Open a file on the server and return its content:
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
 */

// asynchrones Öffnen

fs.readFile('./blabla.txt', 'utf-8', (err, data) => {
    console.log(`
                    Datei fertig geladen:
                    ${data}`);
});

/* const data = fs.readFile('./blabla.txt', 'utf-8'); */

/* , (err, data) => {
    console.log(`
                    Datei fertig geladen:
                    ${data}`);
} */

/* console.log("********************");
console.log(data); */