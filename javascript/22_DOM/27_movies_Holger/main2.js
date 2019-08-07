const liObjects = document.getElementsByTagName(`li`);
const rockyObjects = document.getElementsByClassName(`rocky`);
console.log(liObjects);

for (let k = 0; k < liObjects.length; k++) {
    liObjects[k].onclick = function () {
        moviechoise(k);
    }
}

function moviechoise(helper) {

    for (let i = 0; i < liObjects.length; i++) {
        if (helper === i) {
            liObjects[i].classList.add(`active`);
            rockyObjects[i].style.display = `block`;
        } else {
            liObjects[i].classList.remove(`active`);
            rockyObjects[i].style.display = `none`;
        }
    }
}
