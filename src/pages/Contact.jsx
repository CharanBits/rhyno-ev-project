import React from 'react';
import './Contact.css';  

const Contact = () => {
  return (
    <div className='contact-page'>
      <div className='contact'>
        <h1 id="heading">Contact Us</h1>
        <div className='contact-box'>
          <i className="fa fa-envelope icon"></i>
          <a id="mail" href="mailto:info@rhyno.in">info@rhyno.in</a>
        </div>
        <div className='contact-box'>
          <i className="fa fa-phone icon"></i>
          <p id="number">Mobile: +91-9023987528</p>
        </div>
        <div className='contact-box'>
          <i className="fa fa-map-marker icon"></i>
          <p className='location'>Location: Rhyno Wheels Private Limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
