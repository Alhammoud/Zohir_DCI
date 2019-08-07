

function checkprimenumber(n) {
    for (c = 3; c <= n - 1; c++) {
        if (n % c === 0) {
            return false;
        }
        return true;
    }
}

console.log(checkprimenumber(99));

function printprimenumber(number) {
    for (i = 1; i <= number; i++) {

        if (checkprimenumber(i) == true) {
            console.log(i + " is Prime Number ");
        } else {
            console.log(number+" is Not Prime Number");
        }
    }
}

// function printnumbers(range) {
//     for (i = 1; i <= range; i++) {
//         printprimenumber(i);
//     }
// }

//var maxnumber = 100;
// printnumbers(maxnumber);

printprimenumber(100);