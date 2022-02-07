import React from 'react';
import './Navbar.css'
import Logo from '../../PadelAucklandalt.svg'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component() {
  state = {
    navToggled: false
  }

  handleNavToggle = () => this.setState({ navToggled: !this.state.navToggled })
    
  render() {

    return (
      <div>
        <div className={`nav`}>
            <button className='navBtn' onClick={this.handleNavToggle}><FontAwesomeIcon icon={faBars} /></button>
            <div className='logoWrapper'>
              <img className='headerLogo animate__animated animate__fadeIn' src={Logo}/>
            </div>
            <ul className={this.state.navToggled ? 'navContent active' : 'navContent'} onClick={this.handleNavToggle}>
              <li>
                <Link className='link animate__animated animate__fadeIn' to="/">Home</Link>
              </li>
              <li>
                <Link className='link animate__animated animate__fadeIn' to="/rules">Rules</Link>
              </li>
              <li>
                <Link className='link animate__animated animate__fadeIn' to="/contact">Contact</Link>
              </li>
              <li>
                <Link className='link animate__animated animate__fadeIn' to="/court">Court</Link>
              </li>
              <li>
                <Link className='link animate__animated animate__fadeIn' to="/equipment">Equipment</Link>
              </li>
            </ul>
        </div>
        <div className='header'>
        </div>
      </div>
    );
  }
};

export default Navbar;
