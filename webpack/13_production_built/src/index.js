import './index.html';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
/* 
import imageobj from './images/berge_meer.jpg'
 */
// dom manipulation

const mainobj = document.getElementById('main');

mainobj.innerHTML = '<h2>Hallo World </h2>';

const successBtn = `<button type="button" id="climateBtn" class="btn btn-success climateBtn">Klima retten - JETZT</button>`;

mainobj.innerHTML += successBtn;

const image = `<img src="./images/berge_meer.jpg" alt="">`;
mainobj.innerHTML += image;

const climateBtnObj = document.getElementById('climateBtn');
climateBtnObj.onclick = async () => {
    const result = await fetch('http://localhost:3000/halloworld');
    const data = await result.json();
    alert('Message received = ' + data.message);

}

/* ERROR in frontend :

Access to fetch at 'http://localhost:3000/halloworld' from origin 'http://localhost:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

index.js:36 Uncaught (in promise) TypeError: Failed to fetch

*/