module.exports = (arr) => {

    // arr is array of strings

    console.log('arr', arr);
    console.log('arr[0]', arr[0]);

    myFunction2(arr[0]);

    let arr_2 = arr[0].split('');
    console.log('arr_2', arr_2)

    if (arr_2.length === 3 && parseInt(arr_2[0]) >= 0 && parseInt(arr_2[0]) <= 9 && parseInt(arr_2[1]) >= 0 && parseInt(arr_2[1]) <= 9 && parseInt(arr_2[2]) >= 0 && parseInt(arr_2[2]) <= 9) {
        console.log('“Du bist cool”', "Du hast eine dreistellige Zahl zwischen 000 und 999 eingegeben");

    }
    /*  if(parseInt(arr[0]) >= 100 && parseInt(arr[0])<= 999){
        console.log('“Du bist cool”', "Du hast eine dreistellige Zahl zwischen 100 und 999 eingegeben");
    } // aber 000 nicht geht .!!!!
     */



    /* let string_of_number = parseInt(arr[0]).toString(); */

    /* let numbers_of_strings = parseInt(arr[0]);
    console.log('numbers_of_strings', numbers_of_strings)
    if (typeof numbers_of_strings === "number") {

        let string_of_number = numbers_of_strings.toString();
        console.log('string_of_number :', string_of_number);

        if (string_of_number.length === 3) {
            console.log('“Du bist cool”', "Du hast eine dreistellige Zahl eingegeben");
        } else {
            console.log(`Du hast ${string_of_number.length} Zahl eingegeben`);
        }
    } else {
        console.log("keine Zahl eingeben ");

    }
 */

    /* if (!(typeof string_of_number[0] === "string")) {
        // let arr_2 = arr[0].split('');
        console.log('string_of_number :', string_of_number);
        console.log(string_of_number.length);



    }
 */
};

function myFunction2(str) {

    console.log('string ist :' + str);

    var patt1 = /^\d\d\d$/g;
    console.log('pattern :' + patt1);


    var result = str.match(patt1);
    console.log('The Result is :' + result)

    return result;
}