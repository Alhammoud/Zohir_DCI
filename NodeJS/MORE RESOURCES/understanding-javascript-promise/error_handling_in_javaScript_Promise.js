/* 

There are two ways to handle a promise rejection. Let’s have a look at how you typically reject a promise. */


function doPromiseStuff() {
    return new Promise(function (resolve, reject) {
        reject('promise rejected')
    })
}

doPromiseStuff()
    .then(function (response) {
        console.log('response is ', response)
    }, function (error) {
        console.log('error is ', error);
    })

/* 

As seen in the above code, when the doPromiseStuff promise gets rejected you can handle the rejection using the second parameter of the .then callback.

Now let’s say you have a couple of more promises chained along with the existing promise. To handle promise rejection you will have to write down the .then promise rejection second parameter for each promise. So, a better way to handle rejection when dealing with promise chaining is using the .catch method of JavaScript promise.


*/


/* Here is an example of promise chaining with .catch method. */

function getPromiseResolve() {
    return new Promise(function (resolve, reject) {
        resolve('promise resolved')
    })
}

function getPromiseRejected() {
    return new Promise(function (resolve, reject) {
        reject('promise rejected')
    })
}

getPromiseResolve()
    .then(function (res) {
        return getPromiseRejected()
    })
    .then(function (res) {
        console.log('response is ', res);
    })
    .catch(function (error) {
        console.log('error is ', error);
    })

/* 
    You have attached a catch handler to the JavaScript promise chain to handle the promise rejection. When the first promise gets resolved, you called the second promise which returns a rejected promise which is handled in the catch block. Similarly, any promise rejection will be handled in the catch block.

Let’s say you have a number of JavaScript promises chained. You get an error then how will you identify from line the error is throwing up ?

 */

 /* One nice way to handle this is to reject with a new JavaScript error. Have a look a the modified code:
 
 */

function getPromiseRejected(){
    return new Promise(function(resolve, reject){
        reject(new Error('promise rejected'))
    })
}

/* The code will log the error with a stack trace which will be helpful in debugging the code. */

/* 

error is  Error: promise rejected
    at C:\Users\ajay\Desktop\index.js:57:10
    at new Promise (<anonymous>)
    at getPromiseRejected (C:\Users\ajay\Desktop\index.js:56:9)
    at C:\Users\ajay\Desktop\index.js:63:9
    at <anonymous>
    at process._tickCallback (internal/process/next_tick.js:188:7)
    at Function.Module.runMain (module.js:695:11)
    at startup (bootstrap_node.js:191:16)
    at bootstrap_node.js:612:3

*/