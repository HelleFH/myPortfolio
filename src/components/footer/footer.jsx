import React, { useState } from 'react';
import './footer.scss';
import Images from '../../assets/images';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ContactFormModal from '../contact-form/contact-form';
import { Link } from 'react-router-dom';  // Import Link component

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <footer className="footer">
      {/* Logo Section */}

      {/* Pages Section */}
      <div className="footer__pages">
        <h3>Pages</h3>
      
      </div>

      {/* Contact Section */}
      <div className="footer__contact">
        <p>Contact me at:</p>
        <a href="mailto:hellefruergaardh@gmail.com">hellefruergaardh@gmail.com</a>
        <p>Skovbrynet 2, 8850 Bjerringbro, Denmark</p>

        {/* Social Media Links */}
        <div className="footer__social-media">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social-icon">
            <i className="fab fa-linkedin"></i>
          </a>

          {/* Email Icon */}
          <a href="#" onClick={openModal} className="footer__social-icon">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="footer__logo-section">
        <img src={Images.FooterLogo} alt="Company Logo" />
        <p className="footer__copyright">&copy; 2024 <strong>Cloud</strong>Port. All rights reserved.</p>
      </div>

      {/* Contact Form Modal */}
      {isModalOpen && <ContactFormModal closeModal={closeModal} />}
    </footer>
  );
};

export default Footer;
