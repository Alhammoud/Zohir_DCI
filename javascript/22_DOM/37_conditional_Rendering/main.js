const btnHomeObj = document.getElementById('btnHome');
const btnInfoObj = document.getElementById('btnInfo');
const btnImpressumObj = document.getElementById('btnImpressum');

const homeObj = document.getElementById('home');
const infoObj = document.getElementById('info');
const impressumObj = document.getElementById('impessum');

btnHomeObj.onclick = function () {
    homeObj.style.display = 'block';
    infoObj.style.display = 'none';
    impressumObj.style.display = 'none';
}

btnInfoObj.onclick = function () {
    homeObj.style.display = 'none';
    infoObj.style.display = 'block';
    impressumObj.style.display = 'none';
}

btnImpressumObj.onclick = function () {
    homeObj.style.display = 'none';
    infoObj.style.display = 'none';
    impressumObj.style.display = 'block';
}