import React from 'react';
import ReactDOM from 'react-dom';
function CustomButton(props) {
  return <button>Click me!</button>;
}
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(CustomButton());
