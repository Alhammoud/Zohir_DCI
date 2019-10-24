module.exports = (arr) => {
    console.log("arr[0]",arr[0]);
    
    console.log('arr[0].length', arr[0].length);
    
    const alphapet ="abcdefghijklmnopqrstuvwxyzöäü"
    let new_arr = arr[0].split('');
    console.log(" new_arr : ", new_arr);
    let alphapet_arr =  alphapet.split('');
    console.log(" alphapet_arr : ", alphapet_arr);
    for (let i = 0; i < alphapet_arr.length; i++) {
        for (let j = 0; j < new_arr.length; j++) {
            if(alphapet_arr[i]===new_arr[j]){

                console.log(alphapet_arr[i] );
            }
            
        }
        
    }
   /*  

    for (let i = 0; i < new_arr.length; i++) {
       // console.log(countLetters(new_arr[i], new_arr));

       console.log(`${new_arr[i]} : ${(arr[0].match(/new_arr[i]/g)||[]).length}`);
    } */
}

function countLetters(letter, new_arr) {
    let count = 0;
    for (let i = 0; i < new_arr.length; i++) {
        if(!(new_arr[i]===' ')){
            if (new_arr[i] === letter) {
                count++;
            }
        }
        
    }

    return `${letter} : ${(string.match(/letter/g)||[]).length}`;
    /*  (string.match(/o/g)||[]).length */
}