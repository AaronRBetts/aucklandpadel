import React from 'react';
import './About.css';
import background from '../../background.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (

    <section id="about">
      <div className="about">
      <h1>What is Padel</h1>
      <p>Padel is a racquet sport that combines the elements of <b>tennis</b> and <b>squash.</b> It is only played in doubles and is practiced outdoors as much as indoors.</p><br />
      <p>
      The sport became very popular in Spain, which has been the professional circuit host of the <b>World Padel Tour</b> where it has been played since 2005.</p><br />
      <p> Over the course of the past 10 years, padel has begun to spread rapidly to the rest of <b>Europe</b> and the United States.
      </p><br />
      <p>
        Extremely fun, social and accessible for all, padel is a breath of fresh air that is revitalizing clubs with an activity complimentary to tennis.</p>
        <a className="seeMore" href="https://www.youtube.com/c/Worldpadeltour">Read more</a><br /><br /><br />
      <h1>Padel promotional videos</h1>
        <iframe src="https://www.youtube.com/embed/E2YEYRI_mpk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />
        <iframe src="https://www.youtube.com/embed/cR0gJapEFbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h1>Professional match highlights</h1>
        <iframe src="https://www.youtube.com/embed/VfnWW7X2P8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />
      <a className="seeMore" href="https://www.youtube.com/c/Worldpadeltour">See more</a>
        <br /><br /><br />
      <h1>Follow Us On Social Media</h1>

      <div class="social">
        <a href="https://instagram.com/padelauckland"><FontAwesomeIcon icon={faInstagram} /> @padelauckland</a>
        <a href=""><i class="fab fa-facebook fa-3x"></i></a>
        <a href=""><i class="fab fa-github fa-3x"></i></a>
        <a href=""><i class="fab fa-linkedin fa-3x"></i></a>
        </div>
      </div>
      <div className='imageContainer'>
        <img className="background" src={background}/>
      </div>

    </section>

  );
};

export default About;
