import React, { useState } from 'react';
import './projects.css';

const projectsData = [
  {
    id: 1,
    name: "Pest Detective Agent",
    image: "/cropproject.png", 
    links: {
      github: "https://github.com/GUHAN0205/Pest-Detective-agent", 
      demo: "https://pest-detective-agent-1.onrender.com/"            
    },
    shortDesc: "An AI-powered web application that detects crop pests and diseases from plant leaf images while providing intelligent treatment recommendations.",
    overview: "Developed to assist farmers and agricultural professionals in identifying crop pests and diseases early. By analyzing uploaded plant leaf images, the system predicts the affected disease/pest with a confidence score and generates treatment/prevention recommendations.",
    features: [
      "Crop pest and disease detection using MobileNetV2",
      "Plant leaf image upload with confidence score predictions",
      "Actionable treatment & prevention recommendations",
      "Scouting history dashboard & field location tracking",
      "Secure user authentication & downloadable reports"
    ],
    techStack: ["React.js", "Python Flask", "TensorFlow", "OpenCV", "MobileNetV2", "MySQL", "HTML5", "CSS3", "JavaScript"]
  },
  {
    id: 2,
    name: "GameSense AI",
    image: "/gameproject.png", 
    links: {
      github: "https://github.com/GUHAN0205/GameSense-AI",   
      demo: "https://game-sense-ai.vercel.app/"            
    },
    shortDesc: "An AI-powered gaming assistant that analyzes player performance and delivers personalized coaching recommendations.",
    overview: "A multi-game AI coaching platform designed to evaluate gameplay statistics, identify performance patterns, and generate personalized recommendations. Helps players understand strengths/weaknesses and gain AI-driven insights to level up.",
    features: [
      "Gameplay performance stats analysis",
      "AI-powered coaching recommendations & personalized feedback",
      "Multi-game support with performance analytics dashboard",
      "Fully responsive and interactive modern user interface"
    ],
    techStack: ["React", "TypeScript", "Python", "JavaScript", "HTML", "CSS"]
  }
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeProject = projectsData[currentIndex];

  // Logic to handle next/prev while triggering re-render for animation
  const handleNext = () => {
    if (currentIndex < projectsData.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <section className="projects-container">
      {/* BACKGROUND DECORATION */}
      <div className="bg-decoration">SYSTEM PROJECTS</div>

      {/* KEY prop forces React to destroy and recreate this div, triggering animation */}
      <div className="project-wrapper" key={currentIndex}>
        
        {/* LEFT SIDE: Visual (Slides in from LEFT) */}
        <div className="project-visual slide-in-left">
          <div className="visual-card">
            <img src={activeProject.image} alt={activeProject.name} className="project-img" />
            {/* The Glorifying Border Overlay */}
            <div className="border-overlay"></div>
          </div>
          
          <nav className="project-nav">
            <button 
              className="nav-btn" 
              onClick={handlePrev} 
              disabled={currentIndex === 0}
            >
              ← PREV
            </button>
            <span className="nav-counter">0{activeProject.id} / 0{projectsData.length}</span>
            <button 
              className="nav-btn" 
              onClick={handleNext} 
              disabled={currentIndex === projectsData.length - 1}
            >
              NEXT →
            </button>
          </nav>
        </div>

        {/* RIGHT SIDE: Details (Slides in from RIGHT) */}
        <div className="project-details slide-in-right">
          <header className="project-header">
            <h2 className="project-name">{activeProject.name}</h2>
            <p className="project-short-desc">{activeProject.shortDesc}</p>
            <div className="project-line"></div>
          </header>

          <div className="project-body">
            <div className="project-overview-box">
              <h4 className="body-section-title">Overview</h4>
              <p className="project-overview">{activeProject.overview}</p>
            </div>

            <div className="project-features-box">
              <h4 className="body-section-title">Key Features</h4>
              <ul className="project-points">
                {activeProject.features.map((feature, index) => (
                  <li key={index} className="point-item">
                    <span className="point-bullet">›</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-tech-box">
              <h4 className="body-section-title">Tech Stack</h4>
              <div className="tech-tags">
                {activeProject.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="project-links">
              <a href={activeProject.links.github} target="_blank" rel="noopener noreferrer" className="link-item">
                GitHub Repo
              </a>

              {activeProject.links.demo && (
                <a href={activeProject.links.demo} target="_blank" rel="noopener noreferrer" className="link-item highlight-link">
                  Live System
                </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;