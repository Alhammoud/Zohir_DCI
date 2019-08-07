console.log('Hallo World');


const giftobj = document.getElementById('gift');
const addgiftobj = document.getElementById('addgift');
const removelastgiftobj = document.getElementById('removelastgift');
const removefirstgiftobj = document.getElementById('removefirst');
const removeallgiftobj = document.getElementById('removeall');
const removeOnegiftobj = document.getElementById('removeOne');
const sumgiftsobj = document.getElementById('sum');
const shoppinglistobj = document.getElementById('shoppinglist');
// const listgifts = document.querySelectorAll('#shoppinglist > li');
const listgifts = document.getElementsByTagName('li');
const sumObj = document.getElementById('sum');


//
// Aufgabe:
// 
// Erweitere Die Funktionalität von add gift.
// Jedes mal, wenn ein neues gift in der Liste
// hinzugefügt wird, soll ein neues Objekt in
// das Array basket hinzugefügt werden.
// Jedes Objekt hat einen Namen und einen Zufalls-
// preis. Also wenn der Benutzer eine "Banane" 
// hinzufügt, dann soll ein neues Objekt in 
// das Basket-Array hinzugefügt werden:
// Bsp:
// { name: 'Banane', price: 0.50 }
//
// basket würde bei einem gift so aussehen:
//
// [{ name: 'Banane', price: 0.50 }]


let basket = [];


if(localStorage.getItem('basket') !== null) {
    basket = JSON.parse(localStorage.getItem('basket'));

    for(let i=0; i<basket.length; i++) {
        const newLiObj = document.createElement('li');
        newLiObj.innerHTML = basket[i].name;
        shoppinglistobj.appendChild(newLiObj);
    }
}
function updateLocalStorage(){
    console.log('basket.length: '+basket.length)
    localStorage.setItem('basket',JSON.stringify(basket));
};
addgiftobj.onclick = function () {

    if (giftobj.value === '') {
        alert('Fehler ..! Es gibt kein Item hinzuzufügen..!!')
    } else {
        // neues li erzeugen
        const newLiObj = document.createElement('li');

        // den text des li setzen
        newLiObj.innerHTML = giftobj.value;

        // li der liste hinzufügen
        shoppinglistobj.appendChild(newLiObj);

        let basketItem = {
            name: giftobj.value,
            price: Math.floor(Math.random() * 20)
        };

        basket.push(basketItem);
        console.log('console.log(basket);');
        console.log(basket);
        updateLocalStorage();
        for (let i = 0; i < listgifts.length; i++) {
            // console.log(listgifts[i].innerHTML);
            console.log('Item Name : ' + basket[i].name + '  Item Price :' + basket[i].price);
        }
        console.log('console.log(localStorage);');
        console.log(localStorage);
        giftobj.value = '';
    }

}


// Aufgabe:
//
// Implementiere die Buttons removelast und
// removefirst.
// removefirst: entfernt erstes item in der liste
// removelast: entfernt letztes item in der liste
// 
// tipp: nutze google für effizientes selektieren der DOM elemente. schaue dir die methode .remove() an.

removelastgiftobj.onclick = function () {
    console.log(listgifts);
    if (listgifts.length > 0) {
        listgifts[listgifts.length - 1].remove();
        basket.pop(); // delete the last element in the Array
        updateLocalStorage();
    }
    else
        alert('Nichts zu entfernen..!!');
};

removefirstgiftobj.onclick = function () {
    console.log(listgifts);
    if (listgifts.length > 0) {
        listgifts[0].remove();
        basket.shift(); // delete the first element in Array
        updateLocalStorage();
    }
    else
        alert('Nichts zu entfernen..!!');
};

removeallgiftobj.onclick = function () {

    // if (listgifts.length > 0)
    //     shoppinglistobj.innerHTML = '';
    // else
    //     alert('Nichts zu entfernen..!!');

    if (listgifts.length > 0) {
        for (let i = 0; i < listgifts.length; i++) {
            // console.log(listgifts[i].value);
            listgifts[i].remove();
            i--;
            basket.shift(); // delete the first element in Array
            
        }
        updateLocalStorage();
        localStorage.clear();
    } else
        alert('Nichts zu entfernen..!!');

}

removeOnegiftobj.onclick = function () {
    console.log(listgifts);
    let isDelete = false;

    if (listgifts.length > 0) {

        if (giftobj.value === '') {
            alert('Fehler ..! Es gibt kein Item entzufernen..!!')
        } else {
            for (let i = 0; i < listgifts.length; i++) {
                if (giftobj.value === listgifts[i].innerHTML) {
                    listgifts[i].remove();
                    i--;
                    basket.splice(i, 1);
                    updateLocalStorage();
                    
                    // JSON.parse(obj2_JSON)
                    // localStorage.removeItem("Benutzername");

                    isDelete = true;
                }
            }
        }

        if (isDelete === false) {
            alert('This element ' + giftobj.value + 'do not exist ..! ');
        }
    } else
        alert('Nichts zu entfernen..!!');
}


sumObj.onclick = function () {
    let sum = 0;
    for (let i = 0; i < basket.length; i++) {
        console.log(basket[i].price);
        sum += basket[i].price;
    }
    alert('Warenkorbwert: ' + sum);
}
/*
//Aufgabe :
//
//1) Erstelle ein Beispiel-Array von

const array1 = [21, 33, 77, 10, 34, 55, 10, 33, 10, 10, 43, 10];
//2) SChreibe eine Funktion, die alle 10 aus dem Array herauslöscht,
//
//Tipp: schaue Dir splice() an (z,b. mit Google)...

function delet10fromarray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 10) {
            // arr.splice(i, 1);
            console.log(' arr.splice(i,1);', arr.splice(i, 1));
            console.log(arr);
            i--;
        }
    }
    return arr;
}

console.log('array1=[21,33,77,10,34,55,10,33,10,10,43,10]');

console.log(delet10fromarray(array1));



function delet10fromarray2(arr2) {
    const arrNew = [];
    for (let i = 0; i < arr2.length; i++) {
        if (!(arr2[i] === 10)) {
            arrNew.push(arr2[i]);
        }
    }
    return arrNew;
}


console.log('array1=[21,33,77,10,34,55,10,33,10,10,43,10]');

console.log(delet10fromarray2(array1));
*/

