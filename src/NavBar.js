import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useAuth } from './use-auth';

const NavBar = () => {
  const auth = useAuth();
  const history = useHistory();
  const handleLogout = (e) => {
    e.preventDefault();
    //console.log('logout clicked');
    auth.logout();
    history.push('/home');
  }
    
  return(
    <ul>
      <li><NavLink to="/home" className="link" activeClassName="link-selected">Home</NavLink></li>
      <li><NavLink to="/about" className="link" activeClassName="link-selected">About</NavLink></li>
      <li><a className="link" href="#logout" onClick={handleLogout}>Logout</a></li>
    </ul>
  );
}

export default NavBar;