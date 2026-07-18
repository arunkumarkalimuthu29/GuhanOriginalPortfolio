import React, { useState } from "react";
import HomeSection from "./sections/Home/HomeSection";
import AboutSection from "./sections/About/AboutSection";
import SkillsSection from "./sections/Skills/SkillsSection";
import ProjectsSection from "./sections/Projects/ProjectsSection";
import ResumeSection from "./sections/Resume/ResumeSection";
import ContactSection from "./sections/Contact/ContactSection";
import ChainNavigation from "./navigation/ChainNavigation"; 
import FocusGlow from "./navigation/FocusGlow"; 
import Logo from "./navigation/Logo";
import AIAssistant from "./ai/AIAssistant";
import ExperienceSection from './sections/Experience/ExperienceSection';

// NEW IMPORT
import { useScrollNavigation } from "./hooks/useScrollNavigation";

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const [visitedSections, setVisitedSections] = useState([]);

  // Navigation Logic
  const handleNavigate = (sectionId) => {
    setCurrentSection(sectionId);
    setVisitedSections((prev) => {
      if (!prev.includes(sectionId)) return [...prev, sectionId];
      return prev;
    });
  };

  // ✅ ACTIVATE SCROLL NAVIGATION HOOK
  // This will silently listen for scroll events and trigger handleNavigate
  // useScrollNavigation(currentSection, handleNavigate);

  // Logic: Go Home
  const handleGoHome = () => {
    setCurrentSection("home");
  };

  const handleEnterPortfolio = () => {
    handleNavigate("about");
  };

  return (
    <main>
      <AIAssistant />

      {currentSection !== "home" && (
        <>
          <Logo onClick={handleGoHome} />
          <FocusGlow currentSection={currentSection} />
          <ChainNavigation 
            currentSection={currentSection}
            visitedSections={visitedSections}
            onNavigate={handleNavigate}
          />
        </>
      )}

      {currentSection === "home" && <HomeSection onStart={handleEnterPortfolio} />}
      {currentSection === "about" && <AboutSection />}
      {currentSection === "skills" && <SkillsSection />}
      {currentSection === "projects" && <ProjectsSection />}
      {currentSection === "experience" && <ExperienceSection />}
      {currentSection === "resume" && <ResumeSection />}
      {currentSection === "contact" && <ContactSection />}
    </main>
  );
}

export default App;