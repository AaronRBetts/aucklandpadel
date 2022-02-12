import React from 'react';

const Video = ({href, title}) => {
  return (
    <li className="video featured">
    <div data-fancybox className="featured-video">
      <figure>
          <iframe src={href} title="YouTube video player" frameBorder="0" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{height: '200px'}}></iframe>
        <figcaption>{title}</figcaption>
      </figure>
    </div>
  </li>
  );
};

export default Video;
