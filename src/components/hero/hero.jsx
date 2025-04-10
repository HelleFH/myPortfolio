import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './hero.scss';
import ContactFormModal from "../contact-form/contact-form";
import Images from "../../assets/images";

const Hero = ({ title, subtitle, buttons, showContactUsButton }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  const handleButtonClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <section className="hero">
      <video
        className="hero__video"
        autoPlay
        muted
        playsInline
        onEnded={(e) => e.target.pause()}
      >
        <source src={Images.heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Layer */}
      <div className="hero__content">
        <div className="hero-title__container">
          <h1 className="hero__title">{title}</h1>
          <p className="hero__subtitle">{subtitle}</p>
        </div>

        <div className="hero__button-container">
          {buttons && buttons.map((button, index) => (
            <React.Fragment key={index}>
              {button.type === 'link' && button.text && (
                <button onClick={() => handleButtonClick(button.path)} className="default">
                  {button.text}
                </button>
              )}
            </React.Fragment>
          ))}

          <div className="social-buttons__container"> 
            
             <button
            href="https://www.linkedin.com/in/your-profile" // replace with your actual link
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </button>

            <button
              href="https://github.com/your-username" // replace with your actual link
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </button>

            {isModalOpen && <ContactFormModal closeModal={closeModal} />}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
