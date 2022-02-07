import React from 'react';
import './Navbar.css'
import Logo from '../../PadelAucklandalt.svg'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className='nav'>
        <div>
          <img className='headerLogo' src={Logo}/>
        </div>
          <ul className='navContent'>
            <li>
              <Link className='link' to="/">Home</Link>
            </li>
            <li>
              <Link className='link' to="/rules">Rules</Link>
            </li>
            <li>
              <Link className='link' to="/contact">Contact</Link>
            </li>
          </ul>
      </div>
      <div className='header'>
      </div>
    </div>
  );
};

export default Navbar;
