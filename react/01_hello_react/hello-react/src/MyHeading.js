import React from 'react';

class MyHeading extends React.Component {
    render() {
        const title=`A header will be rendered by varibal title`;
        const titles=[`A header will be rendered by varibal title`,'halloooo','hallocheeen'];

        const showParagraph=false;
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
            {showParagraph && <p> A paragraph will be added !!!</p>} 
            </React.Fragment>
        );
    }
}

export default MyHeading;