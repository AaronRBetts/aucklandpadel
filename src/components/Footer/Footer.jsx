import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import logo from '../../PadelAuckland.svg'

const Footer = () => {
  return (
    <footer className="footer-clean">
            <div className="container">
                <div className="row">
                    <div className="item">
                        <h3>location</h3>
                        <div className="mapouter">
                          <div className="gmap_canvas">
                            <iframe title="google maps location"
                            width="400" 
                            height="300" 
                            id="gmap_canvas" 
                            src="https://maps.google.com/maps?q=auckland,%20new%20zealand&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                            frameborder="0" 
                            scrolling="no" 
                            marginheight="0" 
                            marginwidth="0"></iframe></div></div>
                    </div>
                    {/* <div className="item">
                        <h3>Services</h3>
                        <ul>
                            <li><Link to="/services">Water Tank Filling</Link></li>
                            <li><Link to="/services">Water Tank Cleaning</Link></li>
                            {localStorage.getItem('token') ? 
                            <li><br /><Link to="/bookings">My bookings</Link></li> :
                            <><br />
                            <li><Link to="/bookings">Login</Link></li>
                            <li><Link to="/bookings">Register</Link></li>
                            </>}
                        </ul>
                    </div> */}
                    <div className="item">
                        <h3>About</h3>
                        <ul>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/rules">Rules</Link></li>
                            <li><Link to="/equipment">Equipment</Link></li>
                            <li><Link to="/court">Court</Link></li>
                        </ul>
                    </div>
                    <div className="item social">
                        <p className="copyright">
                        <img alt="Padel Auckland logo" src={logo}/></p>
                    <a href="https://instagram.com/padelauckland"><FontAwesomeIcon icon={faInstagram} /></a>
                        <Link to="https://twitter.com/maraetaiblue?lang=fi"><FontAwesomeIcon icon={faFacebook} /></Link>
                        <p className="copyright">Website from <a href="https://AaronRBetts.github.io/">Aaron Betts</a></p>
                    </div>
                </div>
            </div>
    </footer>


    // <div class="footer">
    //     <div className='footerContainer'>
    //         <h1>Follow Us On Social Media</h1>
    //         <a href="https://instagram.com/padelauckland"><FontAwesomeIcon icon={faInstagram} /> @padelauckland</a>
    //         <a href=""><i class="fab fa-facebook fa-3x"></i></a>
    //         <a href=""><i class="fab fa-github fa-3x"></i></a>
    //         <a href=""><i class="fab fa-linkedin fa-3x"></i></a>
    //     </div>
    // </div>
  );
};

export default Footer;
