import React, {
  Component
} from 'react';

import './App.css';

import Header from './components/header/Header';
import Post from './components/post/Post'

class App extends Component {


  render() {

    return (
      
       <div className="App">

            <Header />

            <section className="App-main">
              <Post nickname="Tim" avatar="" caption=" Moving the community!" image="./src/1.png" />
              <Post nickname="lara" avatar="" caption=" Holding a mic" image="2.jpeg" />

            </section>
          </div>

    );
  }
}

export default App;