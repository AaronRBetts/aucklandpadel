import React from 'react';
import Banner from '../../components/Banner/Banner';
import '../pages.css'
import Footer from '../../components/Footer/Footer';

const Contact = () => {
  return (
    <div className='page'>
      <Banner />
        <h1 className='pageTitle'>Contact</h1>
      <div className='pageWrapper'>
        <div className="pageContent">
            <h2>Send us a message for more information on Padel Auckland.</h2>
            <form action="https://formspree.io/xnqgbwle" method="post"
                name="portContactForm">
                <div className="formGroup">
                    <input name="Name" type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="formGroup">
                    <input name="Email" type="text" className="form-control"
                        placeholder="Email" />
                </div>
                <div className="formGroup">
                    <input name="Subject" type="text" className="form-control"
                        placeholder="Subject" />
                </div>
                <div className="formGroup">
                    <textarea name="Message" id="message" cols="30" rows="7"
                        className="form-control"
                        placeholder="I'd like to get in touch"></textarea>
                </div>
                <div className="formGroup">
                    <input type="submit" class="btn btn-primary btn-send-message"
                        value="Send Message" />
                </div>
            </form>
            
        </div>
      </div>
      <Footer />
    </div>
    );
};

export default Contact;
