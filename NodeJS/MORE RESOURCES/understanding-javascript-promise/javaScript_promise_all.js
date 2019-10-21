/*

At times it’s required to execute a number of promises in parallel. When you are in a scenario when you need to be sure that a certain set of promises have been executed you can use JavaScript Promise.all. Assuming that you have a couple of promises defined as shown: 

*/


function doTask1(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('task one resolved')
        }, 1000)
    })
}

function doTask2(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('task two resolved')
        }, 2000)
    })
}

function doTask3(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('task three resolved')
        }, 3000)
    })
}

/* 
Let’s make use of Promise.all method to execute the promise doTask1 and doTask2. Once doTask1 and doTask2 has been executed, let’s execute doTask3. Here is how you can use Promise.all() to accomplish the following task:

*/

var promises = Promise.all([doTask1(), doTask2()])

promises.then(function(response){
    console.log(response)
    doTask3()
    .then(function(response){
        console.log(response)
    })
})



/* Wrapping It Up
In this tutorial, you learnt what is a JavaScript promise, how to use Promise and why use a promise. You also learnt how to chain JavaScript promises, how to handle errors when writing promises and how to use Promise.all() to execute promises in parallel.

How was your experience learning Promises ? Do let us know thoughts or suggestions in the comments below. */