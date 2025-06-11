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
       buttons={[
        { type: 'link', text: 'Home', path: '/' },
      ]}
  >


        <AboutMe />
        <SkillsSection />

    </Layout>
    </div>

  );
};

export default AboutMePage;
