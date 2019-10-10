const express = require('express');
const app = express();
const fs = require('fs');
// const fileUpload = require('express-fileupload');
// const randomstring = require('randomstring');

const mysql = require('mysql');


 const connection = mysql.createConnection({
    host: 'localhost',
    user: 'zohir',
    password: 'password',
    database: 'miniblog'
});

app.use(express.json());
// app.use(fileUpload());
app.use('/', express.static('public'));



app.get(`/`, (request, response) => {
    return response.send('Hello World with / .. !')
}); 







app.get('/users', (req, res) => {
    // suchen wir? oder wir geben einfach alle aus

    // let resultArr = [];

    if (req.query.q) {
        // wir suchen 
        let toSerch = '%' + req.query.q + '%';
        const query = `select * from users where name like ? or email like ? or description like ?`;

        connection.query(
            query,
            [toSerch, toSerch, toSerch],
            (err, rows) => {
                // falls ein err definiert wurde, dann mal schauen was schiefgelaufen ist
                // evtl. falsche sql syntax
                if (err) {
                    console.log('Error: ' + err);
                    return res.send({ error: err });
                }


                console.log(' rows');
                console.log(rows);

                /* for (user of rows) {
                    resultArr.push({
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        description: user.description
                    });
                } // end for schleife  
                return res.send(resultArr); */
                return res.send(rows); 
            }
        );
    } else {
        // wir geben einfach alle aus ..
        const query = `select * from users`;
        connection.query(
            query,
            (err, rows) => {
                if (err) {
                    console.log('Error: ' + err);
                    return res.send({ error: err });
                }
               // console.log(rows);
                return res.send(rows);
            }
        );
    }
});


app.get('/userdetail/:id', (req, res) => {

    console.log('req');
    console.log(req);
    console.log('req.params');
    console.log(req.params);

    const query = `select * from users where id = ?`;
    connection.query(
        query,
        [req.params.id],
        (err, rows) => {
            if (err) {
                console.log('Error: ' + err);
                return res.send({ error: err });
            }
            console.log(' rows');
            console.log(rows[0]);

            return res.send(rows[0]);
        });
});

// ************** new user add to mysql database *************

app.post('/users', (req, res) => {
    if(!(req.body.name && req.body.email && req.body.description && req.files.imageUpload)) {
        return res.send({ error: 'name, email, description and imageUpload required' });
    }

    // alle variablen da, weiter gehts ...
    const newFilename = randomstring.generate(10);

    // sampleFile ist referenz auf datei
    let sampleFile = req.files.imageUpload;
  
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(__dirname + '/public/' + newFilename + '.jpg', 
    function(err) {
      if (err)
        return res.status(500).send({ error: err });

        // query3: daten einfügen
        const query3 = `
            insert into users (
                name, 
                email, 
                description,
                profilePic 
            )
            values (?,?,?,?);
        `;

        connection.query(
            query3, [ 
                req.body.name,
                req.body.email,
                req.body.description,
                newFilename + '.jpg'
            ],
            (err, result) => {
                if(err) {
                    console.log('Error: ' + err);
                    return res.send({ error: err });
                }

                 return res.send({ error: 0, newUserId: result.id });
               // return res.send(result[0]);
            });            
        });

    
});    



console.log('Hallo World from Backend.');
app.listen(3000);
