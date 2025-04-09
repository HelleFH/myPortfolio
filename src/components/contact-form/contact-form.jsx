import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './contact-form.scss';
import Images from '../../assets/images';

const ContactFormModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('contact-modal__overlay')) {
      closeModal();
    }
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://usebasin.com/f/424790a35bd1', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        setStatus('Message sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong!');
      }
    } catch (error) {
      console.error('Submit error:', error);
      setStatus('Submission failed!');
    }
  };

  return (
    <motion.div
      className="contact-modal__overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={handleOverlayClick}
    >
      <motion.div
        className="contact-modal"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="contact-modal__header">
          <img src={Images.FooterLogo} alt="Company Logo" className="contact-modal__logo" />
          <button className="contact-modal__close-btn" onClick={closeModal}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="contact-modal__header-title">
          <h2>Contact Us</h2>
          <p>Please enter your details below</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-modal__form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="button--primary">Send</button>
          {status && <p className="contact-modal__status">{status}</p>}
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactFormModal;
