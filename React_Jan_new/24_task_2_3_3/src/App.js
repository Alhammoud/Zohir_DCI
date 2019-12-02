import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import User from './User'
class App extends Component {
  
  state = {
    users: [
      {name: 'paul', id:'1', checked:true},
      {name: 'bob', id:'2' ,checked:false},
      {name: 'rebecca', id:'3' ,checked:false},
      {name: 'peter', id:'4' ,checked:false},
      {name: 'sandra', id:'5' ,checked:false}
    ],
    inputValue:""
  }


    // Input Listener (onchange) mit map und ternary Operator
  // Logik:
  // Bei jeder Änderung des Inputfeld wird überprüft, welches
  // Objekt des Arrays users im state betroffen ist und der Value 
  // des keys "name" (dieses Objekts) wird e.target.value
  // überschrieben und im neuen Array changedUser gespeichert.
  // Dann wird mit setState() im state der key users mit dem Wert 
  // von changedUser überschrieben und dadurch gerendert.
  // Außerdem wird key inputvalue mit dem e.traget.value
  // überschrieben, um den Value des input-Feldes zu setzen.



  inputListener = (e) => {
    let changedUser = this.state.users.map(element => element.checked ? {
      name: e.target.value,
      id: element.id,
      checked: true
    } : {
      name: element.name,
      id: element.id,
      checked: false
    }) // end map methode

    this.setState({users:changedUser, inputValue:e.target.value,  
    })   
  }


  // // Input Listener mit mit For-Elem-Schleife, .push() und 
  // // if-condition
  // // gleiche Logik wie oben

  // inputListener = (e) => {
  //   let changedUser = [...this.state.users];
  //   for (let elem of changedUser) {
  //     if(elem.checked) {
  //       elem.name = e.target.value    
  //     }
  //     this.setState({users:changedUser,
  //                   inputValue:e.target.value,  
  //     })
  //   }  
  // }



  // User select (onchange) mit map und ternary Operator
  // Logik:
  // Bei jedem click auf einen User wird überprüft, welches
  // Objekt des Arrays users im state betroffen ist und der Value 
  // des keys "checked " (dieses Objekts) wird auf true gesetzt und
  // bei den anderen Objekten auf false.
  // Alle User werden im neuen Array changedUser gespeichert.
  // Dann wird mit setState() im state der key users mit dem Wert 
  // von changedUser überschrieben und dadurch gerendert.
  // Außerdem wird key inputvalue mit einem leeren String 
  // überschrieben, um das input-Feldes leer zu machen.



  selectUser = (index) => {
    const newUsers = this.state.users.map((element) => element.id===index? {
      name: element.name,
      id: element.id,
      checked: true
    } : {
      name: element.name,
      id: element.id,
      checked: false
    })
    this.setState({
      users:newUsers,
      inputValue:""
    })
  }



    // // User select mit mit For-Elem-Schleife, .push() und 
  // // if-condition
  // // gleiche Logik wie oben

  // selectUser = (index) => {

  //   const newUsers = [];

  //   for (let elem of this.state.users) {
  //     if (elem.id === index) {
  //       newUsers.push(
  //         {
  //           name: elem.name,
  //           id: elem.id,
  //           checked: true
  //         }
  //       )
  //     } else {
  //       newUsers.push(
  //         {
  //           name: elem.name,
  //           id: elem.id,
  //           checked: false
  //         }
  //       ) 
  //     }
  //   }
  //   this.setState({users: newUsers,
  //                 inputValue:""
  //   })

  // }



  // Render-Methode, rendert einmal das Input-Feld den Props givenValue und 
  // InputlistenerHandler und rendert durch das Mappen des Arrays users im State
  // die entsprechende Anzahl (users.lenght) an usern mit den 
  // entsprechenden Props name, selectUserHandler und checked 
  // an usern.




  render() {
    return (
      <div>

        <Input 
        givenValue = {this.state.inputValue} 
        inputListenerHandler = {this.inputListener}
        autFoc = "autofocus">
        </Input>

        {this.state.users.map(element => 
        <User 
        name={element.name} 
        selectUserHandler = {this.selectUser} 
        id={element.id} 
        key={element.id}
        checked={element.checked} />)}

        {


       /*  this.state.users.map((radio,index)=>
          <div key={index}>
            <label htmlFor={index}>
              
            <Input
                        id={'Ga-radio-input'}
                        key={'Ga-radio-input'}
                        onChange={this.handleRadioInputChange}
                        name={'Ga-radio-input'}
                        value={this.state.radioInputValue}
                    />,

              
              <input id={index} 
              name="radioButtons" 
              type="radio" 
              value={index}
              onChange={()=>this.selectRadio(index)} 
              checked={radio}/>

               {this.state.users[index].name}

            </label>
          
          </div>) */
            }

      </div>
    );
  }
}

export default App;