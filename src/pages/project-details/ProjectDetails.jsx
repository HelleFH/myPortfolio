import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LoginModal from "../index/components/login-modal/LoginModal";
import { useSwipeable } from "react-swipeable";
import { frontendProjects } from '../../frontendprojects';
import { fullStackProjects } from '../../fullstackprojects';
import Layout from "../../components/layout/layout";
import './project-details.scss';

const ProjectDetail = () => {
  const { id, type } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [showLoginDetails, setShowLoginDetails] = useState(false);

  const projectList = type === 'frontend' ? frontendProjects : fullStackProjects;
  const currentIndex = projectList.findIndex(proj => proj.id === parseInt(id, 10));
  const selectedProject = projectList[currentIndex];

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === projectList.length - 1;

  useEffect(() => {
    if (selectedProject) {
      setProject(selectedProject);
    }
  }, [selectedProject]);

  const navigateToProject = (newIndex) => {
    const newProject = projectList[newIndex];
    if (newProject) {
      navigate(`/project/${type}/${newProject.id}`);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => !isLast && navigateToProject(currentIndex + 1),
    onSwipedRight: () => !isFirst && navigateToProject(currentIndex - 1),
    trackMouse: true,
  });

  if (!project) {
    return <p>Loading...</p>;
  }

  return (
    <div className="project-container">
      {/* Pass project name as heroTitle */}
      <Layout 
        heroTitle={project.name} 
        heroSubtitle={project.descriptionHeader} 
        buttons={[
          { type: 'link', text: 'About me', path: '/services' },
        ]}
      >
        <div {...handlers}>
          <a onClick={() => navigate("/")} className="back-button">
            Back to Projects
          </a>

          <div className="project-details-container">

            <div className="image-wrapper">
              <img src={project.images[0]} alt={project.name} className="project-image" />
            </div>
            <div className="project-text">
              <h4>{project.descriptionHeader}</h4>
              <p>{project.description}</p>
              <p>{project.projectDetails}</p>

              <h5>Technologies Used</h5>
              <ul className="technologies-list">
                {project.technologiesMore?.map((tech, index) => (
                  <li key={index} className="tech-item">{tech}</li>
                ))}
              </ul>
            </div>
            <div className="buttons-container">
              {project.username && (
                <a className="login-button" onClick={() => setShowLoginDetails(true)}>
                  Show Login Details
                </a>
              )}
              <a
                href={project.projectLink}
                className="project-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.buttonText || "Visit Project"}
              </a>
              <a
                href={project.githubLink}
                className="github-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.githubButtonText || "View on GitHub"}
              </a>
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
            project={project}
            handleCopyToClipboard={(text) => {
              navigator.clipboard.writeText(text);
              alert(`${text} copied to clipboard!`);
            }}
          />
        </div>
      </Layout>
    </div>
  );
};

export default ProjectDetail;
