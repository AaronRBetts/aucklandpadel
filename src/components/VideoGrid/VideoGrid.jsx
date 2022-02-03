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
          href={"https://www.youtube.com/embed/tC9lddfmuVA"}
          title={"The Padel School - from tennis to padel"}/>
          <Video 
          href={"https://www.youtube.com/embed/1P917DZJsCc"}
          title={"World Padel Tour - Professional Finals match tie break"}/>
          <Video 
          href={"https://www.youtube.com/embed/v7JTEpxK1P0"}
          title={"The Padel School - beginner match analysis"}/>
          <Video 
          href={"https://www.youtube.com/embed/17DC_atNmkQ"}
          title={"The Padel School - basic court positioning"}/>
          <Video 
          href={"https://www.youtube.com/embed/pR9CkiHQiY4"}
          title={"The Padel School - intermediate match analysis"}/>
      </ul>
    </div>
  </section>
  );
};

export default VideoGrid;
