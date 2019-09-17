// express einbinden

const express = require('express');

// den webserver initialisieren
const app = express();


app.get(`/`,(request,response)=>{
    return response.send('server mit parametern')
}); 


app.get(`/hallo/:name`,(request,response)=>{
    return response.send(`
        Hi ${request.params.name}
    `);
}); 

// OutPut : auf http://localhost:3000/hallo/zohir :
// Hi zohir


app.listen(3000);

console.log('hallo welt server auf port 3000');
