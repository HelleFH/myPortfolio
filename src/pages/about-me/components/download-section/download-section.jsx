import React from 'react';
import './download-section.scss'; // Assuming you have the SCSS file

const DownloadSection = () => {
  return (
    <div className="download-section">
      <a
        className="download-section__button"
        href="/images/Helle-Fruergaard-Resume.pdf"
        download="Helle_Fruergaard_Resume"
      >
        Download Resume (pdf)
      </a>
    </div>
  );
};

export default DownloadSection;
