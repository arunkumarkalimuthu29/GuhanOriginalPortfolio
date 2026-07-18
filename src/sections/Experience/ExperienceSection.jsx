import React from 'react';
import './experience.css';

const internshipsData = [
  {
    role: "Artificial Intelligence Intern",
    org: "Infosys Springboard",
    duration: "1 Month (Virtual)",
    desc: "Completed a virtual internship focused on AI fundamentals. Explored machine learning basics, models, and practical applications through guided learning and hands-on activities."
  },
  {
    role: "Arduino Programming Intern",
    org: "Internshala",
    duration: "1 Month (Virtual)",
    desc: "Completed a virtual internship on Arduino Programming. Learned the fundamentals of embedded systems, sensor interfacing, microcontrollers, and IoT applications."
  }
];

const certificationsData = [
  {
    title: "Database Management & SQL",
    issuer: "Infosys Springboard",
    desc: "Covered SQL database fundamentals, relational database design, query writing, and data manipulation."
  },
  {
    title: "Java Foundation",
    issuer: "Scalar Academy & GUVI",
    desc: "Learned Java programming fundamentals, object-oriented concepts, algorithm design, and problem solving."
  },
  {
    title: "Principles of Generative AI",
    issuer: "Infosys Springboard",
    desc: "Introductory course on Generative AI concepts, prompt engineering techniques, and practical AI applications."
  }
];

const achievementsData = [
  {
    title: "Science Olympiad Foundation",
    reward: "First Prize",
    desc: "Secured 1st Prize in the Inter-School Science Olympiad Foundation Competition."
  },
  {
    title: "Inter-College Handball",
    reward: "First Prize",
    desc: "Secured 1st Prize in the Inter-College Handball Competition."
  }
];

const ExperienceSection = () => {
  return (
    <section className="experience-section">
      <div className="experience-container">
        
        {/* MAIN HEADING */}
        <h2 className="section-title">Experience & Achievements</h2>

        {/* 1. INTERNSHIPS */}
        <div className="experience-subsection">
          <h3 className="category-subtitle">Internship Experience</h3>
          <div className="grid-row-2">
            {internshipsData.map((item, index) => (
              <div 
                key={index} 
                className="exp-card anim-left" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-header">
                  <h3 className="card-role">{item.role}</h3>
                  <span className="card-date">{item.duration}</span>
                </div>
                <h4 className="card-org">{item.org}</h4>
                <p className="card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. CERTIFICATIONS */}
        <div className="experience-subsection">
          <h3 className="category-subtitle">Certifications</h3>
          <div className="grid-row-3">
            {certificationsData.map((item, index) => (
              <div 
                key={index} 
                className="exp-card anim-up" 
                style={{ animationDelay: `${(index + 2) * 0.15}s` }}
              >
                <div className="card-header">
                  <h3 className="card-role">{item.title}</h3>
                </div>
                <h4 className="card-org">{item.issuer}</h4>
                <p className="card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. ACHIEVEMENTS */}
        <div className="experience-subsection">
          <h3 className="category-subtitle">Achievements</h3>
          <div className="grid-row-2">
            {achievementsData.map((item, index) => (
              <div 
                key={index} 
                className="exp-card anim-right" 
                style={{ animationDelay: `${(index + 5) * 0.15}s` }}
              >
                <div className="card-header">
                  <h3 className="card-role">{item.title}</h3>
                  <span className="card-badge">{item.reward}</span>
                </div>
                <p className="card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;