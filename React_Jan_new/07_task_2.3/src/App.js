import React, {
  Component
} from 'react';
import './App.css';

class App extends Component {
  render() {
    const letters='abcdefghijklmno'
    const arr_cahrs=letters.toUpperCase().split('').map((e) => <div className="box"> {e} </div>);
    console.log(arr_cahrs);
    return (
     <div>

        <div className= "header">
            Hallo World ...!
        </div>

        <div className= "main">
        
        {/* {arr_cahrs.map((e) => <div className="box"> {e} </div>)} */}
        {arr_cahrs}
        </div>

     </div>
    );
  }
}

export default App;