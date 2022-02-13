import React from 'react';
import Banner from '../../components/Banner/Banner';
import '../pages.css'
import Footer from '../../components/Footer/Footer';

const Location = () => {
  return (
    <div className='page'>
      <Banner />
      <h1 className='pageTitle'>Location</h1>
      <h3 className='pageTitle'>Padel Auckland are searching for the right location, stay tuned and follow us on social media to stay up to date!</h3>
      <div className='pageWrapper'>
        <div className="pageContent">
          <h3>location</h3>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe title="google maps location"
              width="auto" 
              height="auto" 
              id="gmap_canvas" 
              src="https://maps.google.com/maps?q=auckland,%20new%20zealand&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              frameborder="0" 
              scrolling="no" 
              marginHeight="0" 
              marginWidth="0">

              </iframe>
            </div>
          </div>            
        </div>
      </div>
      <Footer />
    </div>
    );
};

export default Location;
