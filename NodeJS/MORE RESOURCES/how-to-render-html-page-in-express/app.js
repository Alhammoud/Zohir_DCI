

/* 
In this tutorial,
 you’ll learn how to render HTML page in express web application. 
 I’ll start with creating a simple web app using express framework from very scratch.
  */

  /* Getting Started With Node Project :  */

  /* 
  Let’s start by create a project directory for our node web app. 
  Create a folder called render_html. 
  Navigate to the project directory and initialize the Node project by entering the required details.
  */

  /* 
  
  Once the project has been created and initialized you’ll be having a package.json file inside the project directory.

  */

  /* Render HTML Page In Express  */


  /* 
  Let’s create a new route to render an HTML page. 
  Inside app.js file add the following code:
  
  */

  /*
* Route to render HTML Page
*/
/* app.get('/renderHTML', (req, res) => {
    // render HTML code will be here
}) */


/* 
You’ll be making use of the sendFile method to render HTML page in express.
 Let’s create a file called index.html inside the render_html project directory.
  */

 /* Modify the /renderHTML route as shown to render HTML file index.html. */

 /* app.js file
/*
* Route to render HTML Page
*/
/* app.get('/renderHTML', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, './')
    })
})
 */
/* 
sendFile method takes the file name as parameter with the application root path.
 __dirname gives the current path of the running script. 
 Here is how the app.js file looks : 
*/

const express = require('express')
const app = express()
const path = require('path')
const port = 3000

/*
* Default route for the web app
*/
app.get('/', (req, res) => res.send('Welcome To Code Handbook! \n Default route for the web app'))

/*
* Route to render HTML Page
*/
app.get('/renderHTML', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, './')
    })
})
console.log(path.join(__dirname, './'));
// Output: /home/temp/Desktop/Zohir_DCI/NodeJS/MORE RESOURCES/how-to-render-html-page-in-express/
app.listen(port, () => console.log(`App listening on port ${port}!`))