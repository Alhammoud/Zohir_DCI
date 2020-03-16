import React, {Component} from 'react';
import './App.css';
import randomstring from 'randomstring'

class App extends Component {

  /* Create a new state in the App component and add a new
     empty array „randomstrings“ to it. */

   state = {randomstrings :[]}

  /* constructor(){
    super();
    this.state.randomstrings =[]
  } */

  onRemoveItem = i => {
    this.setState(state => {
      const list = state.list.filter((item, j) => i !== j);
      return {
        list,
      };
    });
  };
  
 getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  componentDidMount(){

    /* Add an interval that adds a new randomstring to randomstrings array every second. */


      for(let i=0;i<10;i++){

      }


     setInterval( 

      () => {
        var styles_li = {
          backgroundColor: this.getRandomColor(),
          color: this.getRandomColor(),
            marginTop:5+'px' ,
            fontSize: 'large',
            width:' 50%'
        }

        let strHTML = <div key={Math.random()}>
                        <li style={styles_li} className='li' key={Math.random()} >
                           {randomstring.generate(Math.floor(Math.random()*25))} 
                        </li>
                      </div>;
      
        
      this.setState({
        randomstrings:[...this.state.randomstrings,strHTML]
           });
           console.log('randomstrings');
         console.log(this.state.randomstrings);

      },
      500
    );

  }

  render() {



   /*  const style_li = {
      color: getRandomColor(),
      backgroundColor: getRandomColor() 
    } */
      /*  
      
         <div>
          <div>
            {
              this.state.randomstrings.map(
                element =>
              <div key={Math.random()}>
                <li style={style_li} className='li' key={Math.random()} >
                  {element}
                </li>
              </div>)
            }
          </div>
      </div> 
      
      */
    return (
      <div>
       { this.state.randomstrings.map( (string) => string ) }
      </div>
    );
  }
}

export default App;