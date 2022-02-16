import React from 'react'
import './Ribbon.css'
// import imgSocial from '../../people.png'
// import imgEasy from '../../swing.png'
// import imgFun from '../../celebrating.png'

const Ribbon = () => {
  return (
    <div class="backgroundRibbon">
        <div className="ribbonContainer">
            <div className="panel pricing-table">
            
            <div className="pricing-plan">
                <h2 className="pricing-header">Social</h2>
                {/* <img src={imgSocial} alt="" className="pricing-img"/> */}
                <ul className="pricing-features">
                <li className="pricing-features-item"><p>Padel is an amazing social activity, share the court with a few friends and split the cost.</p><br />
                <p>Work together with your match partner to take control of the game and have fun at the same time!</p>
                </li>
                </ul>
                {/* <span className="pricing-price">Social</span> */}
            </div>
            
            <div className="pricing-plan">
                <h2 className="pricing-header">Easy</h2>
                {/* <img src={imgEasy} alt="" className="pricing-img"/> */}
                <ul className="pricing-features">
                <li className="pricing-features-item"><p>Anyone can pick up Padel and start having fun. The serve is underarm, the racket is easy to manouver and aim, and the rebound walls keep the ball in the court.</p><br />
                <p>All you need are sports clothes &amp; shoes, a racket, some padel balls, a few friends, and finally, a court. Then you're ready to go!</p>
                </li>
                </ul>
                {/* <span className="pricing-price">$150</span> */}
            </div>
            
            <div className="pricing-plan">
                <h2 className="pricing-header">Fun</h2>
                {/* <img src={imgFun} alt="" className="pricing-img"/> */}
                <ul className="pricing-features">
                <li className="pricing-features-item"><p>In a competitive environment, Padel is an explosive, intense battle of physical strategy.</p><br />
                <p>Strategise with your partner to hold the net position, and finish the point with a powerful overhead hit!</p>
                    
                </li>
                </ul>
                {/* <span class="pricing-price">$400</span> */}
            </div>
        
        </div>
    </div>
  </div>
  )
}

export default Ribbon