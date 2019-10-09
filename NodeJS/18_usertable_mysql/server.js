const express = require('express');
const app = express();
const fs = require('fs');
const fileUpload = require('express-fileupload');
const randomstring = require('randomstring');
app.use(express.json());
// app.use(fileUpload());
app.use('/', express.static('public'));

const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'zohir',
    password: 'password',
    database: 'usertable_mysql'
});


app.get('/users', (req, res) => {

   
    const query1 = `select * from users`;

    connection.query(
        query1,
        (err, rows) => {
            // falls ein err definiert wurde, dann mal schauen was schiefgelaufen ist
            // evtl. falsche sql syntax
            if (err) {
                console.log('Error:' + err);
                return;
            }
            // console.log( rows );
            return res.send(rows);
        }
    );

});


app.get('/userdetail/:id', (req, res) => {



    const query1 = `select * from users`;

    connection.query(
        query1,
        (err, rows) => {
            // falls ein err definiert wurde, dann mal schauen was schiefgelaufen ist
            // evtl. falsche sql syntax
            if (err) {
                console.log('Error:' + err);
                return;
            }
            // console.log( rows );
            return res.send(rows);
        }
    );






    fs.readFile('./users.json', 'utf-8',
        (error, data) => {
            if (error) return res.send({
                error: error
            });

            const usersAll = JSON.parse(data);
            const id = req.params.id; // id auslesen aus dem request

            for (user of usersAll) {
                // falls ein nutzer mit der id == id existiert,
                // gib diesen zurück!
                if (user.id == id) {
                    // wir returnieren hier schon, weil wir unseren
                    // nutzer haben
                    return res.send(user);
                }
            }

            // falls id nicht gefunden wurde, landen wir hier
            return res.send({
                error: 'user with that id not found'
            });
        });
});

/* 
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
    );
});
// app.get('/', (req, res) => {
//     return res.send('Hallo World');
// });

app.post('/users', (req, res) => {
    if (!(req.body.name && req.body.email && req.body.description && req.files.imageUpload)) {
        return res.send({
            error: 'name, email, description and imageUpload required'
        });
    }

    // alle variablen da, weiter gehts ...
    const newUserId = randomstring.generate(10);

    // sampleFile ist referenz auf datei
    let sampleFile = req.files.imageUpload;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(__dirname + '/public/' + newUserId + '.jpg', function (err) {
        if (err)
            return res.status(500).send({
                error: err
            });

        // __dirname = aktueller pfad
        fs.readFile(__dirname + '/users.json', 'utf-8',
            (err, data) => {
                if (err) return res.send({
                    error: 'file couldnt be read'
                });

                // users.json konvertieren nach JS-objekt
                let users = null;
                try {
                    users = JSON.parse(data);
                } catch (e) {
                    return res.send({
                        error: e
                    });
                }

                // neuen nutzer in das array reintun
                users.push({
                    id: newUserId,
                    name: req.body.name,
                    email: req.body.email,
                    description: req.body.description,
                    profilePic: newUserId + '.jpg'
                });

                let usersJSON = null;
                try {
                    usersJSON = JSON.stringify(users);
                } catch (e) {
                    return res.send({
                        error: e
                    });
                }

                fs.writeFile(__dirname + '/users.json', usersJSON, () => {});

                return res.send({
                    error: 0,
                    newUserId: newUserId
                });
            });

    });


}); */

console.log('Hallo World from Backend.');
app.listen(3000);

// Aufgabe 1:
//
// Erweitere die users.json und erstelle für
// jeden User zwei weitere Felder "description"
// und "profilePic".
//
// 1) Für "description": schreibe 2 lustige Sätze
//    über diesen User.
// 2) Für profilePic: Lade ein Profilbild von irgendeinem
//    Menschen aus dem Internet und speichere es in deinem
//    Public-Ordner. Gib profilePic den Namen der Datei.

// Aufgabe 2:
//
// 1) In deinem Backend, erstelle eine Ressource
//    /userdetail/:id, die einen Parameter id erwartet.
// 2) /userdetail soll den Nutzer aus users.json laden, mit
//    der Id = id und ALLE Information zu diesem Nutzer
//    als JSON zurückgeben. Falls die Id nicht gefunden
//    wurde, dann gib folgendes JSON zurück
//    { error: 'user with that id not found' }