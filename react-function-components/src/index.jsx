import React from 'react';
import ReactDOM from 'react-dom';
function CustomButton(props) {
  return <button>Click me!</button>;
}
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<CustomButton />);
