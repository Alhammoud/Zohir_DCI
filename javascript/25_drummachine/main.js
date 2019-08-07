


// const btn1Obj = document.getElementById('btn1');
// const btn2Obj = document.getElementById('btn2');
// const btn3Obj = document.getElementById('btn3');
// const btn4Obj = document.getElementById('btn4');
// const btn5Obj = document.getElementById('btn5');
// const btn6Obj = document.getElementById('btn6');

let btnArr = [];
for (let i = 0; i < 6; i++) {
    btnArr.push(document.getElementById(`btn${i}`));
}
console.log(btnArr);

// const btn1song = new Audio('song.mp3');
// var btn1song = new Audio('808_drum_kit/kicks/0015.wav');
console.log(btn1song);
// const btn2song = new Audio('808_drum_kit/kicks/0018.wav');
// const btn3song = new Audio('808_drum_kit/snares/0027.wav');
// const btn4song = new Audio('808_drum_kit/snares/0020.wav');
// const btn5song = new Audio('808_drum_kit/percussion/0013.wav');
// const btn6song = new Audio('808_drum_kit/percussion/0012.wav');

let btnsongsArr = [];

btnsongsArr.push(new Audio('808_drum_kit/kicks/0015.wav'));
btnsongsArr.push(new Audio('808_drum_kit/kicks/0018.wav'));
btnsongsArr.push(new Audio('808_drum_kit/snares/0027.wav'));
btnsongsArr.push(new Audio('808_drum_kit/snares/0020.wav'));
btnsongsArr.push(new Audio('808_drum_kit/percussion/0013.wav'));
btnsongsArr.push(new Audio('808_drum_kit/percussion/0012.wav'));

console.log(btnsongsArr);

// btn1song.src = 'song.mp3';
// console.log(btn1song);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const boxButton1 = document.getElementById('btn1');
const boxButton2 = document.getElementById('btn2');
const boxButton3 = document.getElementById('btn3');
const boxButton4 = document.getElementById('btn4');
const boxButton5 = document.getElementById('btn5');
const boxButton6 = document.getElementById('btn6');


btn1Obj.onclick = function () {
    boxButton1.style.backgroundColor = getRandomColor();
    // if (btn1song.currentTime !== 0) {
    //     btn1song.pause();
    //     btn1song.currentTime = 0;
    // }
    btn1song.pause();
    btn1song.currentTime = 0;
    btn1song.play();
}
btn2Obj.onclick = function () {
    boxButton2.style.backgroundColor = getRandomColor();
    if (btn2song.currentTime !== 0) {
        btn2song.pause();
        btn2song.currentTime = 0;
    }
    btn2song.play();
}
btn3Obj.onclick = function () {
    boxButton3.style.backgroundColor = getRandomColor();
    if (btn3song.currentTime !== 0) {
        btn3song.pause();
        btn3song.currentTime = 0;
    }
    btn3song.play();
}
btn4Obj.onclick = function () {
    boxButton4.style.backgroundColor = getRandomColor();
    if (btn4song.currentTime !== 0) {
        btn4song.pause();
        btn4song.currentTime = 0;
    }
    btn4song.play();
}
btn5Obj.onclick = function () {
    boxButton5.style.backgroundColor = getRandomColor();
    if (btn5song.currentTime !== 0) {
        btn5song.pause();
        btn5song.currentTime = 0;
    }
    btn5song.play();
}
btn6Obj.onclick = function () {
    boxButton6.style.backgroundColor = getRandomColor();
    if (btn6song.currentTime !== 0) {
        btn6song.pause();
        btn6song.currentTime = 0;
    }
    btn6song.play();
}

window.addEventListener("keydown", function (event) {
    console.log(event);
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }
    console.log(event.key + ' ' + event.keyCode);

    switch (event.key) {
        case "1":
            // 11boxButton1.style.backgroundColor = getRandomColor();
            // if (btn1song.currentTime !== 0) {
            //     btn1song.pause();
            //     btn1song.currentTime = 0;
            // }
            // btn1song.play();
            btn1Obj.onclick();
            break;
        case "2":
            btn2Obj.onclick();
            break;
        case "3":
            btn3Obj.onclick();
            break;
        case "4":
            btn4Obj.onclick();
            break;
        case "5":
            btn5Obj.onclick();
            break;
        case "6":
            btn6Obj.onclick();
            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);
  // the last option dispatches the event to the listener first,
  // then dispatches event to window