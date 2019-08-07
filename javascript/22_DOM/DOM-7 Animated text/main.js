const text = 'Hallo , How are you ..?'
let count = 0
setInterval(function () {
    document.getElementById("h2").append(text.charAt(count));
    count++;
    if(count===text.length+5){
        count=0;
        document.getElementById("h2").innerHTML='';
    }
}, 100);

