//

let obj = {
    x: 1,
    name: 'jan',
    123: 456
}
obj.x = 5;
obj.name = 10;

// Key interpolation

//obj.123= 789 // syntax error


obj['123'] = 789;
obj[123] = 789; // geht , wenn key eine Zahl


// objekt iterator
for (key in obj) {

    //key ist ein string , der den key des aktuell betrachtenden
    // key / value paares als string darstellt

    console.log(
        `key = ${key} , value = ${obj[key]}`
    );

    console.log(key);
    // console.log(key.value); //undefind
    console.log(key + ' = ' + obj[key])


}


console.log(obj.key); //undefind
console.log(obj);

// Aufgabe:
//
// Erstelle eine Funktion addKeyValue die 3 Parameter entgegen nimmt:
// obj, newKey und value. addKeyValue soll ein neues Key-Value-Paar
// zu o hinzufügen mit dem Key "newKey" und dem value "value".
// Falls das Key-Value-Paar schon existiert, dann soll addKeyValue
// das Orginal o zurückgeben. Falls nicht, dann wird das neue
// Key-Value-Paar hinzugefügt.

function addKeyValue(obj, newKey, value) {
    for (key in obj) {
        if (obj.key === newKey) {
            return obj;
        }
    }
    // obj.newKey=newKey;
    obj[newKey] = value;
}

// let addKeyValue = (obj, newKey, value) => {
//     for (key in obj) {
//         if (obj.key === newKey) {
//             return obj;
//         }
//     }
//     obj.newKey=newKey;
//     obj[newKey] = value;
// }

let objx = {
    name: 'Zohir',
    city: 'Berlin',
    alt: 30
}

console.log(objx);

addKeyValue(objx, 'nachName', 'Alhammoud');

console.log(objx);