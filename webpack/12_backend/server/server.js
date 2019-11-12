const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors());


app.get('/halloworld', (req, res) => {

    return res.send({
        error: 0,
        message: 'hallo world from server'
    });
})

app.listen(3000); // port for backend server and 8080 port is for frontend 