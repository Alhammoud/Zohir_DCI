
const greetingObj = document.getElementById('greeting');
const sayMyNameObj = document.getElementById('saymyname');

sayMyNameObj.onclick = function () {
    // grteetingObj.value gibt den value der textbox aus.
    alert(`Hallo ${greetingObj.value}`);
    //alert(`Hallo ${greetingObj.nodeValue}`); //null
}





const addObj = document.getElementById('add');
addObj.onclick = function () {

    var num1Obj = Number(document.getElementById('num1').value);
    console.log(num1Obj);

    var num2Obj = Number(document.getElementById('num2').value);
    console.log(num2Obj);

    var result ;
    if(typeof num1Obj=='number' && typeof num2Obj=='number'){

        result = num1Obj + num2Obj;
        console.log(result);
    
        document.getElementById("result").value = result;
    }else{
        alert('Falsch Eingabe ..!');
    }

}


const y = document.getElementById('adddd');
y.onclick = function () {
    var a, b, c;
    a = Number(document.getElementById("first").value);
    b = Number(document.getElementById("second").value);
    c = a + b;
    document.getElementById("answer").value = c;
}