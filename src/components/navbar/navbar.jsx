import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import Images from '../../assets/images';
import SocialLinks from '../SocialLinks/SocialLinks'
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false); // Track if scrolled
  const [isHidden, setIsHidden] = useState(false); // Track if navbar is hidden
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [scrollTimeout, setScrollTimeout] = useState(null); // For inactivity timeout
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll detection logic to change navbar style based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scroll state if scroll is more than 50px
      setScrolled(currentScrollY > 50);

      // If scrolling down, hide the navbar after inactivity, but not when menu is open
      if (currentScrollY > lastScrollY && !menuOpen) {
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
  }, [lastScrollY, scrollTimeout, menuOpen]); // Add menuOpen to dependencies to prevent hiding navbar when menu is open

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''}`}>
      <div className="navbar-content">
        {/* Logo Section - Wrap the logo with a Link to '/' */}
        <div className="navbar-logo-container">
          <Link to="/"> {/* Add Link component to redirect to home */}
            <img
              className="navbar-logo"
              src={scrolled ? Images.FooterLogo : Images.FooterLogo} // Change logo based on scroll
              alt="Logo"
            />
          </Link>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navbar Links */}
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {/* Home Link visible only in mobile view */}
          <li className="mobile-home-link">
            <Link to="/" className="navbar-link" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>

          <div className="divider"></div> {/* Divider between links */}

          {/* About Me Link */}
          <li>
            <Link to="/about" className="navbar-link" onClick={() => setMenuOpen(false)}>About Me</Link>
          </li>

          <div className="divider"></div> {/* Divider between links */}

          <li>
            <SocialLinks />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
