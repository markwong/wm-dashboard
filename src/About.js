import React from 'react';
import { useAuth } from './use-auth';
import NavBar from './NavBar';
import Login from './Login';

const About = () => {
    const auth = useAuth();

    if (!auth.isLoggedIn) {
        return <Login />
    }

    return(
        <>
        <NavBar />
        <h1>About</h1>
        <h3>Is logged in? {auth.isLoggedIn ? "Yes" : "No"}</h3>
        </>
    );
}

export default About;