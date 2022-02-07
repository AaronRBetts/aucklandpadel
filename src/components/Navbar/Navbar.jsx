import React from 'react';
import './Navbar.css'
import Logo from '../../PadelAucklandalt.svg'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

    return (
    <nav role="navigation" className="nav">
  
        <a className="menu-toggle" href="#head-nav">
          <span aria-hidden="true" className="icon-menu"></span><span className="menu-toggle-text"> menu</span>
        </a>
            <ul id="main-menu" className="top-nav menu clearfix">
              <li className='menu-item'>
                <Link className='link animate__animated animate__fadeIn' to="/">Home</Link>
              </li>
              <li className='menu-item'>
                <Link className='link animate__animated animate__fadeIn' to="/contact">Contact</Link>
              </li>
              <li className='menu-item'>
                <Link className='link animate__animated animate__fadeIn' to="/location">Location</Link>
              </li>
              <li className='menu-item'>
                <Link className='link animate__animated animate__fadeIn' to="/equipment">Information</Link>
                <ul className="sub-menu">
                  <li className='menu-item'>
                    <Link className='link animate__animated animate__fadeIn' to="/rules">Rules</Link>
                  </li>
                  <li className="menu-item">
                    <Link className='link animate__animated animate__fadeIn' to="/equipment">Equipment</Link>
                  </li>
                  <li className='menu-item'>
                    <Link className='link animate__animated animate__fadeIn' to="/court">Court</Link>
                  </li>
                </ul>
              </li>
            </ul>
    
  </nav>
    );
};

export default Navbar;
