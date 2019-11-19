// Aufgabe :
// 
// Wenn der Nutzer auf Count to 5 callbacks klickt, 
// sollen die Zahlen 1 bis 5 mit 1-sekündikigen Abstand als h1 element dem numbers-div hinzugefügt werden 
//
// Tipp: benitze setTimeout

const divObj = document.getElementById('numbers');
const button1Obj = document.getElementById("button1")
let counter = 1;
let action = 1;




const countdownCallbacks = () => {
    divObj.innerHTML += `<h1>${counter}</h1>`;
    counter++;
    if (counter <= 5) {
        setTimeout(countdownCallbacks, 1000);
    } else {
        counter = 1;
    }
}
button1Obj.addEventListener('click', () => {
    if (action === 1) {
        countdownCallbacks();
        action = 2;
    } else {
        divObj.innerHTML = '';
        countdownCallbacks();
    }
});


document.querySelector('button')[
    document.addEventListener ? 'addEventListener' : 'attachEvent'
]('click', function () {
    this.style.backgroundColor = this.style.backgroundColor === 'blue' ?
        'red' : 'blue';
});


const countdownPromise = () => {
    return new Promise((resolve, rejected) => {
        setTimeout(
            () => {
                // hier ist der Promise resolved
                divObj.innerHTML += `<h1>${counter}</h1>`;
                counter++;
                resolve();
                console.log("resolve");
                console.log(resolve);
            }, 1000)

    })
}
const countdownPromises = () => {
    countdownPromise()
        .then(countdownPromise)
        .then(countdownPromise)
        .then(countdownPromise)
        .then(countdownPromise)
}

const countdownAsyncAwait = async () => {
    await countdownPromise();
    await countdownPromise();
    await countdownPromise();
    await countdownPromise();
    await countdownPromise();
}