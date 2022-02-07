import React from 'react';
import bannerBg from '../../pageBanner.png'
import './Banner.css'

const Banner = () => {
  return (
    <img className='banner' src={bannerBg}/>
  );
};

export default Banner;
