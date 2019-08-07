function myFunction1() {

    var str = "100, 1000 or 10000?";
    console.log('string ist :' + str);


    var patt1 = /\d{3,}/g;
    console.log('pattern :' + patt1);

    var result = str.match(patt1);
    console.log('The Result is :' + result)

    document.getElementById("demo1").innerHTML = result;
}

function myFunction2() {

    var str = "100, 1000 or 10000?";
    console.log('string ist :' + str);

    var patt1 = /\d{3,4}/g;
    console.log('pattern :' + patt1);


    var result = str.match(patt1);
    console.log('The Result is :' + result)

    document.getElementById("demo2").innerHTML = result;
}


function myFunction3() {

    var str = "Is this his";
    console.log('string ist :' + str);

    var patt1 = /is$/g;
    console.log('pattern :' + patt1);

    var result = str.match(patt1);
    console.log('The Result is :' + result)

    document.getElementById("demo3").innerHTML = result;
  }

  function myFunction4() {

    var str = "That's hot! Click the button to do";
    console.log('string ist :' + str);

    var patt1 = /b.t/g;
    console.log(patt1);
    var result1 = str.match(patt1);
    console.log('The Result is :' + result1)

    var patt2 = /T.a/g;
    console.log(patt2);
    var result2 = str.match(patt2);
    console.log('The Result is :' + result2)

    var patt3 = /t.n/g;
    console.log(patt3);
    var result3 = str.match(patt3);
    console.log('The Result is :' + result3)

    var patt4 = /h.t/g;
    console.log(patt4);
    var result4= str.match(patt4);
    console.log('The Result is :' + result4)

    document.getElementById("demo4").innerHTML = result1;
  }


  //Do a global search for "is" at the end of a string:
  function myFunction5() {

    var str = "Is this his  gg";
    console.log('string ist :' + str);

    var patt1 = /is$/g;
    console.log(patt1);
    
    var result1 = str.match(patt1);
    console.log('The Result is :' + result1)

    var patt2 = /gg$/g;
    console.log(patt2);

    var result2 = str.match(patt2);
    console.log('The Result is :' + result2)


    document.getElementById("demo5").innerHTML = result2;
  }


//   Do a global search for "Is" at the beginning of a string:
function myFunction6() {

    var str = "tt Is this his";
    console.log('string ist :' + str);

    var patt1 = /^tt/g;
    console.log(patt1);

    var result = str.match(patt1);
    console.log('The Result is :' + result)

    document.getElementById("demo6").innerHTML = result;
  }