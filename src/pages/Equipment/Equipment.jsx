import React from 'react';
import Banner from '../../components/Banner/Banner';
import '../pages.css'
import Footer from '../../components/Footer/Footer';
import rackets from '../../rackets.png'

const Equipment = () => {
  return (
    <div className='page'>
      <Banner />
        <h1 className='pageTitle'>Equipment</h1>
        <div className='pageWrapper'>
            <div className="pageContent">
            <h2>Padel Racket</h2>

            <div className='imageBox'>
                <img src="https://sc04.alicdn.com/kf/H7282330b2efb4626a0c6bea9f4d9078be/205784639/H7282330b2efb4626a0c6bea9f4d9078be.png" alt="Padel court"/>
            </div><br />
            <p>A Padel racquet is solid with no strings but must be perforated. It is smaller and more compact than a tennis racquet which makes it very easy to handle for everyone.</p><br />

            <h2>racket features</h2>
          <ul>
            <li>Weight: between 340g et 370g, slightly heavier than a tennis racquet.</li><br />
            <li>Maximum dimensions: the racquet cannot be more than 45,5cm long, 26cm wide and 38mm thick.</li><br />
            <li>Material: the padel racquet is usually covered by plastic or carbon depending on the quality level. The inside of the racquet is made of ethylene-vinyl acetate which looks like a foam. </li><br />
          </ul><br />
                <div className='imageBox'>
                    <img src="https://img.tenniswarehouse-europe.com/watermark/rsg.php?path=/content_images/how-to-choose-padel-racket/Padel_components.jpg&nw=780" alt="Padel court"/>
                </div><br />
            </div>
        </div>
      <Footer />
    </div>
    );
};

export default Equipment;
