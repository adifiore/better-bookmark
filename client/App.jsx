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
          <PrivateRoute path="/home" component={ContentContainer} />
        </div>
      </Router>
    )
  }
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
        <p>You are not logged in.</p>
      )
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

export default App;