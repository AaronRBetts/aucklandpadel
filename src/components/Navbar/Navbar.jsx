import React, { useState } from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

    return (
    <nav role="navigation" className={toggleMenu ? 'nav expanded-mobile-menu': 'nav'}>
  
        <button className="menu-toggle" onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} />
          <span aria-hidden="true" className="icon-menu"></span><span className="menu-toggle-text"></span>
        </button>
            <ul id="main-menu" className={toggleMenu ? 'top-nav menu clearfix expanded-mobile-menu': 'top-nav menu clearfix'}>
              <li className='menu-item' onClick={toggleNav}>
                <Link className='link animate__animated animate__fadeIn' to="/">Home</Link>
              </li>
              <li className='menu-item' onClick={toggleNav}>
                <Link className='link animate__animated animate__fadeIn' to="/contact">Contact</Link>
              </li>
              <li className='menu-item' onClick={toggleNav}>
                <Link className='link animate__animated animate__fadeIn' to="/location">Location</Link>
              </li>
              <li className='menu-item' onClick={toggleNav}>
                <Link className='link animate__animated animate__fadeIn' to="/equipment">Information</Link>
                <ul className="sub-menu">
                  <li className='menu-item' onClick={toggleNav}>
                    <Link className='link animate__animated animate__fadeIn' to="/rules">Rules</Link>
                  </li>
                  <li className="menu-item" onClick={toggleNav}>
                    <Link className='link animate__animated animate__fadeIn' to="/equipment">Equipment</Link>
                  </li>
                  <li className='menu-item' onClick={toggleNav}>
                    <Link className='link animate__animated animate__fadeIn' to="/court">Court</Link>
                  </li>
                </ul>
              </li>
            </ul>
    
  </nav>
    );
};

export default Navbar;
