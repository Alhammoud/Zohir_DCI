console.log('22_DOM');


let pets = ['Mooxie', 'Pickle', 'Hootchie'];

pets.forEach(function (element) {
    console.log(element);
});
/* 
 Mooxie
 Pickle
 Hootchie */
////////////////////////////////////////////////////////////
let myObject = {
    name: 'Martina',
    age: 35,
    city: 'Berlin'
};

for (let eigenschaft in myObject) { // for ....in schleife 
    console.log(myObject[eigenschaft]);
    console.log(eigenschaft + ' : ' + myObject[eigenschaft]);
}
//////////////////////////////////////////////

var btn = document.getElementById('click');
btn.onclick = function(){
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    document.body.appendChild(x);
}