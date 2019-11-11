const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const randomstring = require('randomstring');
const sendmail = require('./mailer');
const app = express();

app.use('/', express.static('public'));
app.use(express.json());
// gibt jedem HTTP-packet eine cookie-id in den header
// rein
app.use(session({
    secret: 'mySecretKey',
    resave: true,
    saveUninitialized: true
}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'zohir',
    password: 'password',
    database: 'miniblog'
});

if (!connection) {
    console.log('Verbindung zur DB konnte nicht hergestellt werden - Exit.');
    process.exit(0);
}

const addUser = (req, res) => {
    console.log(`
    incoming request, 
    attempt to create user with 
    email: ${req.body.email}
    and 
    password: ${req.body.password}`);

    if (!(req.body.email && req.body.password)) {
        return res.send({
            error: 1002,
            message: 'email and password required'
        });
    }

    const queryUserExists = `select * from users where email = ?`;
    connection.query(
        queryUserExists, [req.body.email],
        (err, rows) => {
            if (err) {
                console.log('Error: ' + err);
                return;
            }

            if (rows.length > 0) {
                return res.send({
                    error: 1001,
                    message: 'user already exists'
                });
            }

            // zeit, dass password zu hashen 
            bcrypt.hash(req.body.password, 10,
                (err, result) => {
                    let hashedPassword = result;

                    // user existiert noch nicht!                    
                    const queryAddUser = `
                        insert into users (email, password, activationcode) values (?,?,?)
                    `;
                    const activationCode = randomstring.generate(20);
                    connection.query(
                        queryAddUser, [
                            req.body.email,
                            hashedPassword,
                            activationCode
                        ],
                        (err, rows) => {
                            if (err) {
                                console.log('Error: ' + err);
                                return;
                            }

                            sendmail(req.body.email, 'Ihre Registrierung bei Miniblog', `
                            Danke für Ihre Registrierung bei Miniblog!
                            Bitte klicken Sie auf folgenden Link :
                            <a href="http://localhost:3000/activate/${activationCode}"> Hier bitte klicken . </a>`);


                            return res.send({
                                error: 0,
                                message: 'user successfully created'
                            });
                        });
                });
        });
}
app.post('/signup',addUser);

const loginUser = (req, res) => {
    const queryUserExists = `select * from users where email = ?`;
    connection.query(
        queryUserExists, [req.body.email],
        (err, rows) => {
            if (err) {
                console.log('Error: ' + err);
                return;
            }

            if (rows.length === 0) {
                return res.send({
                    error: 1001,
                    message: 'user not found'
                });
            }

            const hashedPassword = rows[0].password; // slkdjfljf4jf
            bcrypt.compare(req.body.password, rows[0].password, (err, result) => {

                console.log('req.body.password : ' + req.body.password); //output: req.body.password : tompw
                console.log('rows[0].password  : ' + rows[0].password); // output: rows[0].password  : $2b$10$zFxCrKRLYJG.59Iq7geIse9dFdlMXaFzWP54HzG6mmgmfYXS6qEQK

                console.log('result : ' + result);


                if (err) return res.send({
                    error: 1003,
                    message: 'error comparing passwords'
                });

                if (result) {
                    req.session.user = req.body.email;
                    return res.send({
                        error: 0,
                        message: 'login successful'
                    });
                } else {
                    return res.send({
                        error: 1004,
                        message: 'login failed'
                    });
                }
            });
        });
};
app.post('/login',loginUser );
/* (req, res) => {
    const sql = `select * from users where email = ? and password = ?`;
    connection.query(
        sql, [req.body.email, req.body.password],
        (err, rows) => {
            if (err) {
                console.log('Error: ' + err);
                return res.send({
                    error: 'db error' + err
                });
            }

            if (rows.length > 0) {
                // session wird erzeugt
                req.session.user = req.body.email;
                return res.send({
                    error: 0,
                    message: 'login successful'
                });
            }

            return res.send({
                error: 1000,
                message: 'login not found'
            });
        });
} */



// middleware, die vor den requests /content und /privateProfile
// ausgeführt wird
const auth = (req, res, next) => {
    if (!req.session.user) {
        return res.send('Unauthorized');
    }

    // next leitet den request weiter an die nächste
    // callback-funktion
    next();
}

// Aufgabe: schreibe eine Logout-Funktion!
app.post('/logout', (req, res) => {
    delete req.session.user;
    return res.send({
        error: 0,
        message: 'logout successfull'
    });
});

app.get('/blogposts', (req, res) => {
    const sql = `select * from blogpost`;
    connection.query(
        sql,
        (err, rows) => {
            if (err) {
                console.log('Error: ' + err);
                return res.send({
                    error: 'db error' + err
                });
            }

            return res.send(rows);
        });
})

app.post('/blogpost', auth, (req, res) => {
    if (!(req.body.title && req.body.content)) {
        return res.send({
            error: 'title and content required'
        });
    }

    const sql = `insert into blogpost (created, title, content) values(now(), ?, ?)
    `;
    connection.query(
        sql, [req.body.title, req.body.content],
        (err, result) => {
            if (err) {
                console.log('Error: ' + err);
                return res.send({
                    error: 'db error' + err
                });
            }

            return res.send({
                newInsertId: result.lastInsertId
            });
        });
});



app.get('/activate/:activationcode', (req, res) => {


    console.log(`incoming activation attempt : ${req.params.activationcode}`);


    const query = `
        update users set activated = now() where activationcode = ?
    `;
    connection.query(
        query,
        [req.params.activationcode],
        (err, rows) => {
            console.log('rows :')
            console.log(rows)
            /* output : 
            rows :
                    OkPacket {
                    fieldCount: 0,
                    affectedRows: 0,
                    insertId: 0,
                    serverStatus: 34,
                    warningCount: 0,
                    message: '(Rows matched: 0  Changed: 0  Warnings: 0',
                    protocol41: true,
                    changedRows: 0
                    }

            */
            if (err) {
                console.log('Error: ' + err);
                return;
            }


            if (rows.affectedRows === 0) {
                return res.send({
                    error: 1005,
                    message: 'inalid activation code'
                })
            }

            /* return res.send(rows); */

            return res.send({
                error: 0,
                message: ' user activated ..!'
            })
        });


})

app.listen(3000);