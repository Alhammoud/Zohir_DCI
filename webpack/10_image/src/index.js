import './index.html';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

import imageobj from './images/berge_meer.jpg'

// dom manipulation

const mainobj = document.getElementById('main');

mainobj.innerHTML= '<h2>Hallo World </h2>';

const successBtn = `<button type="button" class="btn btn-success climateBtn">Klima retten - JETZT</button>`;

mainobj.innerHTML += successBtn;

const image =`<img src="${imageobj}" alt="">`;
mainobj.innerHTML += image;
