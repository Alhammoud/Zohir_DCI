// express einbinden

const express = require('express');

// den webserver initialisieren
const app = express();

//console.log(app);


app.get(`/hallo`,(request,response)=>{
    return response.send('Hello World ..!')
}); 

// Output: in http://localhost/hallo
//Hello World ..!



app.get(`/`, (request, response) => {
    return response.send('Hello World with / .. !')
}); 

// Output: in http://localhost/
// Hello World with / .. !


app.get(`/give_me_html`, (request, response) => {
    return response.send(`
        <html>
            <head></head>
            <body>
                <h1> Hier ,das ist HTML </h1>
            </body>
        </html>
    
    `)
});

// Output: in http://localhost:3000/give_me_html
// Hier ,das ist HTML



app.get(`/zohir`, (request, response) => {
    return response.send('zohirs website')
}); 



// Aufgabe :
// Erstelle eine weitere Route zu einer Resource
// -> /beachbild
//
// 1) Gib eine simple Website zurück mit einem Head und einem Body.
// 2) Innerhalb des Body , erstelle ein Image.
// 3) Für Das src-Attribut, suche ein Beachbild bei Google-Bildeersuche.
//    und kopiere dir dafür die Bildadresse.

app.get(`/beachbild`, (request, response) => {
    return response.send(
        `
        <html>
            <head></head>
            <body>
                <img src='https://cdn.sandals.com/beaches/v12/images/general/destinations/home/beach.jpg'/>
            </body>
        </html>
    
    `
    )
}); 


app.listen(3000);

// Output: in http://localhost:3000/ 
//Cannot GET /

console.log('hallo welt server auf port 3000');