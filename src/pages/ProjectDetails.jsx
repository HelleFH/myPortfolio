import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import LoginModal from "./index/components/industries-cards/LoginModal";
import { useSwipeable } from "react-swipeable";
import { frontendProjects } from '../frontendprojects';
import { fullStackProjects } from '../fullstackprojects';
import Layout from "../components/layout/layout";
import './project-details.scss'

const ProjectDetail = () => {
  const { id } = useParams(); // To fetch the project ID from the URL params
  const navigate = useNavigate();
  const location = useLocation();

  const [project, setProject] = useState(null);
  const [showLoginDetails, setShowLoginDetails] = useState(false);

  // Separate the frontend and backend projects
  const frontendProject = frontendProjects.find(proj => proj.id === parseInt(id, 10));
  const backendProject = fullStackProjects.find(proj => proj.id === parseInt(id, 10));

  // Get the correct project based on the type passed in the location state
  const projectType = location.state?.projectType; // Either 'frontend' or 'backend'
  const selectedProject = projectType === 'frontend' ? frontendProject : backendProject;

  // Find the current index
  const projects = projectType === 'frontend' ? frontendProjects : fullStackProjects;
  const currentIndex = projects.findIndex(proj => proj.id === parseInt(id, 10));

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === projects.length - 1;

  useEffect(() => {
    if (selectedProject) {
      setProject(selectedProject);
    }
  }, [selectedProject]);

  const navigateToProject = (newIndex) => {
    const newProject = projects[newIndex];
    if (newProject) {
      navigate(`/project/${newProject.id}`, {
        state: { projectType, selectedProjectIndex: newIndex },
      });
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
            <Layout>

        <div {...handlers}>
          <a onClick={() => navigate("/")} className="back-button">
            Back to Projects
          </a>

          <div className="chevron-container">
            {!isFirst && (
              <button onClick={() => navigateToProject(currentIndex - 1)} className="chevron-button chevron-button__left">
                &lt;
              </button>
            )}
            <div className="chevron-content"></div>
            {!isLast && (
              <button onClick={() => navigateToProject(currentIndex + 1)} className="chevron-button chevron-button__right">
                &gt;
              </button>
            )}
          </div>

          <div className="project-details-container">
            <h1 className="project-header">{project.name}</h1>

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
