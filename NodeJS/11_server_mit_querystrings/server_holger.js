const express = require('express');
const app = express();

app.get(`/`, (req,res) => {
    return res.send(`Der Wert von a = ${req.query.a} und der Wert von x = ${req.query.x}`);
});


// TASK:

// 1) Suche Dir 10 real existierende Film-Titel aus dem Internet.
// 2) Speichere diese Filmtitel in einem Array mit 10 Elementen.
// 3) Erstelle eine neue Route /search
// 4) In der Route, werte den Wert von dem Query-Key "q" aus und gib alle Filme
//    aus, die ähnlich wie der Wert von q sind.

//    Beispiel: 

//    q= "ellas"
//    Result: "Good Fellas"

//    Tipp: Vor dem Vergleich konvertiere den Suchbegriff und alle Elemente 
//    im Array nach Lowercase


const filme = ["Rocky", "Rocky II", "Rocky III", "Rocky IV", "Rambo", "Akte X", "Good Fellas", "Halloween", "The Fog", "Shining" ];

app.get('/search', (req,res) => {
    let returnedString = "";
    let toFind = (req.query.q).toLowerCase();
    for (elem of filme) {
        if (elem.toLowerCase().search(toFind) !== -1) {
            returnedString += "'"+elem+"' ";
        }
    } 
    return res.send(returnedString);
})

// OutPut in : http://localhost:3000/search?q
//             'Rocky' 'Rocky II' 'Rocky III' 'Rocky IV' 'Rambo' 'Akte X' 'Good Fellas' 'Halloween' 'The Fog' 'Shining' 

// OutPut in : http://localhost:3000/search?q=oo  => 'Good Fellas' 

app.listen(3000);