import React from 'react';
import { useAuth } from './use-auth';
import Login from './Login';
import NavBar from './NavBar';



const Home = () => {
    const auth = useAuth();
    console.log('Home()');

    if (!auth.isLoggedIn) {
        return <Login />
    }
    
    return (
        <>
        <NavBar />
        <h1>Home</h1>
        <h3>Is logged in? {auth.isLoggedIn ? "Yes" : "No"}</h3>
        </>
    );
}

export default Home;