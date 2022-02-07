import React from 'react';
import Banner from '../../components/Banner/Banner';
import '../pages.css'
import Footer from '../../components/Footer/Footer';

const Rules = () => {
  return (
    <div className='page'>
      <Banner />
        <h1 className='pageTitle'>Rules</h1>
      <div className='pageWrapper'>
        <div className="pageContent">
          <iframe src="https://www.youtube.com/embed/NX-68fxhL_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />
          <h2>Scoring</h2>
          <p>To a large extent, the rules of padel are the same as in tennis. The scoring system is the same as tennis, except golden point is often enforced at a high level.</p><br />
          <p>The game is played primarily in doubles, with 2 players on each side of the court.</p><br />
          <p></p><br />
          <h2>Serve</h2>
          <p>You serve by bouncing the ball on the ground and the contact point must be below your naval (belly button).</p><br />
          <p>The serve must land over the net, in the opposite service square, much like tennis. After the first bounce, the rally is live unless the ball next makes contact with the side mesh fence.</p><br />
          <p>However, the side and back glass walls are considered in.</p><br />
          
          <iframe src="https://www.youtube.com/embed/YSCbbCYfc9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />
          <h2>Rally</h2>
          <p>After making contact with the ball, the ball must next contact:</p><br />
          <ul>
            <li>the ground on the opposite side of the net.</li>
          </ul><br />
          <p>You can also hit directly into the side and back glass on your side of the court, however the mesh fence and the glass on the opposite side of the court are out.</p><br />
          <p>Similar to tennis and squash, the ball can bounce once on the ground before you must hit the ball. Glass wall and fence contact is allowed after the first bounce. A second bounce on the ground ends the rally.</p><br />
          
          <iframe src="https://www.youtube.com/embed/pR9CkiHQiY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />
          <h2>Winning a point</h2>
          <p>You win the point if your opponent:</p><br />
          <ul>
            <li>Hits the ball out of the court. Including into the net, directly to your side/back glass, or directly into any mesh fencing.</li><br />
            <li>Doesn't make contact with the ball before the second floor bounce.</li><br />
            <li>Touches the net, including with the racquet or body/clothing.</li><br />
          </ul><br />
        </div>
      </div>
      <Footer />
    </div>
    );
};

export default Rules;
