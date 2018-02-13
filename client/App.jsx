import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ContentContainer from './containers/ContentContainer.jsx';
import LoginDisplay from './components/LoginDisplay.jsx';
import SignupDisplay from './components/SignupDisplay.jsx';

class App extends Component {
    constructor() {
        super();

    }
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={LoginDisplay} />
                    <Route path="/signup" component={SignupDisplay} />
                    <Route path="/home" component={ContentContainer} />
                </div>
            </Router>
        )
    }
}

export default App;