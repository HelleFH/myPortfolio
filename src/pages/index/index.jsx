import React, { useEffect } from 'react';
import Layout from '../../components/layout/layout';

import ProjectsOverview from './components/project-overview/project-overview';

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

      </div>

    </Layout>
  );
};

export default Home;