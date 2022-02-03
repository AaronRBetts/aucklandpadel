import React from 'react';
import './VideoGrid.css'
import Video from './Video/Video'

const VideoGrid = () => {
  return (
    <section class="videos" id="featured-videos">
    <div class="video-grid front-page" id="front-page-videos">
      <ul class="video-list featured">
          <Video 
          href={"https://www.youtube.com/embed/E2YEYRI_mpk"}
          title={"UK based iPadel promotional video"}/>
          <Video 
          href={"https://www.youtube.com/embed/cR0gJapEFbQ"}
          title={"ITV news article"}/>
          <Video 
          href={"https://www.youtube.com/embed/VfnWW7X2P8k"}
          title={"World Padel Tour - Top 10 points of 2021"}/>
      </ul>
    </div>
  </section>
  );
};

export default VideoGrid;
