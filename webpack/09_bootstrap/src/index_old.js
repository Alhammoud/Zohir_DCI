
// const sum = require('./math'); // CommenJS import

const math = require('./math'); // CommenJS import

/* import sum from './math' */ // Es& import 



import {
    alphabet,
    randomstring
} from './myrandomstring';

console.log(alphabet);

console.log('Random String von 4 Buchstaben : ' + randomstring(4));




// alert('Hallo World - Live Reload');

const sayhallo = () => {
    console.log(' Hallo World in console.log ');
}

sayhallo();

console.log('sum 1 +3 is ' + math.sum(1, 3));

console.log('Multi 6 +3 is ' + math.multi(6, 3));
