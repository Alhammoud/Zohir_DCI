import React, {Component} from 'react';

import { Button } from 'reactstrap';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */


import Form_component_reactstap from './Form_component_reactstap';

class App extends Component {
  render() {
    return (
      <div>
       Hallo World ...! <br/>
       <Button color="danger">Danger!</Button>
        <Form_component_reactstap></Form_component_reactstap>

      </div>
    );
  }
}

export default App;