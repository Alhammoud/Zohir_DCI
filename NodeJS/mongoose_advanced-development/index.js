const express = require("express");
const app = express();
const mongoose = require("mongoose");
var path = require("path");
const Aqmpoint = require("./models/Aqmpoint");
const User = require("./models/User");
const aqmData = require("./out3.json");
//app.use(express.static("express"));
//app.use(express.static("views"));

/* aqmData = [
    {"aqm": {"r3000": 12, "r5000": 23, "noxevent": 3, "r2000": 27, "coevent": 218}, "gps": {"system_time": "2018-03-06 14:26:00.909184", "gps_time": "14:26:03.010000", "latitude": 52.56515266666667, "longitude": 13.409577833333334}},
    {"aqm": {"r3000": 15, "r5000": 27, "noxevent": 181, "r2000": 28, "coevent": 3}, "gps": {"system_time": "2018-03-06 14:26:32.468370", "gps_time": "14:26:32", "latitude": 52.565067166666665, "longitude": 13.409508333333333}},
    {"aqm": {"r3000": 18, "r5000": 28, "noxevent": 133, "r2000": 28, "coevent": 3}, "gps": {"system_time": "2018-03-06 14:27:36.478383", "gps_time": "14:27:36", "latitude": 52.56503716666667, "longitude": 13.409478}},
    {"aqm": {"r3000": 21, "r5000": 29, "noxevent": 111, "r2000": 28, "coevent": 3}, "gps": {"system_time": "2018-03-06 14:28:40.581219", "gps_time": "14:28:40", "latitude": 52.56502966666667, "longitude": 13.409465666666666}},
    {"aqm": {"r3000": 25, "r5000": 37, "noxevent": 99, "r2000": 35, "coevent": 3}, "gps": {"system_time": "2018-03-06 14:29:44.191285", "gps_time": "14:29:44", "latitude": 52.56504616666667, "longitude": 13.409395833333333}},
    {"aqm": {"r3000": 31, "r5000": 42, "noxevent": 3, "r2000": 40, "coevent": 3}, "gps": {"system_time": "2018-03-06 14:31:50.326854", "gps_time": "14:31:50", "latitude": 52.5651325, "longitude": 13.409320666666666}},
    {"aqm": {"r3000": 34, "r5000": 45, "noxevent": 62, "r2000": 43, "coevent": 3}, "gps": {"system_time": "2018-03-06 14:32:58.597262", "gps_time": "14:32:58", "latitude": 52.565209833333334, "longitude": 13.4094395}},
    {"aqm": {"r3000": 38, "r5000": 47, "noxevent": 55, "r2000": 45, "coevent": 3}, "gps": {"system_time": "2018-03-06 14:35:05.284544", "gps_time": "14:35:05", "latitude": 52.565099000000004, "longitude": 13.409380833333334}}
] */

mongoose.connect("mongodb://localhost:27017/aqmpoints", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

//view engine setup
app.set("views", path.join(__dirname, "views")); //setting views directory for views.
app.set("view engine", "hbs"); //setting view engine as handlebars


const userData = [{
  email: "admin@example.com"
}, {
  email: "user@example.com"
}];

(async () => {

  await Aqmpoint.deleteMany();

  // await Aqmpoint.insertMany(aqmData);

  await User.deleteMany();
  const createdUser = await User.insertMany(userData);

  //TODO map over all the aqmData and asign each row a random user id from created user

  aqmData.map(p => p.user = createdUser[Math.floor(Math.random() * createdUser.length)]._id);

  //aqmData.map(p => p.user.id_user = createdUser[Math.floor(Math.random() * createdUser.length)]._id);

  //createdUser[Math.floor(Math.random() * createdUser.length)]


  //TODO save the enriched apqData to DB

  /* const createdPoints =  */
  await Aqmpoint.insertMany(aqmData);



})()




/* app.get("/", async (req, res) => {
  let aqmpoints = await Aqmpoint.find();
  console.log("aqmpoints");
  console.log(aqmpoints);
  let users = await User.find();
  console.log("users");
  console.log(users);

  res.render("index", {
    points: aqmpoints
     aqmpoints,users
  }); //passing list of people to our index.hbs file.
});

 */
app.get("/:userId?", async (req, res) => {
  /* http://localhost:3000/?5db049856f1d95112807960f */
  const query = !!req.params.userId ? {
    user: req.params.userId
  } : {}
  let aqmpoints = await Aqmpoint.find(query);
  let users = await User.find();
  res.render("index", {
    aqmpoints,
    users
  });
});

app.listen(3000);


/* / 3423423525234 => */