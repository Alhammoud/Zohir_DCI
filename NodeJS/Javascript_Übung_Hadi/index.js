const stars = require('./stars.js');
const sort = require('./sort.js');

const un_gerade = require('./un-gerade.js');

const t_module = require('./t.js');
const sternzeichenConsole = require('./sternzeichenConsole.js');
const zahl_prüft = require('./ eine_dreistellige_zahl');
const zahl_prüft_reg = require('./ eine_dreistellige_zahl_reg');

const arr = process.argv.slice(2);


// stars(arr[0],arr[1]);

// output :
/* 

temp@temp-Latitude-E5440:~/Desktop/Zohir_DCI/NodeJS/Javascript_Übung_Hadi$ node index.js 
**********
hi
**********
temp@temp-Latitude-E5440:~/Desktop/Zohir_DCI/NodeJS/Javascript_Übung_Hadi$ node index.js zohir

hi

temp@temp-Latitude-E5440:~/Desktop/Zohir_DCI/NodeJS/Javascript_Übung_Hadi$ node index.js zohir

hi

temp@temp-Latitude-E5440:~/Desktop/Zohir_DCI/NodeJS/Javascript_Übung_Hadi$ node index.js 15  zohir
***************
zohir
***************

*/


// sort(arr[0]);



/* andere Löusung von Hadi:

const args = process.argv.slice(2)[0];
​
//console.log(process.argv)
​
function sortString(str) {
    let arr = str.split('');
    let tmp;
​
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            /* if ASCII code greater then swap the elements position*/
/* if (arr[i] > arr[j]) {
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr.join('');
}
console.log(sortString(args)) */





// un_gerade(arr[0],arr[1]);



// t_module(arr[0]);


// sternzeichenConsole(arr[0],arr[1]);
// console.log(arr);

//zahl_prüft(arr);
zahl_prüft_reg(arr);