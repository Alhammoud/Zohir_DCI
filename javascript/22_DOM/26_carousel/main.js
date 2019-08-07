
const imagesArray = document.getElementsByClassName('img');
console.log(imagesArray);

const leftButtonObj = document.getElementById('left_side');
console.log(leftButtonObj);

const rightButtonObj = document.getElementById('right_side');
console.log(rightButtonObj);

let counter = 0;

leftButtonObj.addEventListener('click', function (ev) {
    counter++;
    if (counter === imagesArray.length) {
        counter = 0;
    } else {
        for (let i = 0; i < imagesArray.length; i++) {

            imagesArray[i].style.transform = `translate(${counter * -50}vw,0)`;

        }
    }

});

rightButtonObj.addEventListener('click', function () {
    counter--;
    if (counter < 0) {
        counter = imagesArray.length - 1;
    } else {
        for (let i = 0; i < imagesArray.length; i++) {

            imagesArray[i].style.transform =`translate(${counter * -50}vw,0)`;

        }
    }

});


