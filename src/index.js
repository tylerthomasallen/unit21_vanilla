import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/styles/parent.scss';

document.addEventListener('DOMContentLoaded', async () => {
  const root = document.getElementById('root');

  ReactDOM.render(<App />, root);
});

