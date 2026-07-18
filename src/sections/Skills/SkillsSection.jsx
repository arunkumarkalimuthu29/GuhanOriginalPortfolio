import { 
  FaJava, FaPython, FaJs, FaGitAlt, FaGithub, 
  FaDatabase, FaHtml5, FaCss3Alt, FaMicrochip, FaWifi,
  FaBrain, FaRobot, FaProjectDiagram, FaLightbulb, FaCode, FaWindows
} from 'react-icons/fa';

import { SiArduino, SiMysql } from 'react-icons/si';

import './skills.css';

const skillsCategories = [
  {
    title: "Programming",
    skills: [
      { id: 1, name: "Java", icon: <FaJava />, color: "#f89820" },
      { id: 2, name: "Python", icon: <FaPython />, color: "#3776AB" },
      { id: 3, name: "SQL", icon: <FaDatabase />, color: "#00758F" },
      { id: 4, name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
      { id: 5, name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
      { id: 6, name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    ]
  },
  {
    title: "Electronics & Embedded",
    skills: [
      { id: 7, name: "Arduino", icon: <SiArduino />, color: "#00979D" },
      { id: 8, name: "Embedded Systems", icon: <FaMicrochip />, color: "#FFD700" },
      { id: 9, name: "IoT", icon: <FaWifi />, color: "#FF1493" },
    ]
  },
  {
    title: "Software & Database",
    skills: [
      { id: 10, name: "MySQL", icon: <SiMysql />, color: "#00758F" },
      { id: 11, name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { id: 12, name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
      { id: 13, name: "VS Code", icon: <FaCode />, color: "#007ACC" },
      { id: 14, name: "MS Office", icon: <FaWindows />, color: "#D83B01" },
    ]
  },
  {
    title: "Core Concepts",
    skills: [
      { id: 15, name: "AI Fundamentals", icon: <FaBrain />, color: "#9C27B0" },
      { id: 16, name: "ML Basics", icon: <FaRobot />, color: "#4CAF50" },
      { id: 17, name: "Data Structures", icon: <FaProjectDiagram />, color: "#FF9800" },
      { id: 18, name: "Problem Solving", icon: <FaLightbulb />, color: "#FFEB3B" },
    ]
  }
];

const SkillsSection = () => {
  
  const getRandomScatter = () => {
    const x = Math.floor(Math.random() * 800 - 400); 
    const y = Math.floor(Math.random() * 800 - 400); 
    const r = Math.floor(Math.random() * 360); 
    return { 
      '--tx': `${x}px`, 
      '--ty': `${y}px`, 
      '--tr': `${r}deg` 
    };
  };

  return (
    <section className="skills-container">
      <div className="skills-content">
        <h2 className="skills-header">Technical Skills</h2>
        
        <div className="skills-wrapper">
          {skillsCategories.map((category, catIndex) => (
            <div key={catIndex} className="skills-category">
              
              <h3 className="category-title">{category.title}</h3>
              
              <div className="skills-grid">
                {category.skills.map((skill, index) => (
                  <div 
                    key={skill.id} 
                    className="skill-card"
                    style={{ 
                      ...getRandomScatter(), 
                      animationDelay: `${index * 0.05}s` 
                    }} 
                  >
                    {/* The Frame gets the Glorifying Border */}
                    <div className="icon-frame">
                      {/* We pass the specific color to the icon container */}
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                    </div>
                    
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;