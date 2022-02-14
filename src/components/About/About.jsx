import React from 'react';
import './About.css';
import background from '../../background.png'

const About = () => {
  return (
    <div>
      <div className='imageContainer'>
        <img className="background" src={background} alt="padel auckland homepage background"/>
      </div>

      <section id="about">
        <div className="about">
          <div className='pageContent'>
            <h2>Padel</h2>
            <p>Padel is a racquet sport that combines the elements of <b>tennis and squash.</b> It is only played in doubles and is practiced outdoors as much as indoors.</p>
            
            <p>Padel is played like tennis, however the <b>court is enclosed</b> with glass walls and mesh fencing, the glass walls can be used in a similar way as in squash. </p>
            <p>The <b>balls are similar to tennis balls</b>, and the racquets are similar to an enlarged table tennis bat.</p><br />
            
          <div className='imageBox'>
            <img src="https://e1.365dm.com/20/12/2048x1152/skysports-padel-lta_5200829.jpg" alt="Padel court"/>
          </div>
            <p><i>Padel in action, Finland</i></p><br />

            <p>
            The sport became very popular in Spain, which has been the professional circuit host of the <b><a href="https://www.worldpadeltour.com/">World Padel Tour</a></b> where it has been played since 2005.</p><br />
            <p> Over the course of the past 10 years, padel has begun to spread rapidly to the rest of <b>Europe, the Middle East, and the United States</b>.
            </p><br />
            <div className='imageBox'>
              <img src="https://www.worldpadeltour.com/media-content/2016/03/Master_1-1.jpg" alt="Padel court"/>
            </div>
              <p><i>World Padel Tour Finals</i></p><br />
          <p>Check out <a href="https://www.skysports.com/tennis/news/12110/12156747/ten-things-you-probably-didnt-know-about-padel">this article</a> by Sky sports to learn more about Padel.</p>
          <p>
            Extremely fun, social and accessible for all, padel is a breath of fresh air that is revitalizing clubs with an activity complimentary to tennis.</p>
            <p>
            At competition level, padel is an intense game of physical chess.</p><p>Fast <b>reactions</b>, good <b>decision making, high technical skill and physical stamina</b> are the keys to success.</p>
            <a className="seeMore" href="https://en.wikipedia.org/wiki/Padel_(sport)">Read more</a><br /><br /><br />
          
            <br /><br /><br />
        <div className="about">
          <h2>Padel Auckland</h2>
          <p>Padel is a worldwide phenomenon, often being referred to as the <b>fastest growing sport</b> in the world.</p>
          <p>
            With New Zealand having such a rich culture in racquet sports, <b>Auckland</b> is an excellent choice to introduce to the intriguing sport of Padel.</p>
          <p>Stay up to date with <b><a href="https://instagram.com/padelauckland">Padel Auckland</a></b> to find out when and where Padel is coming.
          </p><br />
          <h2>Padel promotional videos</h2>
            <iframe src="https://www.youtube.com/embed/NX-68fxhL_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />
            <iframe src="https://www.youtube.com/embed/cR0gJapEFbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br /><br /><br />
          <h2>Professional match highlights</h2>
            <iframe src="https://www.youtube.com/embed/VfnWW7X2P8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />
          <a className="seeMore" href="https://www.youtube.com/c/Worldpadeltour">See more</a>
            <br /><br /><br />
        </div>
        </div>
      </div>  

      </section>

    </div>

  );
};

export default About;
