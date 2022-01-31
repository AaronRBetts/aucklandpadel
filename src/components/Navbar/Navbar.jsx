import React from 'react';
import './Navbar.css'
import Logo from '../../PadelAucklandalt.png'

const Navbar = () => {
  return (
  <div className='nav'>
  <div>
    <img className='logo' src={Logo}/>
  </div>
    <div className="navContent">
      <div className='link'>
        <a href="localhost:3000">Home</a>
      </div>
      <div className='link'>
        <a href="localhost:3000">Rules</a>
      </div>
      <div className='link'>
        <a href="localhost:3000">Contact</a>
      </div>
    </div>
  </div>
  );
};

export default Navbar;
