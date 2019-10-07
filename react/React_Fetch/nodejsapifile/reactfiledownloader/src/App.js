// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Helpers from './Helpers.js';
class App extends Component {
  state = {
    loading: false, // to keep track of when form submitted
    errors: null, // for displaying errors
    file: '' // the file type the user chooses to download
  }

  handleSubmit = (event) => {
    this.setState({
      errors: null,
      loading: true,
    }, () => {
      Helpers.httpRequest(
        `http://localhost:5001?file=${this.state.file}`,
        'get',
      )
      .then((response) => {
        this.setState({
          loading: false
        });
      })
      .catch((error) => {
        error.json().then((json) => {
          this.setState({
            errors: json,
            loading: false
          });
        })
      });
    });
    
    event.preventDefault();
  } 

  handleChange = (event) => {
    this.setState({
      // substring to is to limit to 3 characters
      file: event.currentTarget.value.substring(0, 3)
    });
  }


  render() {
    const { loading, file } = this.state;
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-12">
              <header className="App-header">
                <h1 className="display-4 mt-4 mb-4">React File Downloader</h1>
                <p>This is to demonstrate the ability to download a file via an API request and interpret that file to automatically download on the client side.</p>
              </header>
               
              <main> 
              <form onSubmit={this.handleSubmit}>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">sample.</span>
                  </div>
                  <input disabled={loading} onChange={this.handleChange} className="form-control" value={file} type="text" name="file" placeholder="File type, ex csv, pdf, png, etc" autoComplete="off" />
                  <button disabled={loading} className="btn btn-primary">{(loading) ? 'Downloading...' : 'Download'}</button>                  
                </div> 
                {/* <form>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">sample.</span>
                    </div>
                    <input className="form-control" value={file} type="text" name="file" placeholder="File type, ex csv, pdf, png, etc" autoComplete="off" />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary">Download</button>
                  </div>
                */}
                </form> 
              </main>
 
            </div>
          </div>
        </div>
      </div>  
    );
  }
}
export default App;
