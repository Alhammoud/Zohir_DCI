import 'bootstrap/dist/css/bootstrap.min.css';
/* import $ from 'jquery';
import Popper from 'popper.js'; */
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import HelloWorld from './HelloWorld';
import Myheading from './MyHeading';
import * as serviceWorker from './serviceWorker';

import MyComponent from './MyComponent';

// ReactDOM.render(<Myheading />, document.getElementById('heading'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<HelloWorld />, document.getElementById('hello-world'));
/* ReactDOM.render(<Myheading paragraphText="A paragraph will be added (paragraphText)"/>,document.getElementById('heading')); */

/* ReactDOM.render(<Myheading paragraphText="Hallo agian !! (paragraphText)">
                        <HelloWorld/> 
                        <HelloWorld/>           
                </Myheading>
,document.getElementById('heading')); */

/* ReactDOM.render(<Myheading>
                        <HelloWorld/> 
                        <HelloWorld/>           
                </Myheading>
,document.getElementById('heading')); */

ReactDOM.render(<Myheading>
    <HelloWorld/> 
    <MyComponent/>           
</Myheading>
,document.getElementById('heading'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();