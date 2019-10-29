const express = require(`express`);
const session = require('express-session');
const app = express();

// use mongoDB
const mongoose = require('mongoose');
require('dotenv').config();
const User = require("./User");

const connection = mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

if (!connection) {
    console.log("Verbindung zur DB konnte nicht hergestellt werden - Exit.");
    process.exit(0);
}

User.find({}, (err, results) => {
    if (err) console.log(err);
    console.log(results);
});

// gibt jedem HTTP-packet eine cookie-id in den header rein.

app.use(session({
    secret: 'mySecretKey',
    resave: true,
    saveUninitialized: true
}));


app.get('/login', async (req, res) => {

   /*  im Browser 
   Zumbeispiel :
   http://localhost:3000/login?email=ralf@gmail.com&password=ralfpw

   */

    const result = await User.find({
        email: req.query.email,
        password: req.query.password
    });

    if (result.length > 0) {
        req.session.user = result[0].email; // falls es einen nutzer gibt, dann ist er auch eingeloggt
        req.session.pages = result[0].pages;
        console.log('req.session.pages',req.session.pages);
        return res.send({
            message: 'login successful'
        });
    } else {
        return res.send({
            message: 'login failed'
        });
    }
});

app.get('/content', (req, res) => {

    console.log('req.session.pages',req.session.pages);

    if (req.session.pages.includes('content')) {
        return res.send('Secret area!');
    }

    return res.send('Unauthorized');
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
    if (req.session.pages.includes('privateProfile')) {
        return res.send('Private area!');
    }
    return res.send('Unauthorized');
});

// aufgabe : schreibe eine Logout_Funktion :
app.get('/logout', auth, (req, res) => {
    delete req.session.user;
    return res.send('logout successfull');
});

app.listen(3000);