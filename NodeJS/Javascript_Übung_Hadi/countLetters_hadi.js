module.exports = (arr) => {


    /* 
    
    const args = process.argv.slice(2)[0];
function arrSpliting(str) {
    let arr = str.split('');
    let countObject = {};
    function characterCount(word, character) {
        let count = 0;
        for (let i = 0; i < word.length; i++) {
            if (word[i] === character) {
                count++;
            }
        }
        return count;
    }
    for (let i = 0; i < arr.length; i++) {
        let currentChar = arr[i];
        countObject[currentChar] = characterCount(str, currentChar);
    }
    return countObject;
}
console.log(arrSpliting(args))



    */
    console.log("arr[0]", arr[0]);

    console.log('arr[0].length', arr[0].length);

    let new_arr = arr[0].split('');
    console.log(" new_arr : ", new_arr);

    
 /*    for (let index = 0; index < new_arr.length; index++) {

        console.log(frequncy(arr[0], new_arr[index]));
    } */

    for (let i = 0; i < new_arr.length; i++) {
        for (let j = i; j < new_arr.length; j++) {
            if (new_arr[i] === new_arr[j]) {
                console.log(frequncy(arr[0], new_arr[j]));
                
            }


        }

    }
}

function frequncy(str, letter) {
    let temp = 0;
    for (let i = 0; i <= str.length; i++) {
        if (letter == str[i]) {
            temp++
        }
    }
    return `${letter} : ${temp}`
}