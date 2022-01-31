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
        <a href="#">Home</a>
      </div>
      <div className='link'>
        <a href="#">Rules</a>
      </div>
      <div className='link'>
        <a href="#">Contact</a>
      </div>
    </div>
  </div>
  );
};

export default Navbar;
