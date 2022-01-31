import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (


    <div class="footer">
        <div className='footerContainer'>
            <h1>Follow Us On Social Media</h1>
            <a href="https://instagram.com/padelauckland"><FontAwesomeIcon icon={faInstagram} /> @padelauckland</a>
            <a href=""><i class="fab fa-facebook fa-3x"></i></a>
            <a href=""><i class="fab fa-github fa-3x"></i></a>
            <a href=""><i class="fab fa-linkedin fa-3x"></i></a>
        </div>
    </div>
  );
};

export default Footer;
