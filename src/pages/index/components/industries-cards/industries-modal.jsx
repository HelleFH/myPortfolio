import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './industries-modal.scss'; 
import LoginModal from './LoginModal';

const ProjectModal = ({
  show,
  handleClose,
  overlayColor,
  selectedProjectIndex,
  projects,
  handlePrev,
  handleNext,
}) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  
  const handleShowLoginDetails = () => {
    setShowLoginModal(true);
  };

  const handleHideLoginDetails = () => {
    setShowLoginModal(false);
  };

  if (selectedProjectIndex === null || !projects[selectedProjectIndex]) {
    return null;
  }

  const project = projects[selectedProjectIndex];
  const technologies = project.technologies || '';

  return (
    <Modal show={show} onHide={handleClose} centered className="custom-modal">
      <Modal.Dialog className="login-modal-dialog fade-in">
        <Modal.Body {...swipeHandlers} className="modal-body-custom">
          <Button className="close-button" onClick={handleClose}>
            &times;
          </Button>

          <div className="chevron chevron-left" onClick={handlePrev}>
            <FontAwesomeIcon icon={faChevronLeft} size="sm" />
          </div>

          <div className="modal-image-container">
            <img
              className="modal-image"
              src={project.images[0]}
              alt={project.name}
              style={{ backgroundColor: overlayColor }}
            />
          </div>

          <div className="chevron chevron-right" onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronRight} size="sm" />
          </div>

          <div className="d-flex flex-column justify-content-around gap-2">
            <div className="modal-content-custom">
              <h2 className="modal-title">{project.name}</h2>
              <p className="project-description">{project.descriptionHeader}</p>

              <ul className="technologies-list">
                {technologies.split(',').map((tech, i) => (
                  <li className="tech-item" key={i}>
                    {tech.trim()}
                  </li>
                ))}
              </ul>
            </div>

            <div className="buttons-container d-flex gap-2">
              <button
                className="project-button"
                onClick={() => window.open(project.projectLink, '_blank')}
              >
                {project.buttonText}
              </button>
              <button
                className="github-button"
                onClick={() => window.open(project.githubLink, '_blank')}
              >
                {project.githubButtonText}
              </button>
            </div>

            <div className="links-container">
            <Link to={`/project/${project.type}/${project.id}`} className="read-more-link">
  Read More
</Link>
              {project.username && (
                <a onClick={handleShowLoginDetails}>Show Login Details</a>
              )}
            </div>

            <LoginModal
              show={showLoginModal}
              onHide={handleHideLoginDetails}
              project={project}
              overlayColor={overlayColor}
              backdropClassName="login-modal-backdrop"
              dialogClassName="project-login-modal"
              handleCopyToClipboard={(text) => {
                navigator.clipboard.writeText(text);
                alert('Copied to clipboard');
              }}
            />
          </div>
       
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};

export default ProjectModal;
