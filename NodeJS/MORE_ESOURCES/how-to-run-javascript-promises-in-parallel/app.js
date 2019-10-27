const helper = require('./helper')

/* app.js */
/* 
helper.getPhotos()
.then(function(response){
    console.log(response);
    return helper.getPosts()
})
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.log(`Error occured ${error}`);
})

 */

/* app.js */

async function callAPI(){
    let photos = helper.getPhotos();
    let posts = helper.getPosts();
    let [photosResponse, postsResponse] = [await photos, await posts];
    console.log(photosResponse, postsResponse)
}
callAPI();





 /* app.js */

 // Promise.all([helper.getPosts(), helper.getPhotos()])

 