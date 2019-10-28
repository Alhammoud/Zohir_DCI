const express = require(`express`);
const session = require('express-session');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'zohir',
    password: 'password',
    database: 'authdb'
});

if (!connection) {
    console.log("Verbindung zur DB konnte nicht hergestellt werden - Exit.");
    process.exit(0);
}

// gibt jedem HTTP-packet eine cookie-id in den header rein.

app.use(session({
    secret: 'mySecretKey',
    resave: true,
    saveUninitialized: true
}));


app.get('/login_jan', (req, res) => {

    const sql = `select * from users where email = ? and password = ?`;

    connection.query(
        sql,
        [req.query.email, req.query.password],
        (err, rows) => {
            if (err) {
                console.log('Error: ' + err);
                return res.send({
                    error: 'db error' + err
                });
            }

            if (rows.length > 0) {
                // session wird erzeugt
                req.session.user = req.query.email;
                return res.send({
                    message: 'login successful'
                });
            }

            return res.send({
                error: 'login not found'
            });

        }); // end callback function
});

app.get('/login_zohir', (req, res) => {

    /* `SELECT * FROM users WHERE email = 'ralf@gmail.com' and password = ralfpw` */
    const sql = `SELECT * FROM users WHERE email = ? and password = ?`

    /* var email = req.body.email;  falsch*/
    var email = req.query.email;
    var password = req.query.password;

    connection.query(
        sql,
        [email, password],
        (error, results) => {
            if (error) {

                // console.log("error ocurred",error);
                res.send({
                    "code": 400,
                    "failed": "error ocurred"
                })
            } else {
                // console.log('The solution is: ', results);
                if (results.length > 0) {
                    // session wird erzeugt
                    req.session.user = req.query.email;

                    if (results[0].password == password) {
                        res.send({
                            "code": 200,
                            "success": "login sucessfull"
                        });
                    } else {
                        res.send({
                            "code": 204,
                            "success": "Email and password does not match"
                        });
                    }
                } else {
                    res.send({
                        "code": 204,
                        "success": "Email does not exits"
                    });
                }
            }
        }
    );
});

app.get('/content', (req, res) => {

    /* http://localhost:3000/content */
    /*  kein cookie => kein session */
    /* if(req.session.user && req.session.user==='zohir') */

    /* Aufgabe : 4. Erweitere Dein Authentication-server so, dass sich alle Nutzer einloggen können und dass jeder Nutzer außer "ralf" auf "/content" zugreifen kann. Alle dürfen auf "/private" zugreifen. */
    if(req.session.user !== 'ralf@gmail.com') {
        return res.send('Secret area!');
    }

    return res.send('Unauthorized');
   /*  if (req.session.user) {

        return res.send('THis is the secret area. !!')
    } else {
        return res.send('Unauthorized')
    }
 */
});


// middleware ,die vor den requests /content2 und /privateProfile ausgeführt wird
const auth = (req, res, next) => {
    if (!req.session.user) {
        return res.send('Unauthorized');
    }
    // next() leitet den request weiter an die nächste 
    // callback-funktion

    next();
}

app.get('/content2', auth, (req, res) => {

    // callback function 1
    return res.send('Secret area content2!')

});

app.get('/privateProfile', auth, (req, res) => {

    // callback function 1
    return res.send('Private Profile area !')

});


// aufgabe : schreibe eine Logout_Funktion :

app.get('/logout', auth, (req, res) => {

    delete req.session.user;
    return res.send('logout successfull');

    /* if (req.session.user && req.session.user === 'zohir') {
        req.session.destroy(function (err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/')
                return res.send('LogOut successfull!');
            }
        });
    } */


});


app.listen(3000);