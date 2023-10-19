import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h2>
        <Link className='logo'  to="/">APP LOGO</Link> 
        </h2>
      <ul className='menu'>
        <li>
          <Link className='menulink'  to="/">DASHBOARD</Link>
        </li>
     
        <li>
          <Link className='menulink' to="/createads">CREATE ADS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
