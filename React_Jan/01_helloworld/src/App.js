import React from 'react';
// import logo from './logo.svg';
import './App.css';

/*  wir erstellen eine Klasse ,die Variablen und Methoden 
     vom Prototypen der Component-klasse erbt. */

class App extends React.Component{


  /* const name2='Stefan'; */ //falsch

  // wird später zu einem Key-Value paar 
  name2='Stefan';

  /* constructor(){
    
  } */

  render(){

    const name = 'Larry';
    const show=true;

    let dateObj= new Date();


    let grüße=()=>{
      let grüßeString='';
      let hour = dateObj.getHours();
      let x=true;
      console.log('hour');
      console.log(hour);
      switch (x) {
        case (hour>=5 && hour<12):
          grüßeString='Guten Morgen ..!!';
          break;
        case(hour>=12 && hour<17):
        grüßeString='Guten Tag ..!!';
          break;
        case (hour>=17 && hour<24):
          grüßeString='Guten Abend ..!!';
          break;
        case (hour>=24 && hour<5):
          grüßeString='Gute Nacht ..!!';
          break;
      
        default:
          grüßeString='Hallllllloooooooo von grüße() Funktion';
          break;
      }
      return grüßeString;

    } // end von Funktion grüße() 



    /* if(show === true){ <h2>Dont Show me ..1 </h2> }else{ return null; }  javaScript Code geht hier  */

    return (
      <div>
        Hallo World .....!  <br/>
        <br/>

        {/* Hallo {name} und hallo {name2};  error : 'name2' is not defined  no-undef */}

        Hallo {name} und hallo {this.name2};<br/>

        {/* hallo { if(true) 'Hallo ' -> hier geht nicht  */}
        Hallo {name.toLocaleUpperCase()} <br/>
        1+1={2} <br/>
        1+1={1+1} <br/>

        {null} {/* null wird nicht gezeigt */}
        {false} {/* false wird nicht gezeigt */}

        <h2> Show me .. 1 </h2> <br/>
        {<h2> Show me ..2 </h2> } <br/>


        {/* Conditional Rendering */}
        { show ?  <h2>Dont Show me ..1 </h2> : null }

        {/* if(show === true){ <h2>Dont Show me ..1 </h2> }else{ return null; } 
              javaScript Code geht hier gar nicht */}

        <br/>

       {/*  // Aufgabe :
            //
            // Erstelle eine persönliche Begrüssung. z.B. in einem H2-Tag 
            //
            // 1) Finde heraus, was die aktuelle Uhrzeit ist .
            // 2)
            //   Falls die UhrZeit zw. 05:00 - 11:59 -> "Guten Morgen"
            //   Falls die UhrZeit zw. 12:00 - 16:59 -> "Guten Tag"
            //   Falls die UhrZeit zw. 17:00 - 23:59 -> "Guten Abend"
            //   Falls die UhrZeit zw. 00:00 - 04:59 -> "Gute Nacht"
            //
            //   Tipp : es ist alles Jvascript .
            //          Google nach dem Weg die aktuelle Uhrzeit herauszufinden  */}
        {grüße()}
        {<h2> Eine persönliche Begrüssung ....! </h2> } <br/>
         Die aktuelle Zeit ist : {dateObj.getHours()} : {dateObj.getMinutes()} Uhr 
        {(dateObj.getHours()>=5 && dateObj.getHours()<12)? <h3>  "Guten Morgen </h3> :null }
        {(dateObj.getHours()>=12 && dateObj.getHours()<17)? <h3> "Guten Tag" </h3> :null }
        {(dateObj.getHours()>=17 && dateObj.getHours()<24)? <h3> "Guten Abend" </h3> :null }
        {(dateObj.getHours()>=24 && dateObj.getHours()<5)? <h3> "Gute Nacht" </h3> :null }


      </div>  
    );
  } // end Methode render()

}// end class App (App ist ein Component )


// wird später zu :
//
// let App = { name2: 'Stefan' , render:() => {}}


export default App;



/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */