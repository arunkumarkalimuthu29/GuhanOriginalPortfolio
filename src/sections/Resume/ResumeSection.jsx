import React from 'react';
import './resume.css';

const ResumeSection = () => {
  return (
    <section className="resume-container">
      <div className="resume-content">
        
        {/* HEADER */}
        <div className="resume-header">
          <h2 className="section-title">MY RESUME</h2>
          <p className="resume-desc">
            Detailed overview of my Skills, Education and Experience.
          </p>
          <span className="last-updated">Last Verified: July 2026</span>
        </div>

        {/* ACTIONS */}
        <div className="resume-actions">
          <a href="/GuhanResume.pdf" download="Guhan_Resume.pdf" className="download-btn">
            DOWNLOAD PDF FILE
          </a>
        </div>

        {/* PDF VIEWER WRAPPER (For the Border & Animation) */}
        <div className="pdf-wrapper">
          {/* The magical scanline effect overlay */}
          <div className="scan-line"></div>
          
          <iframe 
            src="/GuhanResume.pdf#view=FitH" 
            className="pdf-viewer" 
            title="Resume Viewer" 
          />
        </div>

      </div>
    </section>
  );
};

export default ResumeSection;