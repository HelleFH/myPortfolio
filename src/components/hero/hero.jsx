import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './Hero.scss';
import Images from "../../assets/images";
import SocialLinks from "../SocialLinks/SocialLinks";

const Hero = ({ title, subtitle, buttons, showContactUsButton }) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); // Initial check

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleButtonClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <section className="hero">
      {isMobile ? (
        <img
          src={Images.HeroImageMobile}
          alt="Hero"
          className="hero__image"
        />
      ) : (
        <video
          className="hero__video"
          autoPlay
          muted
          playsInline
          onEnded={(e) => e.target.pause()}
        >
          <source src={Images.heroVideoHD} type="video/mp4" media="(min-width: 1200px)" />
          <source src={Images.heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Content Layer */}
    <div className="hero__content">
  <div className="hero__title-container">
    <p className="hero__subtitle">{subtitle}</p>
    <h1 className="hero__title">{title}</h1>
  </div>

  <div className="hero__button-container">
    {buttons && buttons.map((button, index) => (
      <React.Fragment key={index}>
        {button.type === 'link' && button.text && (
          <button 
            onClick={() => handleButtonClick(button.path)} 
            className="hero__button"
          >
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
