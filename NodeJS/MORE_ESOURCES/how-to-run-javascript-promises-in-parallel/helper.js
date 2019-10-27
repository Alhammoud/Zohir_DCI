/* 

In this tutorial, you’ll learn how to run JavaScript promises in parallel.
 Sometimes, in our application when we use promises to solve a set of problems, we tend to chain promises. 
  Chaining promises when not required will slow down your code execution which in turn slows down your application. Promises which are independent of each other should be run in parallel for faster execution.

Let’s create a helper module which helps to make API calls.

 */

/* helper.js */

/* const helper = (function () { */


module.exports = {


    /* function getPhotos() {
        return fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                return response.json()
            })
    } */

    getPhotos: function () {
        return fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                return response.json()
            })
    },

    getPosts: function () {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                return response.json()
            })
    }


    /*  getPhotos(); */

    /* function getPosts() {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                return response.json()
            })
    } */

    /*  getPosts() */

    /*  return {
         getPhotos,
         getPosts
     } */

} /* )(); */



/* 
function getPhotos() {
    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => {
            return response.json()
        })
}

function getPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json()
        })
}
 */


/* 

Include the helper module in an HTML file. Now let’s use the helper module to make two API calls to get photos and posts.

*/

/* app.js */

/* helper.getPhotos()
.then(function(response){
    console.log(response);
    return helper.getPosts()
})
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.log(`Error occured ${error}`);
}) */

/* 
As seen in the above code, getPhotos promise call gets executed first and once its done, the other method getPosts is called to get posts. Now in the above code, the two API calls are executed sequentially.

 */

/* Run JavaScript Promises In Parallel  */

/* 
To run the JavaScript promises in parallel,
 you can make use of async/await. 
 Let’s have a look at how asyc/await executes the promises in parallel.

*/

/* app.js */
/* 
async function callAPI(){
    let photos = helper.getPhotos();
    let posts = helper.getPosts();
    let [photosResponse, postsResponse] = [await photos, await posts];
    console.log(photosResponse, postsResponse)
}
callAPI();
 */
/* 

As seen in the above code,
 instead of awaiting for the getPhotos promise to resolve,
  you straight away called the getPosts method.
   Now we await the promises running in parallel to finish.
    Time taken to finish the parallel promise execution would be the time taken by the slowest promise to resolve.

*/

/*
 You can also make use of Promise.all to execute the promise calls in parallel. Here is a modified version of the above code using Promise.all.
 */

/* app.js */

/* Promise.all([helper.getPosts(), helper.getPhotos()]) */

/* 

Wrapping It Up
In this tutorial, 
you learn how to run JavaScript promises in parallel using async/await and Promise.all.

*/
/* 
module.exports = helper(); */