import React from 'react';
import { useAuth } from './use-auth';
import { Redirect } from 'react-router-dom';
import Home from './Home';

const Logout = () => {
    const auth = useAuth();
    auth.logout();

    return (
        <Redirect to="/home" />
    );
}

export default Logout;