const express = require('express');

const app = express();

app.use(express.json());

app.get('/hallo',(req,res) => {
    return res.send({message: ' Hallo World from backend from /hallo route'});
});

app.get('/users',(req,res) => {
    return res.send({message: ' Hallo World from backend from /users route'});
});
app.post('/users', (req,res) => {
    return res.send({...req.body, id:42});
})

app.delete('/users/:id',(req,res) =>{
    return res.send({message: `user with Id ${req.param.id} ... deleted`})
})
console.log('Server gestartet');

app.listen(3001);