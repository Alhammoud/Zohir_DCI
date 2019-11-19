import React, {Component} from 'react';
/* import logo from './logo.svg'; */
import './App.css';
/* import { directive } from '@babel/types'; */

class App extends Component {

  render() {

    // Aufgabe :
    //          1. Stelle die Nutzer in einer Tablle dar .          2- Stelle nur
    // die deutschen Nutzer in einer Tabelle dar.

    const users = [
      {
        money: 150,
        name: 'paul',
        country: 'ierland',
        born: 1995
      }, {
        money: -50,
        name: 'paul',
        country: 'germany',
        born: 1990
      }, {
        money: 20,
        name: 'paul',
        country: 'denmark',
        born: 1988
      }, {
        money: 550,
        name: 'paul',
        country: 'germany',
        born: 1982
      }, {
        money: 5,
        name: 'paul',
        country: 'germany',
        born: 1972
      }, {
        money: 1040,
        name: 'paul',
        country: 'uk',
        born: 1999
      }, {
        money: -500,
        name: 'paul',
        country: 'usa',
        born: 1991
      }, {
        money: 0,
        name: 'paul',
        country: 'syrien',
        born: 1980
      }
    ]

    /*     createTable = () => {

      let table = []
      for (let i = 0; i < rows.length; i++) {
        let children = []
        children.push(<td>{rows[i]}</td>, <td>{<SimpleListMenu />}</td>)
        table.push(<tr>{children}</tr>)
      }
      return table

    }
 */

    for (let index = 0; index < users.length; index++) {}

    /*   let rows = [];
    for (var i = 0; i < this.state.size; i++){
      let rowID = `row${i}`
      let cell = []
      for (var idx = 0; idx < this.state.size; idx++){
        let cellID = `cell${i}-${idx}`
        cell.push(<td key={cellID} id={cellID}></td>)
      }
      rows.push(<tr key={i} id={rowID}>{cell}</tr>)
 */
    return (
      <div>
        Hallo World ...! {/* <table id="simple-board">
               <tbody>
                 {rows}
               </tbody>
        </table> */}
        <h2>USers
        </h2>
        <table>
          <tr>
            <th>Name</th>
            <th>Money</th>
            <th>Country</th>
            <th>Born</th>
          </tr>
          {users.map((user) => <tr>
            <th>{user.name}</th>
            <th>{user.money}</th>
            <th>{user.country}</th>
            <th>{user.born}</th>
          </tr>)}
          {/* {this.createTable()} */}
        </table>

        <h2>Deutsche USers
        </h2>
        <table>
          <tr>
            <th>Name</th>
            <th>Money</th>
            <th>Country</th>
            <th>Born</th>
          </tr>
          {users.map((user) => {
            if (user.country === "germany") {
              return <tr>
                <th>{user.name}</th>
                <th>{user.money}</th>
                <th>{user.country}</th>
                <th>{user.born}</th>
              </tr>
            }
          })}

        </table>

      </div>
    );
  }
}

export default App;