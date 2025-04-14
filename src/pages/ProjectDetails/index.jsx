import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, } from "react-router-dom";
import LoginModal from "../../components/LoginModal/LoginModal";
import { useSwipeable } from "react-swipeable";
import { frontendProjects } from '../../data/frontendprojects';
import { fullStackProjects } from '../../data/fullstackprojects';
import Layout from "../../components/Layout/Layout";
import ProjectButtons from "../../components/ProjectButtons/ProjectButtons";
import './index.scss';

const ProjectDetail = () => {
  const { id, type } = useParams();
  const navigate = useNavigate();

  const projectList = type === 'frontend' ? frontendProjects : fullStackProjects;
  const currentIndex = projectList.findIndex(proj => proj.id === parseInt(id, 10));
  const selectedProject = projectList[currentIndex];
  const [project, setProject] = useState(null); 


  const [showLoginDetails, setShowLoginDetails] = useState(false);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    if (!selectedProject) {
      navigate('/404'); // Handle project not found
    }
  }, [selectedProject, navigate]);



  const isFirst = currentIndex === 0;
  const isLast = currentIndex === projectList.length - 1;
  useEffect(() => {
    if (selectedProject) {
      setProject(selectedProject);
  
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollPositionRef.current);
      });
    }
  }, [selectedProject]);

  const navigateToProject = (newIndex) => {
    const newProject = projectList[newIndex];
    if (newProject) {
      navigate(`/project/${type}/${newProject.id}`, {
        state: { scrollY: window.scrollY }
      });
    }
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => !isLast && navigateToProject(currentIndex + 1),
    onSwipedRight: () => !isFirst && navigateToProject(currentIndex - 1),
    trackMouse: true,
  });

  const handleBackToProjects = () => {
    // Go back to the projects overview, passing selectedProjectIndex in the state
    navigate('/', {
      state: { selectedProjectIndex: currentIndex, projectType: type }
    });
  };

  if (!selectedProject) {
    return <p>Loading...</p>;
  }

  return (
    <div className="project-container">
      <Layout heroTitle={selectedProject.name} heroSubtitle={selectedProject.descriptionHeader}>
        <a onClick={handleBackToProjects} className="back-button">
          Back to Projects
        </a>

        <div className="project-details-container">
          <div className="image-wrapper">
            <img src={selectedProject.images[0]} alt={selectedProject.name} className="project-image" />
          </div>
          <div className="project-text">
            <h4>{selectedProject.descriptionHeader}</h4>
            <p>{selectedProject.description}</p>
            {selectedProject.projectDetails && (
  <>
    <h4>Project Features</h4>
    <ul className="project-details-list">
      {selectedProject.projectDetails.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
  </>
)}

            <h4>Technologies Used</h4>
            <ul className="technologies-list">
              {selectedProject.technologiesMore?.map((tech, index) => (
                <li key={index} className="tech-item">{tech}</li>
              ))}
            </ul>
          </div>
          {project && (
  <ProjectButtons
    projectLink={project.projectLink}
    githubLink={project.githubLink}
    buttonText={project.buttonText}
    githubButtonText={project.githubButtonText}
  />
)}


          <div className="navigation-buttons">
              {!isFirst && (
                <button
                  className="nav-button"
                  onClick={() => navigateToProject(currentIndex - 1)}
                >
                  ← Previous Project
                </button>
              )}
              {!isLast && (
                <button
                  className="nav-button"
                  onClick={() => navigateToProject(currentIndex + 1)}
                >
                  Next Project →
                </button>
              )}
            </div>
        </div>

        <LoginModal
          show={showLoginDetails}
          onHide={() => setShowLoginDetails(false)}
          project={selectedProject}
          handleCopyToClipboard={(text) => {
            navigator.clipboard.writeText(text);
            alert(`${text} copied to clipboard!`);
          }}
        />
      </Layout>
    </div>
  );
};

export default ProjectDetail;