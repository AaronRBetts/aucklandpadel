import React from 'react';
import './Landing.css'
import ImagePlayer from '../ImagePlayer/ImagePlayer';
import Logo from '../../PadelAuckland.svg'
import Footer from '../Footer/Footer'
import About from '../About/About'
import VideoGrid from '../VideoGrid/VideoGrid';

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
        <h3><i>"Padel combines elements of tennis and squash. it's fun and easy as a beginner, but difficult to master"</i></h3>
        <a href="#about" class="btn">Learn More</a>
      </div>
    </section>

    <About />
    <VideoGrid />
    <Footer />
  </div>
  )
};

export default Landing;
