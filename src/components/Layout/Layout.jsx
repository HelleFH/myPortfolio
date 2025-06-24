import React from 'react';
import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import './Layout.scss';
import AnimatedSection from '../AnimatedSection';

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
      <AnimatedSection>
        <Footer />
      </AnimatedSection>

    </div>
  );
};

export default Layout;
