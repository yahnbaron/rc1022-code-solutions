import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const images = [
  'https://i.pinimg.com/originals/be/55/75/be5575843e24450ea6f5712036cd4055.jpg',
  'https://i.pinimg.com/originals/29/d8/ae/29d8ae9ae5b99fc5f78aa3276bd9d2a9.jpg',
  'https://i.pinimg.com/originals/94/36/ca/9436ca169e3e64fbc81623b585fa9f88.jpg',
  'https://i.pinimg.com/originals/a6/6b/8b/a66b8b877360025f94a827b7d32ac581.jpg',
  'https://i.pinimg.com/originals/6c/1c/e7/6c1ce767e0bf71c2bb610df2015becdf.jpg'
];

root.render(<Carousel images={images}/>);
