const adduserObj = document.getElementById('adduser');
const nameObj = document.getElementById('name');
const emailObj = document.getElementById('email');
const usertableObj = document.getElementById('usertable');

// emailObj wird immer
// document.getElementById bleiben
//
// passiert NIEMALS:
// emailObj = null; // NICHT OKAYzuweisung
// emailObj = 3;
//
// emailObj.x = 3 // OK, mutation

function randomString(length) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz1234567890';
    const alphaArray = alpha.split('');
    let str = '';
    for(let i=0;i<length;i++) {
        str += alphaArray[ Math.floor(Math.random() * alpha.length) ];
    }

    return str;
}

adduserObj.onclick = function() {
    const newTr = document.createElement('tr');
    const newTdName = document.createElement('td');
    const newTdEmail = document.createElement('td');
    const newTdId = document.createElement('td');

    newTdName.innerText = nameObj.value;
    newTdEmail.innerText = emailObj.value;
    const id = randomString(12);
    newTdId.innerText = id;
    
    newTr.appendChild(newTdName);
    newTr.appendChild(newTdEmail);
    newTr.appendChild(newTdId);
    newTr.setAttribute('data-id', id);

    // X button erstellen
    const newXBtn = document.createElement('button');
    newXBtn.innerText = 'X';
    newXBtn.onclick = function() {
        const trToDelete = document.querySelector(`[data-id="${id}"]`);
        trToDelete.remove();
    }
    newTdBtn = document.createElement('td');
    newTdBtn.appendChild(newXBtn);
    newTr.appendChild(newTdBtn);

    usertableObj.appendChild(newTr);
}
