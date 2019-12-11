import React, {Component} from 'react';
import './App.css';
import { MyProvider , MyContext} from './context'
import A from './A'
import C from './C'


class App extends Component {

  render() {
    return (

      <MyProvider>

        <MyContext.Consumer>

          {

            () => (

            <div className='divApp'>
              Hallo From App.js: <br/> <br/>
              <A/> <br/> <br/>
              <C/> <br/> <br/>
            </div>

            )

          }

        </MyContext.Consumer>

      </MyProvider>
    );
  }
}

export default App;