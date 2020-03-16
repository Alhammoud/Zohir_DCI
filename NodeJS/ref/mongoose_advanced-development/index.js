const express = require("express");
const app = express();
app.use(express.static('assets'));
const mongoose = require("mongoose");
var path = require("path");

const Aqmpoint = require("./models/Aqmpoint");
const User = require("./models/User");
const aqmData = require("./out3.json");

const userData = [{
  email: "admin@example.com"
}, {
  email: "user1@example.com"
}, {
  email: "user2@example.com"
}];

mongoose.connect("mongodb://localhost:27017/aqmpoints", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

app.set("views", path.join(__dirname, "views")); //setting views directory for views.
app.set("view engine", "hbs"); //setting view engine as handlebars

(async () => {
  await Aqmpoint.deleteMany();
  await User.deleteMany();
  const createdUser = await User.insertMany(userData);

  console.log("aqmData[0]");
  console.log(aqmData[0]);

  console.log("createdUser[Math.floor(Math.random() * createdUser.length)]");
  console.log(createdUser[Math.floor(Math.random() * createdUser.length)]);
  // output : { _id: 5db153ffb38425754b0741f8, email: 'user1@example.com', __v: 0 }
  
  console.log("createdUser[Math.floor(Math.random() * createdUser.length)]._id");
  console.log(createdUser[Math.floor(Math.random() * createdUser.length)]._id)

  aqmData.map(p => p.user = createdUser[Math.floor(Math.random() * createdUser.length)]._id)
// = aqmData.map(p => p.user = createdUser[0]._id)
/* 5db150f624f048735a2be6a9 */

  //loop over the js, array from out.json....
  //append an existing user Id from the already saved user in the DB
  // each row from the aqmdata will now have a existing user id appended
  console.log(aqmData[0]);

  /* const createdPoints = */
  await Aqmpoint.insertMany(aqmData);
})()

app.get("/:userId?", async (req, res) => {
  const query = req.params.userId ? {
    user: req.params.userId
  } : {}
  /* let aqmpoints = await Aqmpoint.find(query); */
  let aqmpoints = await Aqmpoint
    .find(query)
    .populate("user");
  let users = await User.find();
  res.render("index", {
    aqmpoints,
    users
  });
});

app.listen(3000);