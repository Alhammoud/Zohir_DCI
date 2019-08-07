

// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
console.log(header);

var btns = header.getElementsByClassName("btn");
console.log(btns);

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        console.log('current');
        console.log(current);
        console.log('current[0].className');
        console.log(current[0].className);
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        console.log();
    });
}

function myFunction() {

    var element = document.getElementById("myDIV2");
    console.log(element);

    

    if (element.classList) {

        console.log('element.classList');
        console.log(element.classList);
        element.classList.toggle("mystyle2");

    } 
    // else {
    //     var classes = element.className.split(" ");
    //     console.log('classes');
    //     console.log(classes);

    //     var i = classes.indexOf("mystyle2");
    //     console.log('i' + i);

    //     if (i >= 0)
    //         classes.splice(i, 1);
    //     else
    //         classes.push("mystyle2");

    //     element.className = classes.join(" ");
    // }
}