import React from 'react';
import ReactDOM from 'react-dom/client';
const element = React.createElement('div', null, 'Hello, React!');
console.log('element: ', element);
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(element);
