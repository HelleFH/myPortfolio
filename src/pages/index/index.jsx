import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import DesignEmbeds from '../design-embeds/components/DesignEmbeds/DesignEmbeds';
import ProjectsOverview from './components/ProjectOverview/ProjectOverview';

const Home = () => {

  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Helle Fruergaard | Portfolio";
  }, []);

  useEffect(() => {
    const scrollToId = location.state?.scrollTo;
    if (!scrollToId) return;

    const tryScroll = () => {
      const el = document.getElementById(scrollToId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        navigate(".", { replace: true, state: {} }); // Clear state after scroll
      } else {
        setTimeout(tryScroll, 50); // Retry after short delay
      }
    };

    tryScroll();
  }, [location, navigate]);
  return (
    <Layout
      heroTitle="Hi, I’m Helle. I build things for the web."
      heroSubtitle="Welcome to my portfolio"
      buttons={[
        { type: 'link', text: 'About me', path: '/about' },
      ]}
    >
      <div className='index-container'>
        <ProjectsOverview />
        <div id="design-media">
          <DesignEmbeds />
        </div>

      </div>

    </Layout>
  );
};

export default Home;