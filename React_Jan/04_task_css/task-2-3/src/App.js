import React, {Component} from 'react';
import './App.css';



class App extends React.Component {

  render() {

    const letters = 'abcdefghjiklmnop';
    const newLetters = letters.replace("i","");
    const arrOfChars = newLetters.toUpperCase().split('');
    console.log(arrOfChars);

    let boxs =[];

    for (let i=0;i<arrOfChars.length;i++){
        boxs.push( <div className='box'>{arrOfChars[i]}</div>)
      }

    return (
      <div className='contiener'>
            <div className='header'>
                Header
            </div>

            <div className='mainContierer'>
                {boxs}
            </div>
      </div>
    );
  }
}

export default App;

