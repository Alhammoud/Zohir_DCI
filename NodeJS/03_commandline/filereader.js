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

let alleFiles2 = process.argv.splice(2,process.argv.length);

for (argument of alleFiles2) {
    const data = fs.readFileSync(argument, 'utf-8')
    console.log(data);
    
}