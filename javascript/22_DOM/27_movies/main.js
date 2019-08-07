
const liObjs = document.getElementsByTagName('li');
console.log(liObjs);

const movieArray = document.getElementsByClassName('bild');
console.log(movieArray);

for (let c = 0; c < liObjs.length; c++) {
    liObjs[c].onclick = function () {


        liObjs[c].classList.add('selected');
        changeMovie(c);
    }
    console.log(liObjs[c]);
}

function changeMovie(index) {
    for (let i = 0; i < liObjs.length; i++) {
        if (index == i) {
            console.log(movieArray[i]);
            movieArray[i].sty
        }
        else {

            liObjs[i].classList.remove('selected');
            console.log(liObjs[i]);

            movieArray[i].style.opacity ='1';
            console.log(movieArray[i]);
        }
    }
}