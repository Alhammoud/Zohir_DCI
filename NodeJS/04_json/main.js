#!/usr/bin/node


// JSON Laden 
// 1. möglichkeit JSON zu laden

const fs = require('fs');

const data = fs.readFileSync('./users.json');


// users.json
/* [
    {"id":1,"name":"bob"},
    {"id":2,"name":"tom"},
    {"id":3,"name":"maria"},
    {"id":4,"name":"julia"}
] */

const dataObj = JSON.parse(data);

console.log(dataObj[1].name); //output : tom




// 2. möglichkeit -> require

const users = require('./users.json');

for (user of users){
    console.log(user.name);
}
//output : 
/* 
bob
tom
maria
julia 
*/


