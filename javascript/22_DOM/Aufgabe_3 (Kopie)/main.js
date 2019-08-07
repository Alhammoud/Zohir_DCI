console.log('Hallo world');

//  const halloworldObj=document.getElementById('halloworld1Obj');
//  const halloworld1Obj=document.getElementById('halloworld1Obj');
//  // halloworldObj connected js mit DOM(mit dem HTML Button)

//  // onclick Methode ünerschreiben
//  halloworldObj.onclick=function(){
//      alert('Halloooo Woooorld ....!!!')
//  }

// halloworld1Obj.addEventListener('click',function(){
//     alert('Halloooo Woooorld ..1..!!!')
//  })

//  halloworld1Obj.addEventListener('click',function(){
//     alert('Halloooo Woooorld ..2..!!!')
//  })

const halloWorldObj = document.getElementById('halloworld'); // halloWorldObj connected JS mit dem HTML Button

// onclick Methode überschreiben
halloWorldObj.onclick = function () {
    alert('hallo world');
}

const allesRotObj = document.getElementById('allesrot');
allesRotObj.onclick = function () {

    //wir erstlllen objekt für content div damit wir mit JS das html verändern können
    const contentObj = document.getElementById('content');
    contentObj.style.backgroundColor = 'rgb(255,0,0)';
}


//Aufgabe::
//
// 1. Ändere den Titel des Buttons wo draufsteht "Alles Blau" zu "Alle Paragraphen blau" -> IM HTML.
// 2.Füge ein neues Click-Event zu diesem Buttom hinzu.Dafür hole Dir vorher den Button in den JS_Code.
//3. Wenn der Nutzer auf den Butten clickt, sollen alle Paragraphen blau werden.Nutze dafür die Methode  getElementsByClassName.Nutze auch Google ,um Dir die Funktionsweise dieser Methode gefügig zu machen.



// ich hole mir dir Verbindung zum HTML(DOM)
const allesBlauObj = document.getElementById('allesblau');
allesBlauObj.onclick = function () {
    const alleParaObj = document.getElementsByClassName('blogeintrag');
    for (var i = 0; i < alleParaObj.length; i++) {
        alleParaObj[i].style.backgroundColor = 'yellow';
        alleParaObj[i].style.color = 'blue';
    }

}



const neuerblogeintragObj = document.getElementById('neuerblogeintrag');
neuerblogeintragObj.onclick = function () {

    const newParagraph = document.createElement('p');
    newParagraph.className = 'blogeintrag';
    newParagraph.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora cupiditate sequi necessitatibus possimus
    odit earum!`;

    // wir holen das content Div 
    // in den JS code
    const contentObj = document.getElementById('content');

    // wir hängen den neuen Paragraphen
    // an den content Div dran
    contentObj.appendChild(newParagraph);
}

const zufallParaObj = document.getElementById('neuerZufallsParagraph');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


zufallParaObj.onclick = function () {
    // wir erstellen hier ein neues
    // p-Element
    const newParagraph = document.createElement('p');
    newParagraph.className = 'blogeintrag';

    let rgb1 = Math.round(Math.random() * 256);
    let rgb2 = Math.round(Math.random() * 256);
    let rgb3 = Math.round(Math.random() * 256);

    let arrayWörter = ['hallo', 'world', 'wie', 'geht', 'es'];
    for (let i = 0; i <= 20; i++) {
        newParagraph.innerHTML = newParagraph.innerHTML + ' ' + arrayWörter[Math.floor(Math.random() * arrayWörter.length)];
        // newParagraph.style.backgroundColor=getRandomColor();

        newParagraph.style.backgroundColor = `rgb(${rgb1},${rgb2},${rgb3})`
    }

    // wir holen das content Div 
    // in den JS code
    const contentObj = document.getElementById('content');

    // wir hängen den neuen Paragraphen
    // an den content Div dran
    contentObj.appendChild(newParagraph);
}


//////////////////////////////////////////////////////7
const entfernPara = document.getElementById('paragraph_entfernen');
entfernPara.onclick = function () {
    var element = document.getElementsByClassName("blogeintrag");
    console.log(element);
    console.log(element[element.length - 1]);
    if (element.length > 0) {
        element[element.length - 1].remove();
    } else {
        alert("kein Element zu löschen::!");
    }

}