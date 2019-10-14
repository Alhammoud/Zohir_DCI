const mongoose = require('mongoose');



var kittySchema = new mongoose.Schema({
    name: String
  });


  module.exports=mongoose.model('Kitty',kittySchema);

  