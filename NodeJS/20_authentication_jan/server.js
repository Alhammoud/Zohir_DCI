const express = require(`express`);
const session = require('express-session');
const app = express();

// gibt jedem HTTP-packet eine cookie-id in den header rein.
app.use(session({
    secret: 'mySecretKey',
    resave: true,
    saveUninitialized: true
}));


app.get('/login', (req, res) => {
    if (req.query.username === 'zohir' && req.query.password === 'foobar') {

        req.session.user = 'zohir'; // falls esieinen nutzer gibt, dann ist er auch eingeloggt
        return res.send({
            /* http://localhost:3000/login?username=zohir&password=foobar */
            massage: 'login successfull'
        });
    } else {
        return res.send({
            error: 'login failed'
        })
    }
    /*   return res.send({
          login: true
      }) */

});

app.get('/content', (req, res) => {

    /* http://localhost:3000/content */
    /*  kein cookie => kein session */
    /* if(req.session.user && req.session.user==='zohir') */
    if (req.session.user) {

        return res.send('THis is the secret area. !!')
    } else {
        return res.send('Unauthorized')
    }

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