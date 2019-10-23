
// How To Make API Calls Inside For Loop In JavaScript

/* Getting Started
Let’s assume that you have an array of JSON objects with Ids. */

[
    {
      "Id": 10
    },
    {
      "Id": 20
    },
    {
      "Id": 30
    },
    {
      "Id": 40
    },
    {
      "Id": 50
    }
  ]


/*  
 You need to iterate through the JSON objects array and for each Id you need to make an API call. The result should be stored in the same JSON object. The final output will look like :
 
 
 */

[
    {
      "Id": 10,
      "result": []
    },
    {
      "Id": 20,
      "result": []
    },
    {
      "Id": 30,
      "result": []
    },
    {
      "Id": 40,
      "result": []
    },
    {
      "Id": 50,
      "result": []
    }
  ]


  /*
   Let’s iterate through the array of objects and make an API call. For making the API call, I’ll be making use of request-promise module to make API calls.

Let’s start by creating a Node project. */

/* mkdir node-api-call
cd node-api-call
npm init
 */

 /* You will have the node project initialized. Let’s create a file called app.js. Install the request and request-promise packages for making API calls.
  */

  /* 
  npm install --save request
  npm install --save request-promise
 */

 /* Add the following code to app.js file : */


const rp = require('request-promise')
let user_list  = [{"Id":1 },{"Id":2 },{"Id":3 },{"Id":4 },{"Id":5 }];
let URL = "https://jsonplaceholder.typicode.com/users/"

function make_api_call(id){
    return rp({
        url : `${URL}${id}`,
        method : 'GET',
        json : true
    })
}

async function processUsers(){
    let result;
    for(let i = 0; i < user_list.length; i++){
        result = await make_api_call(user_list[i].Id);
        user_list[i]['result'] = result;
    }
    return user_list;
}
/* 
async function doTask(){
    let result = await processUsers();
    console.log(result);
}

doTask();

 */
/* You have used async/await to make API calls.
You await each promise call to complete so that you can append the result to the corresponding JSON object. The above works fine and gives you the expected result.

But there is an issue with the above code. It’s sequential in nature although it doesn’t need to be and hence makes the code execution slow.


// OUTPUT ;

/* [
  {
    Id: 1,
    result: {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: [Object],
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: [Object]
    }
  },
  {
    Id: 2,
    result: {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: [Object],
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: [Object]
    }
  },
  {
    Id: 3,
    result: {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      address: [Object],
      phone: '1-463-123-4447',
      website: 'ramiro.info',
      company: [Object]
    }
  },
  {
    Id: 4,
    result: {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      address: [Object],
      phone: '493-170-9623 x156',
      website: 'kale.biz',
      company: [Object]
    }
  },
  {
    Id: 5,
    result: {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      address: [Object],
      phone: '(254)954-1289',
      website: 'demarco.info',
      company: [Object]
    }
  }
]
 */



/* Let’s have a look at how much time the code takes to make all the API calls in sequential order. */

/* Modify the doTask method to add time logs to check the time taken for the code to execute. */


async function doTask(){
    console.time('start')
    let result = await processUsers();
    console.timeEnd('start');
    console.log(result);
}

doTask()


/* If you save the above changes and execute the code,
 you’ll see that it takes some where around 5562.815ms to complete the code execution. */



 /* 
 
 Making API Call Inside For Loop In Parallel
Now let’s have a look at how to optimize the above code to execute in parallel to improve the code execution time.

Instead of awaiting each API call to finish, you can actually keep the pending promise in an array and append the result when all promises get resolved.


 
Let’s modify the processUsers function to make the API calls parallel.
 
 */


async function processUsers(){
    let result;
    let promises = [];
    for(let i = 0; i < user_list.length; i++){
        promises.push(make_api_call(user_list[i].Id));
    }
    result = await Promise.all(promises);
    for(let i = 0; i < user_list.length; i++){
        user_list[i]['result'] = result[i];
    }
    return user_list;
}


/* As seen in the above code, you pushed each of the promises without awaiting it into an array. This makes all the API calls to start at the same time. The time taken for the whole process to finish will be the time taken by the longest promise to finish execution.

Save the above changes and try running app.js. You will have the API calls completed with the result in somewhere 1750.467ms which quite faster compared to 5562.815ms.

Wrapping It Up
In this tutorial, you learnt how to make API calls inside for loop in JavaScript in both sequential and parallel manner. Do let us know your thoughts in the comments below. */