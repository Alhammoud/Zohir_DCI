/* In this tutorial, you’ll learn how to get query string parameters in express web app.
 I’ll start from the very scratch and create an express app with a GET route. 
 We’ll make a GET request to the route and see how to get query string parameters. */

 const express = require('express')
 const app = express()
 const port = 3000
 
 app.get('/', (req, res) => res.send('Welcome to Get Query String Parameters In Express!'))
 
 app.listen(port, () => console.log(`App listening on port ${port}!`))
 
/*  You can get the query string parameters using the req object passed into the route. req.query contains all query string parameters which are passed into the route.
 */

/* Let’s create a GET request route into which we’ll be passing some query string parameters. */

/* app.get('/getParameter', (req, res) => {
    
}) */

/* Let’s say you have a route request as shown: */

/* 
// sample route request
http://localhost:3000/getParameter?message=hello_boy
*/

/* To get the query string parameters from the route URL, modify the code as shown: */

app.get('/getParameter', (req, res) => {
    res.json({
        'message':req.query.message
    })
})


/* Save the above changes and restart the web app. 
Point your browser to http://localhost:3000/getParameter?message=hello_boy 
and you will have the query string parameters returned as JSON. */
/* {"message":"hello_boy"} */