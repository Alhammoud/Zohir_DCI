var express = require("express");
var mysql = require("mysql");

var pug = require('pug');

var connection = mysql.createConnection({ 
    host: "localhost", 
    user: "zohir", 
    password: "password", 
    database: "myblog2" });
    
    
connection.connect();
    
var app =express();

app.set("view engine", "pug");

app.get("/",function(request,response){

    connection.query( "SELECT * from `posts` ORDER BY date DESC LIMIT 10;", function(err, posts) {
        if (err) throw err;

          var html = "<!DOCTYPE html><html lang='ar' dir='rtl' >" +
                    "<head><title>MyBlog</title></head>" +
                    "<body>" +
                    posts.map(function(post) {
                         return "<li>" + post.title + "</li>" +"<p>"+ post.body + "</p>"; 
                        }).join("") + 
                    "</body> </html>";

                            
        
              
         // compile
         // var fn = pug.compile('string of pug', options);
         //   var html = fn(locals);
 
        // render
        //var html = pug.render("home", { posts: posts });
        
        // renderFile
         // var html = pug.renderFile('home.pug', { posts: posts });           
          //var html = pug.renderFile('home.pug');           


         //response.render("home", { posts: posts });



        response.send(html);
    });



});

app.listen(3000);