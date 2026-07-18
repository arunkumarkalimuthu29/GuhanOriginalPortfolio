import React from 'react';
import './about.css';

const AboutSection = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        
        {/* TWO-COLUMN GRID */}
        <div className="about-grid">
          
          {/* Left Column: Text Content */}
          <div className="about-text-column">
            <h1 className="about-title">
              About <span className="highlight-inline">Me</span>
            </h1>
            <div className="about-paragraphs">
              <p className="about-p">
                Hello! I'm Guhan T, an Electronics and Communication Engineering student with a strong passion for building intelligent software solutions and innovative embedded systems. I enjoy transforming ideas into practical applications through continuous learning and hands-on project development.
              </p>
              <p className="about-p">
                My primary interests include Artificial Intelligence, Machine Learning, Embedded Systems, Internet of Things (IoT), and Full Stack Web Development. I enjoy exploring emerging technologies and continuously improving my technical and problem-solving skills through real-world projects.
              </p>
              <p className="about-p">
                I believe in learning by building, collaborating with others, and creating solutions that make a meaningful impact. My goal is to grow as a software and embedded systems engineer while contributing to innovative technology-driven organizations.
              </p>
            </div>
          </div>

          {/* Right Column: Highlights Card */}
          <div className="about-card-column">
            <div className="highlights-card">
              <div className="card-border-gradient"></div>
              
              {/* About Profile Photo */}
              <div className="about-profile-wrapper">
                <img src="/Photo.jpg.jpeg" alt="Guhan T" className="about-profile-pic" />
                <div className="about-profile-glow"></div>
              </div>

              <h3 className="highlights-title">Quick Highlights</h3>
              <ul className="highlights-list">
                <li>
                  <span className="bullet gold">•</span> 
                  <span className="highlight-item">Electronics & Communication Engineering Student</span>
                </li>
                <li>
                  <span className="bullet pink">•</span> 
                  <span className="highlight-item">Passionate about AI & Machine Learning</span>
                </li>
                <li>
                  <span className="bullet gold">•</span> 
                  <span className="highlight-item">Embedded Systems Enthusiast</span>
                </li>
                <li>
                  <span className="bullet pink">•</span> 
                  <span className="highlight-item">IoT Developer</span>
                </li>
                <li>
                  <span className="bullet gold">•</span> 
                  <span className="highlight-item">Full Stack Learner</span>
                </li>
                <li>
                  <span className="bullet pink">•</span> 
                  <span className="highlight-item">Open to Internship & Placement Opportunities</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;