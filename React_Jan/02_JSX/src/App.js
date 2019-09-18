import React,{Component} from 'react'; // exportiert React-Component
// const = Component = React.Component

import './App.css';



class App extends React.Component {

  render() {

              //JSX -> Javavscript Extended (=Erweitert)
              const hallo1 = <div> Hallo </div>;
              const halloNoJSX = '<div> Hallo </div>';
              // hallo.insert('<h2>>Hi<h2>') --> Funktioniert nicht .
              // es gibt auch kein innerHTML bzw. innerText !

              const liste2 = <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                            </ul>;

              const liste4=[
                          /*   <li>1</li>,
                                <li>2</li>,
                                <li>3</li> */
                          ];

              liste4.push(<li>1</li>);
              liste4.push(<li>2</li>);
              liste4.push(<li>3</li>);
              /* 
              Aufgabe :

              Folgenden Date sind gegeben :
               */
              const user=[
                {money:150, name:'paul', country: 'germany', born:1995},
                {money:150, name:'sarah', country: 'uk', born:1990},
                {money:150, name:'bob', country: 'spain', born:1988},
                {money:150, name:'hans', country: 'germany', born:1982},
                {money:150, name:'julia', country: 'germany', born:1999},
                {money:150, name:'carl', country: 'denmark', born:1995},
                {money:150, name:'peter', country: 'germany', born:1991},
                {money:0  , name:'julia', country: 'ireland', born:1980},
              ];

              // 1. Stelle alle Nutzer in einer Tabelle dar.
              // 2. Zeige in einer zweiten Tabelle nur die deutschen Nutzer.

              let rowTablle=[<tr>
                                <th>Money</th>
                                <th>Name</th> 
                                <th>Country</th>
                                <th>Born</th>
                             </tr>];

              let nutzerDeutsche=[<tr>
                                      <th>Money</th>
                                      <th>Name</th> 
                                      <th>Country</th>
                                      <th>Born</th>
                                  </tr>];  

              for (let i=0;i<user.length;i++){
                rowTablle.push(<tr>
                                <th>{user[i].money}</th>
                                <th>{user[i].name}</th> 
                                <th>{user[i].country}</th>
                                <th>{user[i].born}</th>
                              </tr>)
              };

              for (let i=0;i<user.length;i++){
                if(user[i].country==='germany'){
                  nutzerDeutsche.push(<tr>
                    <th>{user[i].money}</th>
                    <th>{user[i].name}</th> 
                    <th>{user[i].country}</th>
                    <th>{user[i].born}</th>
                  </tr>)
                }
                
              };

            let germnayUser=user.filter(ele=>ele.country==='germany');
            console.log(germnayUser);

    return (
      <div>

        {hallo1}
        {halloNoJSX}

        <h2> List 1</h2>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

        <br/>
        <br/>

        <h2> List 2</h2>
        {/* <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul> */}
        {liste2}
        <br/>
        <br/>

        <h2> List 3</h2>
        <ul>
      {/*     {[
            <li>1</li>,
            <li>2</li>,
            <li>3</li>,
            <li>4{[
              <li>4.1</li>,
              <li>4.2</li>,
              <li>4.3</li>,
              <li>4.4</li>,
              ]}</li>,
            ]} */}
        </ul>

        <br/>
        <br/>

        <h2> List 4</h2>
        <ul>
          {liste4}
        </ul>

        <br/>
        <br/>

        <h2> List 5</h2>
        <ul>
          {
            liste4.map(element=>element)
            }
        </ul>

        <br/>
        <br/>

        <h2> Löusunf für 1  Aufgabe </h2>
        <table >
          {
            rowTablle
          }
        </table>
        

        <br/>
        <br/>

        <h2> Löusunf für 2 Aufgabe </h2>
        <table>
          {
            nutzerDeutsche
          }
        </table>


        <h2> Löusunf für 2 Aufgabe mit map() und filter() Funktionen  </h2>
        <table>
            <tr>
              <th>Money</th>
              <th>Name</th> 
              <th>Country</th>
              <th>Born</th>
            </tr>
            <tr>
              {nutzerDeutsche.map }
            </tr>
        </table>

        Hallo Welt von 02_JSX
      </div>
    );
  }
}
export default App;

