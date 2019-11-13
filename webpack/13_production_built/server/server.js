const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors());

//
// zum definieren von umgebungsvariable
//
// $ export MODE=PRODUCTION
// $ export MODE=DEVELOPMENT
//
// ist umgepungvaribale MODE = PRODUCTION
// ist umgepungvaribale MODE = DEVELOPMENT

if (process.env.MODE === 'PRODUCTION') {
    console.log('Server wird in PRODUCTION-Modus gestartet');
    app.use('/', express.static(__dirname + '/../dist'));
} else {
    console.log('Server wird in DEVELOPMENT-Modus gestartet');
}

// die api-endpoints sollen im productionserver drin bleiben
//d.h. der productionsserver hostet html/css/js UND api.endpoints

app.get('/halloworld', (req, res) => {

    return res.send({
        error: 0,
        message: 'hallo world from server'
    });
})

app.listen(3000); // port for backend server and 8080 port is for frontend 