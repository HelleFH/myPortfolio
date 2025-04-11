import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LoginModal from "../index/components/login-modal/LoginModal";
import { useSwipeable } from "react-swipeable";
import { frontendProjects } from '../../data/frontendprojects';
import { fullStackProjects } from '../../data/fullstackprojects';
import Layout from "../../components/layout/layout";
import './project-details.scss';

const ProjectDetail = () => {
  const { id, type } = useParams();
  const navigate = useNavigate();

  // Get the appropriate project list based on type
  const projectList = type === 'frontend' ? frontendProjects : fullStackProjects;
  const currentIndex = projectList.findIndex(proj => proj.id === parseInt(id, 10));
  const selectedProject = projectList[currentIndex];

  const [showLoginDetails, setShowLoginDetails] = useState(false);
  const scrollPositionRef = useRef(0); // To hold the scroll position when navigating

  // Handle project not found
  useEffect(() => {
    if (!selectedProject) {
      navigate('/404'); // Redirect to 404 page if project not found
    } else {
      // Store scroll position on page load
      scrollPositionRef.current = window.scrollY;
    }
  }, [selectedProject, navigate]);

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === projectList.length - 1;

  // Swipeable handlers to navigate between projects
  const handlers = useSwipeable({
    onSwipedLeft: () => !isLast && navigateToProject(currentIndex + 1),
    onSwipedRight: () => !isFirst && navigateToProject(currentIndex - 1),
    trackMouse: true,
  });

  const navigateToProject = (newIndex) => {
    const newProject = projectList[newIndex];
    if (newProject) {
      navigate(`/project/${type}/${newProject.id}`, {
        state: { scrollY: window.scrollY }
      });
    }
  };

  const handleBackToProjects = () => {
    // Go back to the projects overview, passing selectedProjectIndex in the state
    navigate('/', {
      state: { selectedProjectIndex: currentIndex, projectType: type }
    });
  };

  // Show "Loading..." if the project is not found yet
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
            <p>{selectedProject.projectDetails}</p>

            <h4>Technologies Used</h4>
            <ul className="technologies-list">
              {selectedProject.technologiesMore?.map((tech, index) => (
                <li key={index} className="tech-item">{tech}</li>
              ))}
            </ul>
          </div>
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
