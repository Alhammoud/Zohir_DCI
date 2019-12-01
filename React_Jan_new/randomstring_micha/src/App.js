import React, {Component} from 'react';
import './App.css';
import randomstring from 'randomstring'

class App extends Component {
  state = {}
  constructor(props) {
    super(props);
    this.state.randomstrings = []
  }
  componentDidMount() {
    let allBoxes = [];

    function myFunction(){
      let rgb = []
      for (var i = 0; i < 3; i++) {
        let r = Math.floor(Math.random() * 256)
        rgb.push(r)
      } // end for-schleife

      var styles = {
        backgroundColor: `rgb(${rgb})`,
        /* position: 'absolute',
            top: `${Math.random()*1080}px`,
            left: `${Math.random()*1920}px`,
            display: 'inline-block',
            padding: `${Math.random()*50}px`,
            margin: `${Math.random()*10}px`,
            fontSize: `${Math.random()*20+5}px`,
            transform: `rotate(${Math.random()*360}deg)`,
            borderRadius: `${Math.random()*20}px`,
            opacity: `${Math.random()}` */
      };

      let strHTML = <div className='box' style={styles} key={randomstring.generate(20)}> {i} </div>
    allBoxes.push(strHTML);
      this.setState({randomstrings: allBoxes})

    };


      let startCountDown =(i, p, f) => {
        var pause = p;
        var fn = f;
        fn();
        (i) => {
        //  write out count
        console.log(i);
        if (i === 0) {
          setTimeout(function() {
            allBoxes.pop();
            this.setState({randomstrings: allBoxes});
                  //  repeat
                 i--
          }, pause);
        //  execute function
            startCountDown(5, 1000, myFunction);
            //  stop
            return;
        }
    }// end function


    //  set it going
    console.log(i);
    }// end  startCountDown()
    
 
    



    startCountDown(5, 1000, myFunction);

    /* },50) */ // end setInterval
  } // end componentDidMount()
  render() {
    return (
      <div className='content'>
        {this
          .state
          .randomstrings
          .map((string) => string)}
      </div>
    );
  }
}
export default App;