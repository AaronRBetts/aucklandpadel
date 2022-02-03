import React from 'react';
import './Navbar.css'
import Logo from '../../PadelAucklandalt.svg'

const Navbar = () => {
  return (
    <div>
      <div className='nav'>
        <div>
          <img className='headerLogo' src={Logo}/>
        </div>
        <div className="navContent">
          <div className='link'>
            <a href="#">Home</a>
          </div>
          <div className='link'>
            <a href="#">Rules</a>
          </div>
          <div className='link'>
            <a href="#">Padel Court</a>
          </div>
          <div className='link'>
            <a href="#">Padel Racquets</a>
          </div>
          <div className='link'>
            <a href="#">Padel Balls</a>
          </div>
          <div className='link'>
            <a href="#">Other equipment</a>
          </div>
          <div className='link'>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
      <div className='header'>
      </div>
    </div>
  );
};

export default Navbar;
