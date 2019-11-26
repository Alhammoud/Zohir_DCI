import React, {
  Component
} from 'react';
import './App.css';

import Main from './Main';
import Header from './Header';
import RightSidebar from './RightSidebar';


class App extends Component {
  render() {
    return (
/* 
      <div className="app">
        <div className="header">
          Header
        </div>
        <div className="container">
          <div className="main"> 
            Main
          </div>
          <div className="right-sidebar">
            Right Sidebar
          </div>

        </div>

      </div> */

      <div className="app">
          <Header></Header>
       <div className="container">
          <Main></Main>
          <RightSidebar></RightSidebar>
       </div>
       
      </div>
    );
  }
}

export default App;