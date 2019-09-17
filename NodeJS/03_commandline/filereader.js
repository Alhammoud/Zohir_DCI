#!/usr/bin/node

const fs = require('fs');


/* let alleFiles = process.argv;

console.log('alleFiles');
console.log(alleFiles);


for (let i = 2; i < alleFiles.length; i++) {
    const data = fs.readFileSync(alleFiles[i], 'utf-8')
    console.log(data);
    
} */

// andere Löusong

console.log("process.argv.length");
console.log(process.argv.length);

console.log("process.argv");

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});

console.log('**********************************************')

if(process.argv.length === 2) return;
let alleFiles2 = process.argv.splice(2, process.argv.length);


console.log("alleFiles2");
/* alleFiles2.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});
 */
for (argument of alleFiles2) {
    console.log('argument');
    console.log(argument);
    const data = fs.readFileSync(argument, 'utf-8')
    console.log(data);

}