import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const SignupDisplay = (props) => {
    return (
      <MuiThemeProvider>
        <div id='signupContainer'>
            <h2>Sign up</h2>
            <div>
                <TextField
                    floatingLabelText="email address"
                    id="signupEmailInput"
                    autoFocus={true}
                />
            </div>
            <div>
                <TextField
                    floatingLabelText="username"
                    id="signupUsernameInput"
                />
            </div>
            <div>
                <TextField
                    floatingLabelText="password"
                    id="signupPasswordInput"
                />
            </div>
            <Link to="/home"><RaisedButton id="signupSubmitButton" onClick={props.pressSignup} label="Sign up" primary={true} style={{ margin: 11 }} /></Link>
        </div>
      </MuiThemeProvider>
    )
}
export default SignupDisplay