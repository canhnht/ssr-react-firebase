import React from 'react';
import { render } from 'react-dom';
import App from './App';
import getFacts from './facts';

console.log('index');
getFacts().then((facts) => {
  console.log('facts', facts);
  render(<App facts={facts} />, document.querySelector('#root'));
});

