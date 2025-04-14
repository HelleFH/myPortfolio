import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import styles from './LoginModal.scss'; // ✅ Use CSS modules here

const LoginModal = ({ show, onHide, project, overlayColor, handleCopyToClipboard }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      className={styles.projectLoginModal}  // Use the CSS Module class
      backdropClassName={styles.customBackdrop}  // Use the CSS Module class
    >
      <Modal.Dialog>
        <Modal.Header closeButton style={{ backgroundColor: overlayColor }}>
          <Modal.Title>Login Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {project?.username && (
            <div className={styles.loginSection}>
              <p>
                <strong>User:</strong> {project.username}
                <FontAwesomeIcon
                  icon={faCopy}
                  onClick={() => handleCopyToClipboard(project.username)}
                  className={styles.copyIcon}  // CSS Module class
                  title="Copy Username to Clipboard"
                />
              </p>
              <p>
                <strong>Password:</strong> {project.password}
                <FontAwesomeIcon
                  icon={faCopy}
                  onClick={() => handleCopyToClipboard(project.password)}
                  className={styles.copyIcon}  // CSS Module class
                  title="Copy Password to Clipboard"
                />
              </p>
            </div>
          )}

          {project?.adminUsername && (
            <div className={styles.loginSection}>
              <p>
                <strong>Admin:</strong> {project.adminUsername}
                <FontAwesomeIcon
                  icon={faCopy}
                  onClick={() => handleCopyToClipboard(project.adminUsername)}
                  className={styles.copyIcon}  // CSS Module class
                  title="Copy Admin Username to Clipboard"
                />
              </p>
              <p>
                <strong>Password:</strong> {project.adminPassword}
                <FontAwesomeIcon
                  icon={faCopy}
                  onClick={() => handleCopyToClipboard(project.adminPassword)}
                  className={styles.copyIcon}  // CSS Module class
                  title="Copy Admin Password to Clipboard"
                />
              </p>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={onHide}>
            OK
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};

export default LoginModal;
