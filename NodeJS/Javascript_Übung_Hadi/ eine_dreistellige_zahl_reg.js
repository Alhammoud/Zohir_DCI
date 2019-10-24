module.exports = (arr) => {
    // arr is array of strings
    console.log('arr', arr);
    console.log('arr[0]', arr[0]);
    if(myFunction2(arr[0])===null){
        console.log('falsche Eingabe ..!')
    }else{
        console.log('“Du bist cool”', "Du hast eine dreistellige Zahl zwischen 000 und 999 eingegeben");
    }
};

function myFunction2(str) {

    console.log('string ist :' + str);

    var patt1 = /^\d\d\d$/g; // or ^[0-9][0-9][0-9]$
    console.log('pattern :' + patt1);


    var result = str.match(patt1);
    console.log('The Result is :' + result)

    return result;
}