module.exports = (arr) => {
    console.log("arr[0]", arr[0]);

    console.log('arr[0].length', arr[0].length);

    let new_arr = arr[0].split('');
    console.log(" new_arr : ", new_arr);

    count_with_reduce(arr[0]);

    /* let arr_temp = [];
    for (let j = 0; j < new_arr.length; j++) {

        if (arr_temp.includes(new_arr[j]) === false) {
            arr_temp.push(new_arr[j]);
        } */ /* else {
            console.log(` ${new_arr[j]} ist schon da ..!`);
        } */
        /*  
       if (arr_temp.includes(new_arr[j])) {
    } 
    */
  /*   }
    console.log(arr_temp);
    for (let index = 0; index < arr_temp.length; index++) {
        
        console.log(countLetters(arr_temp[index], new_arr));
    } */
    /*
    
    const alphapet ="abcdefghijklmnopqrstuvwxyzöäü"
    let alphapet_arr =  alphapet.split('');
    console.log(" alphapet_arr : ", alphapet_arr);
    
    
    for (let i = 0; i < alphapet_arr.length; i++) {
        console.log(alphapet_arr[i]);
     }

    */

    /*  

     for (let i = 0; i < new_arr.length; i++) {
        // console.log(countLetters(new_arr[i], new_arr));

        console.log(`${new_arr[i]} : ${(arr[0].match(/new_arr[i]/g)||[]).length}`);
     } */
}

function countLetters(letter, new_arr) {
    let count = 0;
    for (let i = 0; i < new_arr.length; i++) {
        if (!(new_arr[i] === ' ')) {
            if (new_arr[i] === letter) {
                count++;
            }
        }

    }

  return `${letter} : ${count}`
    /* return count; */

    /* return `${letter} : ${(string.match(/letter/g)||[]).length}`; */
    /*  (string.match(/o/g)||[]).length */
}



/* function check_insert_unique(item) {
    let unique_list = [];
    let duplicate_list = [];

    if (unique_list.includes(item)) {
        if (duplicate_list.indexOf(item) == -1) {
            duplicate_list.push(item)
        }
    } else {
        if (unique_list.indexOf(item) == -1) {
            unique_list.push(item)
        }
    }

    return unique_list;
} */


function count_with_reduce(words){

    // const words = ["react", "angular", "react", "react", "redux"];
  console.log('words');
  console.log(words);
    const letters =words.split('');
    console.log(letters);


    const initialObject = {};
    
    const letter = letters.reduce(
      (acc, word) => {
        if (!acc[word]) {
          acc[word] = 1;
        } else {
          acc[word]++;
        }
        return acc;
      },
      initialObject
    );
    
    console.log(letter);
    
    //output
}

/* const arr_hello = "helllo hellel ll eller".split('');

console.log(countLetters('e',"helllo hellel ll eller".split(''))); */