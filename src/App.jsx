import React from 'react';
import ReactDOM from 'react-dom';
import Collection from './Collection.jsx';

const contentNode = document.getElementById('contents');

//asdsd 
//ReactDOM.render(<IssueList />, contentNode); // Render the component inside the content Node 

const contentNode2 = document.getElementById('contents2');
ReactDOM.render(<Collection />, contentNode2); // Render the component inside the content Node 

if (module.hot) {
    module.hot.accept();
}