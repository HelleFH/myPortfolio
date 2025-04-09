import React from 'react';
import Hero from '../hero/hero';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import './layout.scss';

const Layout = ({ heroTitle, heroSubtitle, buttons, showContactUsButton, children }) => {
  return (
    <div className="layout">
      <Navbar />
      <Hero
        title={heroTitle}
        subtitle={heroSubtitle}
        buttons={buttons}  // Pass the buttons prop here
        showContactUsButton={showContactUsButton}  // Pass the showContactUsButton flag here
      />
      <div className="layout__main-content">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
