// mysql client bibliothek
const mysql = require('mysql');

const express = require('express');
const app = express();

app.use(express.json());
/* express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. 
This method is called as a middleware in your application using the code: app.use(express.json()); */

/* A common use of JSON is to exchange data to/from a web server. */

/* When receiving data from a web server, the data is always a string.
   Parse the data with JSON.parse(), and the data becomes a JavaScript object. */

/* Example - Parsing JSON
   Imagine we received this text from a web server: '{ "name":"John", "age":30, "city":"New York"}'

   Use the JavaScript function JSON.parse() to convert text into a JavaScript object:
   var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');

   Make sure the text is written in JSON format, or else you will get a syntax error.

   

   
*/

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'zohir',
    password: 'password',
    database: 'miniblog'
});



const addUser = (req, res) => {

    console.log(`incoming request, attempt to create user with email: ${req.body.email} and 
    password: ${req.body.password}`);

    if(!(req.body.email && req.body.password)) {
        return res.send({ error: 1002, message: 'email and password required' });
    }

    const query1 = 'SELECT * FROM users WHERE email = ?';/*  queryUserExists */
    const query2 = `insert into users (email,password) values (?,?);`;

    connection.query(
        query1,  [req.body.email],
        (err, rows)=> {
            if(err) {
                console.log('Error: ' + err);
                return;
            }

            if(rows.length > 0) {
                return res.send({ error: 1001, message: 'user already exists' });
            }

            // user existiert noch nicht!

           /*  if (!rows.length) { */
                connection.query(
                    query2, 
                    [req.body.email, req.body.password],
                    (err, rows) => {
                        // falls ein err definiert wurde, dann
                        // mal schauen was schiefgelaufen ist evtl. falsche sql syntax
                        if (err) {
                            console.log('Error: ' + err);
                            return;
                        }

                        console.log('rows : '+rows);

                        return res.send({ error: 0, message: 'user successfully created' });
                    });
           /*  }  */
        });
}



app.get('/users', (req, res) => {

    const query = `select * from users`;

    connection.query(
        query,
        (err, rows) => {
            if (err) {
                console.log('ERROR : ' + err);
                return;
            }
            return res.send(rows)
        }
    )

})


/* 

function(req,res){
    var today = new Date();
  var encryptedString = cryptr.encrypt(req.body.password);
    var users={
        "name":req.body.name,
        "email":req.body.email,
        "password":encryptedString,
        "created_at":today,
        "updated_at":today
    }
    connection.query(
        'INSERT INTO users SET ?'
        ,users,
         function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
}



*/
/* 
app.post('/signup', (req, res) => {
    console.log('req.body.email' + req.body.email);
    console.log('req.body.password' + req.body.password);


    const query = `
    insert into users (
        email,
        password
    )
    values (?,?);`;

    connection.query(
        query, [
            // req.query.email,
            req.body.email,
            // req.query.password
            req.body.password
        ],
        addUser(req.body.email,req.body.password)
 */
/* function (error, results, fields) {
    if (error) {
        res.json({
            status: false,
            message: 'there are some error with query'
        })
    } else {
        res.json({
            status: true,
            data: results,
            message: 'user registered sucessfully'
        })
    }
} */

/*  (err, rows) => {
     // falls ein err definiert wurde, dann
     // mal schauen was schiefgelaufen ist evtl. falsche sql syntax
     if (err) {
         console.log('Error: ' + err);
         return;
     }

     console.log(rows);
 } */
// ); // end query

// }) // end post route

// app.post('/signup', addUser((req.body.email), (req.body.password)))  falsch


app.post('/signup', addUser);

// addUser('max22@gmail.com', 'max22pw');



app.listen(3000);