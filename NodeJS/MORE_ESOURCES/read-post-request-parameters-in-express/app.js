/* 
In the last express tutorial, you learnt how to get query string parameters in express web app. In this tutorial, you’ll learn how to read POST request parameters in express web app.
*/


/* 
Getting Started With Express
Let’s get started by creating an express web app. 
Create a project directory and initialize the node project. 
*/

/* 

mkdir node-app
cd node-app
npm init

*/

/* 
Once the project has been initialized, 
install express framework into the project.
*/
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Welcome to How To Read POST Request Parameters In Express!'));

app.listen(port, () => console.log(`App listening on port ${port}!`));

/* Read POST Request Parameters In Express */

/* Create a route called postParameters into which we’ll post some parameters. */

/* app.post('/postParameter', (req, res) => {
    // code will be here
})
 */
/* You’ll be making use of a middleware called bodyParser 
to make the form data available in the req.body. */

/* 
// install body parser
npm install body-parser --save
*/

/* 
Once you have the body-parser installed, require it in the app.js file.

*/

// require body-parser
const body_parser = require('body-parser')

/* Use the body-parser as middleware in the postParameter route to parse the req object to populate the req.body. */

/*
** Route to DEMO the How to Read Post Request Parameters In Express
** This route returns the parameters posted to the route
*/
app.post('/postParameter', body_parser.urlencoded({ extended: false }), (req, res) => {
    res.json({
        params : req.body
    })
})

/* 
When a POST request comes to the postParameter route, body-parser parses the POST parameters and returns the parameters as response.
*/