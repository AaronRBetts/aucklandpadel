import React from 'react';

const Video = ({href, title}) => {
  return (
    <li class="video featured">
    <div data-fancybox class="featured-video">
      <figure>
          <iframe src={href} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <figcaption>{title}</figcaption>
      </figure>
    </div>
  </li>
  );
};

export default Video;
