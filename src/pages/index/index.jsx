import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import DesignEmbeds from '../design-embeds/components/DesignEmbeds/DesignEmbeds';
import AnimatedSection from '../../components/AnimatedSection';

import ProjectsOverview from './components/ProjectOverview/ProjectOverview'
const Home = () => {
  useEffect(() => {
    document.title = "Helle Fruergaard | Portfolio";
    }, []);

  return (
    <Layout
      heroTitle="Welcome to My Portfolio"
      heroSubtitle="Helle Fruergaard"
      buttons={[
        { type: 'link', text: 'About me', path: '/about' },
      ]}
    >

      <div className='index-container'>
      <ProjectsOverview />
<AnimatedSection>

      <DesignEmbeds />
</AnimatedSection>

      </div>

    </Layout>
  );
};

export default Home;