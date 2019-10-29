const mongoose = require('mongoose');

// Schema = mongoose.Schema;

// wie ein table in mysql DB
const user_schema = new mongoose.Schema({
    /* id_user: , id ist automatisch erstellt */
    email: String,
    password: String,
    pages:Array
});

module.exports = mongoose.model('User', user_schema);
// oder
//  module.exports = mongoose.model('users', user_schema);