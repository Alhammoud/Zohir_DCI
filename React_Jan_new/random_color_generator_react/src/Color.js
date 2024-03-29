import React from 'react';


export default class Color extends React.Component {
  
    render () {
      let style = {
        backgroundColor: this.props.hexCode
      }
      return (
        <div className="color" onClick={this.props.update.bind(this, this.props.index)} style={style}>
          <p className="color__code">
            {this.props.hexCode}
          </p>
        </div>
      );
    }
  };

   