import React, { Component } from 'react';
import Main from './containers/MainContainer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Main/>
      </div>
    )
  }
}

export default App;