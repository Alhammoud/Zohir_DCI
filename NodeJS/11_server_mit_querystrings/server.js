// express einbinden

const express = require('express');

// den webserver initialisieren
const app = express();

app.get(`/`, (req, res) => {

    //return res.send('11_server_mit_querystrings')
    //Output : Browser erwartet etwas von User.


    /* http://localhost:3000/?a=b&x=1 */
    return res.send(`
        der wert von a = ${req.query.a} und der wert von x = ${req.query.x} und der wert von c = ${req.query.c}
    `)
    /* http://localhost:3000/?a=b&x=1&c=5 */
    // Output : der wert von a = b und der wert von x = 1 und der wert von c = 5

    /* http://localhost:3000/?a=b&x=1 */
    // Output : der wert von a = b und der wert von x = 1 und der wert von c = undefined


});


// Aufgabe :
//
// 1) Suche Dir 10 real existierende Film_Titel aus dem Internet.
// 2) Speichere diese FilmTitel in einem Array mit 10 Elementen.
// 3) Erstelle eine neue Route /serch
// 4) In der Route, werte den Wert von dem Query-key "q" aus und gib alle Filme aus, die ähnlich wie der wert von q sind

// Beispiel:
// 
// q = "ellas" :  http://localhost:3000/search?q=ellas
// Result : "Good Fellas".

// q = "oo"        http://localhost:3000/search?q=oo
// Result: ["Good Fellas", "Loopers", "Goonies"]

// Tipp: vor der dem Vergleich, konvertiere den Suchbegriff und alle Elemente im Array nach lowercase.

const arrOfFilmes = ['Good Fellas', 'Loopers', 'Goonies', 'Tarzan', 'Saw', 'Pi', 'Rocky', "Akte X","Rambo", "The Fog"];



app.get('/search', (req, res) => {

    let result = '';
    let toFind = (req.query.q).toLowerCase();
    for (film of arrOfFilmes) {
        if (film.toLowerCase().search(`${toFind}`) !== -1) {
            result += "'" + film + "' ";
        }
    }

    return res.send(result);

});


app.listen(3000);