// express einbinden

const express = require('express');



const fileUpload = require('express-fileupload');







// den webserver initialisieren
const app = express();

//console.log(app);


// app.use('/')



// default options
app.use(fileUpload());



app.post('/upload', function(req, res) {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
  
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;
  
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('/somewhere/on/your/server/filename.jpg', function(err) {
      if (err)
        return res.status(500).send(err);
  
      res.send('File uploaded!');
    });
  });



console.log('hallo welt server auf port 3000');

app.listen(3000);

// Output: in http://localhost:3000/ 
//Cannot GET /
