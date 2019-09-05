import React from 'react';
/* import ReactDOM from 'react-dom';
 */

import PropTypes from 'prop-types';



class MyHeading extends React.Component {
    render() {
        // Außerhalb des Fragments Zugriff auf die Properties
        //const myProps= (props)=>(<p>(props.propName)</p>);
        const title=`A header will be rendered by varibal title`;
        const titles=[`A header will be rendered by varibal title`,'halloooo','hallocheeen'];

        const showParagraph=true;
        return (
            //    <div>
            //     <h1>A header will be rendered</h1>
            //     <p>A paragraph will be added</p>
            //    </div>

            <React.Fragment>
            < h1 > A header will be rendered </h1> 
            <p > A paragraph will be added </p> 
            
            {/* kommentar im React */}
            
            < h1 > {title} </h1> 
            < h1 > {titles[0]} </h1> 

            {/*{titles.map((title,index)=> < h1 key={index}>  {title} </h1> )}*/ }
            {titles.map((title,index)=> <h1  key={index}>  {title} </h1> )}

            {/* Conditonl im React */}
            <p>Conditonl im React </p> 
            {/* {showParagraph && <p> A paragraph will be added !!!</p>}  */}
            {showParagraph && <p> {this.props.paragraphText}</p>} 
            {/* children im property */}
            {this.props.children}
            </React.Fragment>
        );
    }
}

MyHeading.propTypes ={
    paragraphText: PropTypes.string.isRequired
};

//ReactDOM.render(<MyHeading paragraphText="A paragraph will be added"/>,document.getElementById('heading'));
 export default MyHeading;