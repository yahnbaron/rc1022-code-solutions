import { React } from 'react';
import { ReactDOM } from 'react-dom/client';
const div = React.createElement('div', null, 'Hello, React!');
console.log('div: ', div);
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(div);
