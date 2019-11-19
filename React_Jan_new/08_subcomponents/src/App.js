import React, {
  Component
} from 'react';
import './App.css';

import A from './A';
import B from './B';

class App extends Component {
  render() {
    return (
      <div>
       Hallo World ...App!
      <A> </A> {/* output : hallo from Component A  */}
      <B></B>
      </div>
    );
  }
}

export default App;