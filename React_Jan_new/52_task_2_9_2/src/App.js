import React, {
  Component
} from 'react';
import './App.css';

class App extends Component {

  iframeRef = React.createRef();
  
  componentDidMount(){
    this.iframeRef.current.src="https://www.youtube.com/embed/fAEBNEscL0c?autoplay=1&enablejsapi=1&loop=1&playlist=fAEBNEscL0c";
  }   


 /*  changeSrc_A(){

  falsch , es muss arrow fun sein  wie unten
  
  } */ 
  changeSrc_A (){
    console.log(this.iframeRef)
    this.iframeRef.current.src = "https://www.youtube.com/embed/ScmFET4qoGE?autoplay=1&enablejsapi=1&loop=1&playlist=ScmFET4qoGE";
  } 

  render() {
    return (
      <div>
        <iframe width="560" height="315" ref={this.iframeRef } src="" title='1' allow="accelerometer; autoplay;" allowFullScreen> </iframe>       
        <button onClick={()=>this.changeSrc_A()}>Play Song A</button>
      </div>
    );
  }
}

export default App;