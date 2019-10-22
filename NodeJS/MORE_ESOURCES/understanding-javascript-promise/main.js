/* beginners guide to understanding JavaScript Promises.  */

/* 


JavaScript Promise is one of the must know things for a JavaScript developer. In this tutorial, you’ll learn what are JavaScript Promises, why are they used and how to use JavaScript promise.
 */

 /* 

    What is JavaScript Promise ?
    Why use JavaScript Promise ?
    Chaining JavaScript Promise
    Error handling in JavaScript Promise
    JavaScript Promise All

 */

 /*
    What is JavaScript Promise ?

    From a layman’s point of view, a promise is an assurance that a particular thing will happen. Now a promise can be either kept in future or it may be broken. Similarly, JavaScript promise is an assurance that something may happen in future.

 */

 /* 
 
    From a programming perspective, a JavaScript promise is an object which may produce a result or it may produce an error. To be more specific, the promise will either get resolved with a result or may get rejected with a reason. You can attach a callback to a promise if it has been resolved or if it has been rejected.

    Let’s see an example of how to write a JavaScript promise. Here is how the basic syntax for a JavaScript promise looks like:


    var promise = new Promise(function(resolve, reject){
        if(if everthing works as expected) {
            resolve('all good !!')
        } else {
            reject('Something is not right !!')
        }
    })


 */

/*

        When you create a promise, it will either get resolved or it will get rejected. The JavaScript promise methods takes in a callback function with a resolve and reject parameter. If all goes good the promise will get resolved with a success message else it will get rejected with an appropriate error message 
*/


/* 

When you create a promise, it will either get resolved or it will get rejected. The JavaScript promise methods takes in a callback function with a resolve and reject parameter. If all goes good the promise will get resolved with a success message else it will get rejected with an appropriate error message.

You can attach callbacks to the above created promise to execute certain code when the promise resolves or when the promise gets rejected. Here is how you do it:

        promise.then(handleSuccess, handleError)

        function handleSuccess(response){
            console.log('success ', response)
        }
        function handleError(error){
            console.log('error ', error)
        }
*/

/* As seen in the above code, you can attach callback to a promise using the .then() method. You have added two callbacks to the above promise. One callback to handle the resolve state and other to handle the promise rejection. */


/* 

Why Use JavaScript Promise ?
JavaScript promise looks cool and all, but why do I need to use it ? Can’t I simply use our old JavaScript callbacks ? How are callbacks different from a JavaScript promise ?

In order to understand the above question, you first need to understand what are callbacks in JavaScript. Callbacks in JavaScript means functions attached to certain events or occurrences which executes when the event occurs. A simple example of a JavaScript callback is a click event callback. Here is how it looks :



document.getElementById("btn").addEventListener("click", function(){
    // code to execute when the button btn is clicked
});


*/


/* Let’s write a small code to read a file in Node.js and log its content.


fs = require('fs')
fs.readFile('index.html', 'utf8', function (err,data) {
  if (err) return console.log(err);
  console.log(data);
});

*/


/* 

As seen in the above code, you have used the fs module to read the file content. When the content of the file index.html has been read the callback function will be executed and the data will be logged.

Now once the index.html file has been read I want to read another file called index1.html. So, you need to modify the code as shown :


*/

/* fs = require('fs')
fs.readFile('index.html', 'utf8', function (err, data) {
  if (err) return console.log(err);
  console.log(data);
  fs.readFile('index1.html',' utf8', function(err, data){
    if (err) return console.log(err);
    console.log(data);
  })
}); */

/* 

Once index1.html file has been read I want to read another file called index2.html and similarly index3.html. Here is how the modified code will look :

*/

fs = require('fs')
fs.readFile('index.html', 'utf8', function (err, data) {
    if (err) return console.log(err);
    console.log(data);
    fs.readFile('index1.html',' utf8', function(err, data){
        if (err) return console.log(err);
        console.log(data);
        fs.readFile('index2.html',' utf8', function(err, data){
            if (err) return console.log(err);
            console.log(data);
            fs.readFile('index3.html',' utf8', function(err, data){
                if (err) return console.log(err);
                console.log(data);
            })
        })
    })
});

/* 

The above code looks like a total mess and becomes hard to maintain when the chain continues to grow. The above code that you see with nested callbacks is what is popularly known as callback hell.


*/


/* 

Chaining JavaScript Promise
Let’s have a look at how you can write the same piece of code using JavaScript promise. For re writing the above code using promises, you first need to separate each of the file read operations into separate functions which will return a promise. Here is how the functions look :

*/


/* 

function readFile1(){
    return new Promise(function(resolve, reject){
        fs.readFile('index1.html','utf8', function(err, data){
            if (err) reject(err)
            resolve(data)
        })
    })
}

function readFile2(){
    return new Promise(function(resolve, reject){
        fs.readFile('index2.html','utf8', function(err, data){
            if (err) reject(err)
            resolve(data)
        })
    })
}

function readFile3(){
    return new Promise(function(resolve, reject){
        fs.readFile('index3.html','utf8', function(err, data){      
            if (err) reject(err)
            resolve(data)
        })
    })
}

*/

/* 

Now you can make a call to the first function that you want to execute and chain the rest of the functions accordingly. Here is how it looks :


*/

readFile1()
.then(function(resp){
    console.log(resp);
    return readFile2()
})
.then(function(resp){
    console.log(resp);
    return readFile3()
})
.then(function(resp){
    console.log(resp);
})


/* 

As seen in the above code, you first make a call to the readFile1 function which returns a promise. When that promise gets resolved you make a call to the readFile2 function. Similarly, readFile2 returns a promise and readFile3 is called when the promise returned by readFile2 is resolved. This process of executing one JavaScript promise after the other is called JavaScript promise chaining.

One key thing to note here is that every call to a then returns a promise object except the last one.

 */