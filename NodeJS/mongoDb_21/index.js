//const express = require("express");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongodb_21', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const Post = require("./Post");

const postsData=[
    {
        title: "Post #1",
        body: "Lorem ipsum sit dolor amet. "
    },
    {
        title: "Post #2",
        body: "Ifnum bra deler manet geranto."
    }
];

(async()=>{
    const createdPosts = await Post.insertMany(postsData);
})()