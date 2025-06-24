import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom'; 
import './Hero.scss';
import Images from "../../assets/images";
import SocialLinks from "../SocialLinks/SocialLinks";

const Hero = ({ title, subtitle, buttons }) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile(); 

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleButtonClick = (path) => {
    if (path) {
      navigate(path);
    }
  };
const location = useLocation();
const scrollOrNavigate = (id) => {
  if (location.pathname === "/") {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    navigate("/", { state: { scrollTo: id } });
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
     <div className="hero__video-container">
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
</div>
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
<div>


</div>
    <SocialLinks />
 
  </div>
<ul className="hero__links">
  <li><a onClick={() => scrollOrNavigate("react-projects")}>React Projects</a></li>
  <li><a onClick={() => scrollOrNavigate("other-projects")}>Other Development Projects</a></li>
  <li><a onClick={() => scrollOrNavigate("design-media")}>Design/Media</a></li>
</ul>
</div>

    </section>
  );
};

export default Hero;
