const express = require('express');
const app = express();

app.use(express.json());

let all_comments = [
    {
        name:'John',
        key:1,
        text:'Hi whatsup !' 
    },
    {
        name:'Bob',
        key:2,
        text:'How are you ?' 
    },
    {
        name:'Mary',
        key:3,
        text:'Good weather today' 
    }
];


app.get('/comments', (req, res) => {
    return res.send( all_comments);
});


app.post('/comments', (req, res) => {

    all_comments.push(req.body)

    return res.send(all_comments);
});

app.delete('/comments/:id', (req, res) => {

    const new_all_Comments = all_comments.filter((element, index) => index !== parseInt(req.params.id));
    
    console.log(new_all_Comments);

    all_comments =[...new_all_Comments];

    return res.send(new_all_Comments);
});

console.log('Server gestartet.');

app.listen(3001); 