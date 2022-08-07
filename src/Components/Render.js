import React from 'react';
import renderHTML from 'react-render-html';
import { htmlData, htmlData1, htmlData2 } from './Htm;data';

const Render = () => {
    const data = htmlData;
    const data1 = htmlData1 ; 

    return (
        <div style={{
            margin : 'auto' , 
            alignItems : 'center'
        }}>
            {renderHTML(data)}
            {renderHTML(data1)}
            {renderHTML(htmlData2)}
        </div>
    )
}

export default Render