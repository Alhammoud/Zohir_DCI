const mongoose = require('mongoose');

const Kitty = require('./Kitty');

mongoose.connect('mongodb://localhost:27017/mongodb_20', {
    useNewUrlParser: true
});


 const kittyData = [
    {
        name: 'kitty1'
    },
    {
        name: 'kitty2'
    },
    {
        name: 'kitty3'
    },


]; 


/* var arr = [{ name: 'Star Wars' }, { name: 'The Empire Strikes Back' }]; */

Kitty.insertMany(kittyData, function(error, docs) {});