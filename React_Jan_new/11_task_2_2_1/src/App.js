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

  componentDidMount(){

    /* Add an interval that adds a new randomstring to
    randomstrings array every second. */
   /*  let counter = 0; */
    /* setTimeout( */
     setInterval( 

      () => {

        function getRandomColor() {
          var letters = '0123456789ABCDEF';
          var color = '#';
          for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        }

        var styles_li = {

          backgroundColor: getRandomColor(),
          color: getRandomColor(),
           /*  display: 'inline-block', */
            marginTop:5+'px' ,
            fontSize: 'large',
            width:' 50%'
            /* listStyleType:' circle' */

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

        /* if(counter>10){
              //counter=0;
              this.setState({
                randomstrings:[this.state.randomstrings.pop()]
              });
            counter++;

      }else{

            this.setState({
              randomstrings:[...this.state.randomstrings,strHTML]
                 });
            counter++;
            console.log('randomstrings');
            console.log(this.state.randomstrings);

            console.log('counter');
            console.log(counter);

          } */
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