import React, { useState, useEffect } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import Images from '../../assets/images';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false); // Track if scrolled
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu
  const [isHidden, setIsHidden] = useState(false); // Track if navbar is hidden
  const [mouseTimeout, setMouseTimeout] = useState(null); // Timeout for hiding navbar
  const [hoveringTop, setHoveringTop] = useState(false); // Track if mouse is hovering near top
  const [isHoveringNavbar, setIsHoveringNavbar] = useState(false); // Track if mouse is hovering the navbar
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Window width to detect mobile

    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  // Track window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll detection and navbar visibility logic
  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition <= 100) {
        setScrolled(false);
        setIsHidden(false); // Don't hide if near the top
      } else {
        setScrolled(true);
      }

      if (isMenuOpen || isHoveringNavbar ) {
        setIsHidden(false);
        return;
      }

      // Hide navbar after a timeout of inactivity
      if (timeout) {
        clearTimeout(timeout);
      }

      setIsHidden(false);

      timeout = setTimeout(() => {
        if (scrollPosition > 100) {
          setIsHidden(true);
        }
      }, 2000); // Hide navbar after 2 seconds of inactivity
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, [isMenuOpen, isHoveringNavbar]);

  // Mouse movement logic to detect hover near the top or over navbar
  const handleMouseMove = (event) => {
    const mouseY = event.clientY;

    if (mouseY <= 100) {
      setHoveringTop(true);
      setIsHidden(false);

      if (mouseTimeout) {
        clearTimeout(mouseTimeout);
        setMouseTimeout(null);
      }
    } else {
      setHoveringTop(false);

      if (!mouseTimeout && !isMenuOpen && !isHoveringNavbar) {
        const timeoutId = setTimeout(() => {
          setIsHidden(true);
        }, 2000); // Time before hiding the navbar
        setMouseTimeout(timeoutId);
      }
    }
  };

  // Toggles the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Add/remove event listeners for mouse movement
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (mouseTimeout) {
        clearTimeout(mouseTimeout);
      }
    };
  }, [mouseTimeout]);

  return (
    <nav
      className={`navbar ${scrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''}`}
      onMouseEnter={() => setIsHoveringNavbar(true)}
      onMouseLeave={() => setIsHoveringNavbar(false)}
    >
      <div className="navbar-content">
        {/* Logo Section - Wrap the logo with a Link to '/' */}
        <div className="navbar-logo-container">
          <Link to="/"> {/* Add Link component to redirect to home */}
            <img
              className="navbar-logo"
              src={scrolled ? Images.FooterLogo : Images.LogoWhite} // Change logo based on scroll
              alt="Logo"
            />
          </Link>
        </div>

        <div className="burger" onClick={toggleMenu}>
          {isMenuOpen ? (
            <span className="x-icon">&#215;</span>
          ) : (
            <span className="burger-icon">&#9776;</span>
          )}
        </div>

        {/* Navbar Links */}
        <ul
  className={`navbar-links ${isMenuOpen ? 'active' : ''}`}
  style={{
    display: windowWidth <= 768 && !isMenuOpen ? 'none' : 'flex',
  }}
>


  {/* ✅ Mobile-only modal and contact info */}
  {windowWidth <= 768 && (
    <>

    

      <div className="footer__contact">
        <p>Contact us at:</p>
        <a href="mailto:info@cloudporteurope.com">info@cloudporteurope.com</a>
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

    </>
  )}

  <img className="mobile-nav-logo" src={Images.FooterLogo} />
</ul>

      </div>
    </nav>
  );
};

export default Navbar;
