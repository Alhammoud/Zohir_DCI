import React from 'react';
//import logo from './logo.svg';
import './App.css';
import FruitComponentsHeadline from './FruitComponentsHeadline';
import AllFruits from './AllFruits'

function App() {
  return (<React.Fragment>
    <FruitComponentsHeadline />
    <AllFruits name="Apple"/>
    <AllFruits name="Mango"/>
    <AllFruits name="Banana"/>
    <AllFruits name="Lemon"/>
    </React.Fragment>
    )}

export default App;
