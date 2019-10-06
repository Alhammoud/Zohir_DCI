const express = require('express');
const app = express();

const fs = require('fs');

// alle dateien ,die im public drin sind ,können von außen über den dateinamen werden
// / -> lädt automatisch index.html
// /main.js -> lädt die datei main.js
// /style.css -> lädt die datei style.css
app.use('/', express.static('public'));



/* const users = [
    { id: 1 ,name: 'Stefan', email:'stefan@abc.net'},
    { id: 2 ,name: 'Lara', email:'lara@gmx.net'},
    { id: 3 ,name: 'Julia', email:'julia@gmail.com'},
    { id: 4 ,name: 'Karsten', email:'karsten@foo.net'},
    { id: 5 ,name: 'Peter', email:'peter@xing.net'}
]; */


app.get('/users', (req, res) => {

    fs.readFile('./users.json', 'utf-8',
        // wenn das laden der datei fertig ist,
        // wird die folgende callback-funktion aus-geführt

        (error, data) => {
            if (error) return res.send({
                error: error
            });
            console.log(' typeof data');
            console.log( typeof data); // Output : string

            console.log('data');
            console.log(data);
            // nur die zusammengefassten Daten herausgeben
             const usersAll = JSON.parse(data); 
             // wir kontieveren data als string von server zu javascript Objekt damit können wir mit ihm bearbeiten.

            console.log("usersAll from  const usersAll = JSON.parse(data);");
            console.log( 'typeof usersAll');
            console.log( typeof usersAll); // Output :javascript Objekt
            console.log('usersAll');
            console.log(usersAll);
            const usersSummary = [];


            for (user of usersAll) {
                usersSummary.push({
                    id: user.id,
                    name: user.name,
                    email: user.email
                });
            }

            // return res.send(data);
            return res.send(usersSummary);
        });

    //return res.send(users);

});


// Output from  : app.get('/users', (req, res)

/* 
[
{
id: 1,
name: "Stefan",
email: "stefan@abc.net"
},
{
id: 2,
name: "Lara",
email: "lara@gmx.net"
},
{
id: 3,
name: "Julia",
email: "julia@gmail.com"
},
{
id: 4,
name: "Karsten",
email: "karsten@foo.net"
},
{
id: 5,
name: "Peter",
email: "peter@xing.net"
},
{
id: 6,
name: "klaus",
email: "klaus @xing.net"
}
]
*/

// demonstration: langes laden synchron 
// effekt: blockiert den server, nutzer 2 
// muss auf nutzer 1 warten
app.get('/longload_synchron', (req, res) => {
    let stop = new Date().getTime();
    while (new Date().getTime() < stop + 10000) {
        ;
    }

    return res.send('daten geladen');
});



// demonstration: langes laden asynchron 
// effekt: blockiert den server NICHT, nutzer 2 
// muss NICHT auf nutzer 1 warten
app.get('/longload_asynchron', (req, res) => {
    setTimeout(
        () => {
            res.send('daten geladen')
        },
        10000
    )
});

/* 
app.get('/users_delay', (req, res) => {
    setTimeout(
        () => {
            fs.readFile('./users.json', 'utf-8',
                (error, data) => {
                    if (error) return res.send({
                        error: error
                    });

                    return res.send(data);
                });
        },
        10000
    ); // end setTimeout() 
});
 
 */



// Aufgabe 2 :
//
// 1) In deinem Backend, erstelle eine Ressource :
//      /userdetail/:id, die einen Parameter :id erwartet.
//
// 2) /userdetail/ soll den Nutzer aus users.json laden, mit der Id = id 
//    und Alle Information zu diesem Nutzer als JSON zurückgeben.
//    Falls die Id nicht gefunden wurde, dann gib folgendes JSON zurück 
//    { error : 'user with that id not found ' }


// 1)
app.get('/userdetail/:id', (req, res) => {

    fs.readFile('./users.json', 'utf-8',
        (error, data) => {

             if (error) return res.send({
                error: error
            }); 

           // 2)
            const usersAll = JSON.parse(data);


            for (user of usersAll) {
                if (user.id == req.params.id) {
                    return res.send(user)
                };
            }

            return res.send({error: 'user with that id not found '});

        }
    );

});




/* app.get('/',(req,res) => {

    return res.send('Hallo World ...!');
})
 */

console.log('Hallo world from Backend...! (server.js)');

app.listen(3000);


// Aufgabe  1 :
//
// Erweitere die users.json und erstelle für jeden User zwei weitere Felder "description" und "profilePic".
//
// 1) Für "description" : schreibe 2 Lustige Sätze über diesen User.
//
// 2) Für  "profilePic" : Lade ein Profilbild von irgendeinem Menschen aus dem Internet und speichere es in deinem Public-Ordner. Gib profilePic den Namen der Datei.