import React, { useState, useEffect } from 'react';
import Card from '../Cards/Cards';
import ProjectModal from '../ProjectModal/ProjectModal'
import { frontendProjects } from '../../../../data/frontendprojects';
import { fullStackProjects } from '../../../../data/fullstackprojects';
import './ProjectOverview.scss';
import { useLocation } from 'react-router-dom';
import AnimatedSection from '../../../../components/AnimatedSection';
const ProjectsOverview = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectType, setCurrentProjectType] = useState(null);

  const location = useLocation(); 
  const { selectedProjectIndex: passedIndex, projectType: passedType } = location.state || {}; 

  useEffect(() => {
    if (passedIndex !== undefined && passedType) {
      setSelectedProjectIndex(passedIndex);
      setCurrentProjectType(passedType);
      setIsModalOpen(true); 
    }
  }, [passedIndex, passedType]);

  const openModal = (index, type) => {
    setSelectedProjectIndex(index);
    setCurrentProjectType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProjectIndex(null);
    setCurrentProjectType(null);
  };

  const getProjects = () => {
    const base = currentProjectType === 'frontend' ? frontendProjects : fullStackProjects;
    return base.map((p) => ({ ...p, type: currentProjectType }));
  };

  const handlePrev = () => {
    const projects = getProjects();
    setSelectedProjectIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    const projects = getProjects();
    setSelectedProjectIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const currentProjects = getProjects();

  return (
    
    <div className="projects-overview__container">

      <div   id="react-projects"  className="projects-overview__intro">
      <h2 >React Projects</h2>
      <p>Here's some work that I've done in React. I'm comfortable building responsive apps from the ground up, and I have a strong focus on state management and component architecture.
         I work with both JSX and TypeScript, including React Native.</p>
         </div>
      <div className="projects-overview">
        {frontendProjects.map((project, index) => (
          <Card
            key={project.id}
            project={project}
            onClick={() => openModal(index, 'frontend')}
          />
        ))}
      </div>

  <div id="other-projects"   className="projects-overview__intro">
      <h2 >Other Web Development Projects</h2>
      <p>Here's some samples of my school, practice and hobby work done mainly with JQuery and JavaScript</p>
         </div>   
         <AnimatedSection>

          <div className="projects-overview__container">
    
      <div className="projects-overview">
        {fullStackProjects.map((project, index) => (
          <Card
            key={project.id}
            project={project}
            onClick={() => openModal(index, 'fullstack')} 
          />
        ))}
      </div>
      
      </div>
      </AnimatedSection>
      {isModalOpen && selectedProjectIndex !== null && (
        <ProjectModal
          show={isModalOpen}
          handleClose={closeModal}
          selectedProjectIndex={selectedProjectIndex}
          projects={currentProjects}
          overlayColor="#fff"
          handlePrev={handlePrev}
          handleNext={handleNext}
          handleShowLoginDetails={() => console.log('Show login')}
        />
      )}
    </div>
  );
};

export default ProjectsOverview;
