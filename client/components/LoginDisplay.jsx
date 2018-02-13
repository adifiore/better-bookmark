import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const LoginDisplay = (props) => {
    return (
      <MuiThemeProvider>
        <div id='loginContainer'>
            <h2>Login</h2>
            <div>
                <TextField
                    floatingLabelText="username"
                    id="loginUsernameInput"
                    autoFocus={true}
                />
            </div>
            <div>
                <TextField
                    floatingLabelText="password"
                    id="loginPasswordInput"
                />
            </div>
            <div>
                <Link to="/home"> <RaisedButton id="loginSubmitButton" onClick={props.pressLogin} label="Login" primary={true} style={{ margin: 11 }} /></Link>
                <p>Want to join? <Link to="/signup">Sign up here</Link></p>
            </div>
        </div >
      </MuiThemeProvider>
    )
}


export default LoginDisplay
