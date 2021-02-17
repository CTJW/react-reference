import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// This ReactDOM function call renders the App component
// and all it's childen to the root element
// this can be found in the public folder

// More can be read here
// https://reactjs.org/docs/rendering-elements.html
ReactDOM.render(<App />, document.querySelector('#root'));
