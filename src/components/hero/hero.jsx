import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './hero.scss';
import Images from "../../assets/images";
import SocialLinks from "../social-links/social-links";

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

<SocialLinks />

        </div>
      </div>

    </section>
  );
};

export default Hero;
