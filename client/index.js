// Entrypoint for application
import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

render(
  // Hang the Main Container on the "contents" element in index.html
  <App />
  ,document.getElementById('contents')
);