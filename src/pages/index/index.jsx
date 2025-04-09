import React, { useEffect } from 'react';
import Layout from '../../components/layout/layout';

import IndustryOverview from './components/industries-cards/industries-cards';

const Home = () => {
  useEffect(() => {
    document.title = "CloudPort | Future-Proof your Business. Local. Green";
    }, []);

  return (
    <Layout
      heroTitle="Welcome to My Portfolio"
      heroSubtitle="Helle Fruergaard"
      buttons={[
        { type: 'link', text: 'Our Services', path: '/services' },
        { type: 'link', text: 'Find out More',  path: '/resources'  }
      ]}
    >

      <div className='index-container'>
     
      <IndustryOverview />

      </div>

    </Layout>
  );
};

export default Home;