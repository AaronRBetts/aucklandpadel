import React from 'react';
import Banner from '../../components/Banner/Banner';
import '../pages.css'
import Footer from '../../components/Footer/Footer';
import court from '../../padelCourt.png'

const Court = () => {
  return (
    <div className='page'>
      <Banner />
        <h1 className='pageTitle'>Padel Court</h1>
        <div className='pageWrapper'>
            <div className="pageContent">

            <div className='imageBox'>
                <img src="https://www.padelgalis.com/wp-content/uploads/2019/08/0102-MODELO-WISO-b.png" alt="Padel court"/>
            </div><br />
            <h2>Court size</h2>
            <p>A padel court is defined as area 20m long x 10m wide enclosed above ground
                with a combination of glass and weld mesh rebound wall and fence panels
                supported of steel posts fixed to a concrete foundation with a synthetic turf
                play surface. </p><br />
            <p></p><br />
                <div className='imageBox'>
                    <img src={court} alt="Padel court"/>
                </div><br />
            <h2>Boundaries and walls</h2>
            <p>The side and back walls are a combination of glass panels and mesh fencing.</p><br /><br />

            <p>The side mesh fence and the majority of the glass wall, are both 3m tall. The taller fence stands 4m from the ground</p><br /><br />

            <iframe src="https://www.youtube.com/embed/f3g15dCfHrs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />
            
            </div>
        </div>
      <Footer />
    </div>
    );
};

export default Court;
