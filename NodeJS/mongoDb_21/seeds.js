//const express = require("express");
const mongoose = require('mongoose');
const Post = require("./Post");
require('dotenv').config();

mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
     useUnifiedTopology: true
});


const postsData = [{
        title: "Post #1",
        body: "Lorem ipsum sit dolor amet. "
    },
    {
        title: "Post #2",
        body: "Ifnum bra deler manet geranto."
    }
];

(async () => {
    if (!process.argv.includes("--delete")) {
        const eP = await Post.find()
        console.log(eP);
        const createdPosts = await Post.insertMany(postsData); // injecting example data in db
    } else {

        await Post.deleteMany();
        console.log("Collection is deleted!");

        /* Post.remove({}, function (err, result) {

            // handle the error if any
            if (err) throw err;

            console.log("Collection is deleted!");

        }); */


    } // end else

    
    /* 
            Last thing for today:
                After your scripts are done, your process is still running and you need to CTRL+C to quit it. That sucks.
                - Find out how to exit a node process (bearbeitet) 


    */
    process.exit();

})()
