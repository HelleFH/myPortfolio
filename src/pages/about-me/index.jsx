import React from 'react';
import AboutMe from './components/about-me/AboutMe';
import SkillsSection from './components/SkillsSection/SkillsSection'
import Layout from '../../components/Layout/Layout';
import './index.scss'; 

const AboutMePage = () => {
  return (
<div className='about-page'>   
  
   <Layout
    heroTitle="About Me"
    heroSubtitle="Helle Fruergaard"
  
  >

    <div className="about-page__container">
      <section className="about-page__header">
        <h1 className="about-page__title">About Me</h1>
        <p className="about-page__subtitle">
          Here’s a little bit about who I am and what I do
        </p>
      </section>

      <section className="about-page__content">
        <AboutMe />
        <SkillsSection />

      </section>
    </div>
    </Layout>
    </div>

  );
};

export default AboutMePage;
