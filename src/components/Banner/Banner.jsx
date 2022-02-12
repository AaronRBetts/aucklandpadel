import React from 'react';
import bannerBg from '../../pageBanner.png'
import './Banner.css'

const Banner = () => {
  return (
    <img className='banner' src={bannerBg} alt="homepage banner"/>
  );
};

export default Banner;
