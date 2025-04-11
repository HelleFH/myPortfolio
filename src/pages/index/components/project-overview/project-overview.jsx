import React, { useState } from 'react';
import Card from '../../cards/cards';
import ProjectModal from '../project-modal/project-modal';
import { frontendProjects } from '../../../../data/frontendprojects';
import { fullStackProjects } from '../../../../data/fullstackprojects';
import './project-overview.scss';

const ProjectsOverview = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectType, setCurrentProjectType] = useState(null);

  const openModal = (index, type) => {
    setSelectedProjectIndex(index);
    setCurrentProjectType(type); // Track the current project type (frontend or fullstack)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProjectIndex(null);
    setCurrentProjectType(null); // Reset type when closing the modal
  };

  const getProjects = () => {
    const projectList = currentProjectType === 'frontend' ? frontendProjects : fullStackProjects;
    return projectList.map((p) => ({ ...p, type: currentProjectType }));
  };

  const handlePrev = () => {
    const projects = getProjects();
    setSelectedProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    const projects = getProjects();
    setSelectedProjectIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
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
