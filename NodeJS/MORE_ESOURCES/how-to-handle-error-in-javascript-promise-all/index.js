/* 

n this tutorial, you’ll learn how to handle error in JavaScript Promise.all method. Promise.all method is used to make sure that all promises in an array of promises has resolved. If any of the promises gets rejected, the Promise.all execution stops. So, how to handle such scenarios and make sure that even if a promise gets rejected, the execution of other promises doesn’t stop.

If you are new to JavaScript promises I would recommend reading the beginners guide to understanding JavaScript Promises. Once you have understood the basics of JavaScript Promise, let’s dive into Promise.all.

*/

/* 

In real time scenario you might be dealing with Promise, when making API calls. Here just to simulate the exact scenario I’ll create a method which returns a Promise after a two seconds timeout.

*/

function getPromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Done')
        }, 2000)
    })
}

/* 

Now let’s create a number of Promises and try to use Promise.all to make sure all the promises have resolved successfully.


*/

let promises = [];
for (let i = 0; i < 10; i++) {
    promises.push(getPromise());
}

Promise.all(promises)
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(`Error occured ${error}`)
    })

/* Try running the above piece of code and you’ll get the result as an array */

// Result
/* ["Done, "Done", "Done", "Done", "Done", "Done", "Done", "Done", "Done", "Done"] */

/*

What is Promise.all?
Promise.all is actually a promise that takes an array of promises as an input (an iterable). Then it gets resolved when all the promises get resolved or any one of them gets rejected.

For example, assume that you have ten promises (Async operation to perform a network call or a database connection). You have to know when all the promises get resolved or you have to wait till all the promises resolve. So you are passing all ten promises to Promise.all. Then, Promise.all itself as a promise will get resolved once all the ten promises get resolved or any of the ten promises get rejected with an error.

*/
/* 

The above case is an ideal scenario where every promise is resolved successfully. 
But when dealing with real time scenarios like making API calls, the scene may be different.
Not all promises may resolve successfully. 
Assuming that a certain API is down, a certain promise call may fail. 
Now let’s see what happens when one of the promises from the array of promises fails.

*/


/* 

function getPromise(i){
    return new Promise(function(resolve,reject){
      setTimeout(function(){
        if(i === 0) reject('error');
        resolve('Done')
      },2000)
    })
  }
  
  let promises = [];
  for(let i = 0;i < 10;i++) {
    promises.push(getPromise(i));
  }
  Promise.all(promises)
  .then(function(result){
    console.log(result);
  })
  .catch(function(error){
    console.log(`Error occured ${error}`)
  }) 
  
  */

/* Based on the index value I’m rejecting the first promise. Promise.all fails and stops the execution of other promises in the array. */

/* 
  
  // The above code execution result
"Error occured error"

*/

/* 

How to handle Error in JavaScript Promise.all such that it doesn’t stop execution of other promises if one fails ?

Well the answer is a simple one. You need to handle error or add a catch block to each of the promises in the array so that it doesn’t break the Promise.all execution.

*/

/* 

function getPromise(i){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      if(i === 0) reject('error');
      resolve('Done')
    },2000)
  })
}

let promises = [];
for(let i = 0;i < 10;i++) {
  promises.push(getPromise(i).catch(() => { return undefined; }));
}
Promise.all(promises)
.then(function(result){
  console.log(result);
})
.catch(function(error){
  console.log(`Error occured ${error}`)
})

*/



/* 

Now if you try running the above code, Promise.all execution doesn’t break when one of  the Promises fails. The above code returns the following response :

*/

/* 

// console.log output
[undefined, "Done", "Done", "Done", "Done", "Done", "Done", "Done", "Done", "Done"]

*/