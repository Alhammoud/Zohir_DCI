import React, {Component} from 'react'
import './App.css';

import randomstring from 'randomstring'
/* in terminal :  npm install randomstring */

export default class Article extends Component {
  render() {


    function random_string(l) {
        var text = "";
        var char_list = "ABCDEF GHIJKLMNO PQRSTUVWXYZabcdef ghijklmnopqrstu vwxyz 0123456789";
        for (var i = 0; i < l; i++) {
          text += char_list.charAt(Math.floor(Math.random() * char_list.length));
        }
        return text;
      }

      const str_randomstring = randomstring.generate(25);
    return (
      <div className="article">
         {/*  {'function random_string(l) '+ random_string(25)}
            {str_randomstring} */}
            {randomstring.generate(25)}
      </div>
    )
  }
}
