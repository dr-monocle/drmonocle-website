import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';
import { useRef } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({ username: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormError, setIsFormError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    emailjs.send('service_sw6f319', 'template_zj2elmi', formData, 'xL8wQqpmy6ZJcOzHg')
      .then((result) => {
        setLoading(false);
        setIsFormSubmitted(true);
      }).catch((error) => {
        console.log(error);
        setLoading(false);
        setIsFormError(false);
      });
  };

  return (
    <>
      <h2 className="head-text"><span>Contacts</span> & get in touch</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:drmonocle@drmonocle.tech" className="p-text">drmonocle@drmonocle.tech</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="https://discord.com/channels/@me/549619189271494676" target='_blank' rel='noreferrer' className="p-text">DrMonocle#4948</a>
        </div>
      </div>
      {!isFormSubmitted ?
        !isFormError ? (
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input className="p-text" type="text" placeholder="Your Name" required name="username" value={username} onChange={handleChangeInput} />
            </div>
            <div className="app__flex">
              <input className="p-text" type="email" placeholder="Your Email" required name="email" value={email} onChange={handleChangeInput} />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                required
                onChange={handleChangeInput}
              />
            </div>
            <button type="button" onClick={handleSubmit} className="p-text">{!loading ? 'Send Message' : 'Sending...'}</button>
          </div>
        ) : (
          <div>
            <h3 className="head-text">
              There was an error sending your message.
            </h3>
          </div>
        ) : (
          <div>
            <h3 className="head-text">
              Thank you for getting in touch!
            </h3>
          </div>
        )}
      {/* <div style={{ position: 'fixed', bottom: 10 }}>
        Copyright &copy; {new Date().getFullYear()} DrMonocle. All rights reserved.
      </div> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);