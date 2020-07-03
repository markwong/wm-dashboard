import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    
    return(
        <ul>
          <li><NavLink to="/home" className="link" activeClassName="link-selected">Home</NavLink></li>
          <li><NavLink to="/about" className="link" activeClassName="link-selected">About</NavLink></li>
          <li><NavLink to="/logout" className="link" activeClassName="link-selected">Logout</NavLink></li>
        </ul>
    );
}

export default NavBar;