import React, { useEffect } from 'react';
import Layout from '../../components/layout/layout';

import ProjectsOverview from './components/project-overview/project-overview';

const Home = () => {
  useEffect(() => {
    document.title = "CloudPort | Future-Proof your Business. Local. Green";
    }, []);

  return (
    <Layout
      heroTitle="Welcome to My Portfolio"
      heroSubtitle="Helle Fruergaard"
      buttons={[
        { type: 'link', text: 'About me', path: '/services' },
      ]}
    >

      <div className='index-container'>
     
      <ProjectsOverview />

      </div>

    </Layout>
  );
};

export default Home;