import React, { useState } from 'react';
import { useAuth } from './use-auth';

const Login = () => {
    const auth = useAuth();
    const [loginSuccess, setLoginSuccess] = useState(null);
    let username = "";
    let password = "";

    const handleUsernameChanged = (e) => {
        const value = e.target.value;
        username=value;
    }

    const handlePasswordChanged = (e) => {
        const value = e.target.value;
        password=value;
    }

    const handleSubmit = (e) => {
        //console.log('handleSubmit() ====');
        e.preventDefault();
        const success = auth.login(username, password);
        setLoginSuccess(success);
        
    }

    return(
        <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p>
            <label htmlFor="username">Username</label>
            <br />
            <input type="text" id="username" onChange={handleUsernameChanged}/>
        </p>

        <p>
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" id="password" onChange={handlePasswordChanged} />
        </p>

        <input type="submit" name="test" value="Login" />

        {loginSuccess === false &&
            <p>
                <span style={{ color: "red"}}>Login Failed</span>
            </p>
        }
        </form>
    );
}

export default Login;