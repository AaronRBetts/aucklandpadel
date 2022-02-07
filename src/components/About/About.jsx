import React from 'react';
import './About.css';
import background from '../../background.png'

const About = () => {
  return (
    <div>
      <div className='imageContainer'>
        <img className="background" src={background}/>
      </div>

      <section id="about" className='pageContent'>
        <div className="about">
          <h1>Padel</h1>
          <p>Padel is a racquet sport that combines the elements of <b>tennis</b> and <b>squash.</b> It is only played in doubles and is practiced outdoors as much as indoors.</p>
          
          <p>Padel is played like tennis, however the <b>court is enclosed</b> with glass walls and mesh fencing, the glass walls can be used in a similar way as in squash. </p>
          <p>The balls are similar to <b>tennis balls</b>, and the racquets are similar to an enlarged table tennis bat.</p><br />
          
          <div className='imageBox'>
            <img src="https://assets.fontsinuse.com/static/use-media-items/77/76256/full-1427x642/5bcd8883/world-padel-tour-master-clas.jpeg" alt="Padel court"/>
            <p><i>World Padel Tour Finals</i></p>
          </div><br />
          <p>
          The sport became very popular in Spain, which has been the professional circuit host of the <b><a href="https://www.worldpadeltour.com/">World Padel Tour</a></b> where it has been played since 2005.</p><br />
          <p> Over the course of the past 10 years, padel has begun to spread rapidly to the rest of <b>Europe</b>, the <b>Middle East</b>, and the <b>United States</b>.
          </p><br />

          <div className='imageBox'>
            <img src="https://hs.mediadelivery.fi/img/some/default/d7fbde975380437c923d7dd37fb3d1b2.jpg" alt="Padel court"/>
            <p><i>Padel in action, Finland</i></p>
          </div><br />
          <p>Check out <a href="https://www.skysports.com/tennis/news/12110/12156747/ten-things-you-probably-didnt-know-about-padel">this article</a> by Sky sports to learn more about Padel.</p>
          <p>
            Extremely fun, social and accessible for all, padel is a breath of fresh air that is revitalizing clubs with an activity complimentary to tennis.</p>
            <p>
            At competition level, padel is an intense game of physical chess.</p><p>Fast <b>reactions</b>, good <b>decision making</b>, high <b>technical skill</b> and <b>physical stamina</b> are the keys to success.</p>
            <a className="seeMore" href="https://en.wikipedia.org/wiki/Padel_(sport)">Read more</a><br /><br /><br />
          
            <br /><br /><br />
        </div>
        <div className="about">
          <h1>Padel Auckland</h1>
          <p>Padel is a worldwide phenomenon, often being referred to as the <b>fastest growing sport</b> in the world.</p>
          <p>
            With New Zealand having such a rich culture in racquet sports, <b>Auckland</b> is an excellent choice to introduce to the intriguing sport of Padel.</p>
          <p>Stay up to date with <b><a href="https://instagram.com/padelauckland">Padel Auckland</a></b> to find out when and where Padel is coming.
          </p><br />
          <h1>Padel promotional videos</h1>
            <iframe src="https://www.youtube.com/embed/NX-68fxhL_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />
            <iframe src="https://www.youtube.com/embed/cR0gJapEFbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br /><br /><br />
          <h1>Professional match highlights</h1>
            <iframe src="https://www.youtube.com/embed/VfnWW7X2P8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />
          <a className="seeMore" href="https://www.youtube.com/c/Worldpadeltour">See more</a>
            <br /><br /><br />
        </div>

      </section>

    </div>

  );
};

export default About;
