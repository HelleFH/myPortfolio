import React, { useState, useEffect } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import Images from '../../assets/images';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false); // Track if scrolled
  const [isHidden, setIsHidden] = useState(false); // Track if navbar is hidden
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [scrollTimeout, setScrollTimeout] = useState(null); // For inactivity timeout

  // Scroll detection logic to change navbar style based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scroll state if scroll is more than 100px
      setScrolled(currentScrollY > 50);

      // If scrolling down, hide the navbar after inactivity
      if (currentScrollY > lastScrollY) {
        if (scrollTimeout) {
          clearTimeout(scrollTimeout); // Clear any previous timeout
        }

        // Set a timeout to hide the navbar after 2 seconds of inactivity
        const timeoutId = setTimeout(() => {
          setIsHidden(true); // Hide navbar after inactivity
        }, 2000);
        setScrollTimeout(timeoutId);
      } else {
        // If scrolling up, immediately show the navbar
        setIsHidden(false);
      }

      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    // Add event listener for scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''}`}>
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

        {/* Navbar Links */}
        <ul className="navbar-links">
          {/* About Me Link */}
          <li>
            <Link to="/about" className="navbar-link">About Me</Link>
          </li>

          <li>
            <div className="navbar__social-links">
              <a 
                href="https://www.linkedin.com/in/helle-fruergaard-577763112/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="https://github.com/HelleFH/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
