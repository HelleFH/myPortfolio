import React from 'react';

const ContactUsButton = ({ openModal, title = "Contact me" }) => {
  return (
    <div className="contact-us-button-container">
      <button className="contact-us-btn" onClick={openModal}>
        {title}
      </button>
    </div>
  );
};

export default ContactUsButton;
