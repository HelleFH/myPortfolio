import React, { useState } from 'react';
import Card from '../../../../components/cards';
import ProjectModal from './industries-modal';
import { frontendProjects } from '../../../../frontendprojects';
import { fullStackProjects } from '../../../../fullstackprojects';

import './industries-cards.scss';

const ProjectsOverview = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectType, setCurrentProjectType] = useState(null); // 👉 track which type

  const openModal = (index, type) => {
    setSelectedProjectIndex(index);
    setCurrentProjectType(type); // 👉 set type here
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
      <h2>Frontend Projects</h2>
      <div className="projects-overview">
        {frontendProjects.map((project, index) => (
          <Card
            key={project.id}
            project={project}
            onClick={() => openModal(index, 'frontend')}
          />
        ))}
      </div>

      <h2>Fullstack Projects</h2>
      <div className="projects-overview">
        {fullStackProjects.map((project, index) => (
          <Card
            key={project.id}
            project={project}
            onClick={() => openModal(index, 'fullstack')} 
          />
        ))}
      </div>

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
