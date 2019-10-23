const app = require("express")();
const path = require("path");

// view engine setup
app.set("views", path.join(__dirname, "views")) // setting views directory for views.

console.log("__dirname :");
console.log(__dirname);

app.set("view engine", "hbs") // setting view engine as handlebars


/* Setup a GET route at ‘/’ using, */
// routing setup
app.get("/", (req, res) => {

    let peopleList = getRandomList(); // fetch random list of people's name.
    res.render("index", {
        people: peopleList
    }); // passing list of people to our index.hbs file


});

// add this function to the index.js file

let getRandomList = () => {
    let list = ["ada", "turing", "lovelace", "neumann", "gracehopper"];
    let limit = Math.floor(Math.random() * (list.length - 1 - 0) + 0); // generating random number between 0 & 4

    return list.slice(limit);
};



app.get("/hello", (req, res) => {

    var data = [
        {name: "Alan",
        hometown: "Somewhere, TX",
        kids: [{
            name: "Jimmy",
            age: "12"
        }, {
            name: "Sally",
            age: "4"
        }]}
    ];

    res.render("index", {
        people2: data
    }); // passing list of people to our index.hbs file



    // Would render:
    // <p>Hello, my name is Alan. I am from Somewhere, TX. I have 2 kids:</p>
    // <ul>
    //   <li>Jimmy is 12</li>
    //   <li>Sally is 4</li>
    // </ul>

});

/* Finally, setup port
for our application using, */

app.listen(5000);