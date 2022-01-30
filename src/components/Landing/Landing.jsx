import React from 'react';
import './Landing.css'
import ImagePlayer from '../ImagePlayer/ImagePlayer';
import Logo from '../../PadelAucklandalt.svg'

const Landing = () => {
  return (
  <div>	
    <section class="showcase">
      <div class="video-container">
        <ImagePlayer />
        <video src="https://www.youtube.com/embed/E2YEYRI_mpk" autoplay muted loop></video>
      </div>
      <div class="content">
        <img className="logo" src={Logo}/>
        <h1>The fastest growing sport in the world</h1>
        <a href="#about" class="btn">Learn More</a>
      </div>
    </section>

    <section id="about">
      <h1>What is Padel</h1>
      <iframe src="https://www.youtube.com/embed/E2YEYRI_mpk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />
      <iframe src="https://www.youtube.com/embed/cR0gJapEFbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p>
        {/* enter description */}
      </p>

      <h2>Follow Us On Social Media</h2>

      <div class="social">
      <a href="https://instagram.com/padelauckland" target="_blank"><i class="fab fa-instagram fa-3x"></i></a>
        <a href="" target="_blank"><i class="fab fa-facebook fa-3x"></i></a>
        <a href="" target="_blank"><i class="fab fa-github fa-3x"></i></a>
        <a href="" target="_blank"><i class="fab fa-linkedin fa-3x"></i></a>
      </div>
    </section>
  </div>
  )
};

export default Landing;
