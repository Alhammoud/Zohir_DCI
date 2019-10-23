const app = require("express")();
const path = require("path");
require('dotenv').config();
var mongoose = require('mongoose');



const Aqmpoint = require("./Aqmpoint");
mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// view engine setup
app.set("views", path.join(__dirname, "views")) // setting views directory for views.

app.set("view engine", "hbs") // setting view engine as handlebars


app.get("/", async (req, res) => {

    let aqmpoints = await Aqmpoint.find();
    res.render("index", {
        people: aqmpoints
    }); // passing list of people to our index.hbs file


});


app.listen(3000);