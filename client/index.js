// Entrypoint for application
import React from 'react';
import { render } from 'react-dom';
import ContentContainer from './containers/ContentContainer.jsx';

render(
  // Hang the Main Container on the "contents" element in index.html
  <ContentContainer />
  ,document.getElementById('contents')
);