import React from "react";

// Hooks
import { usePortfolio } from "./hooks/usePortfolio";

// Data
import { projects } from "./data/projects";
import { skills, personalInfo } from "./data/portfolio";

// Constants
import { THEME_CLASSES } from "./constants/theme";

// Components
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contacts from "./components/Contact";
import Footer from "./components/Footer";
import ScrollIndicator from "./components/ScrollIndicator";

// Styles
import "./app.css";

export default function App() {
  const {
    isMenuOpen,
    setIsMenuOpen,
    activeSection,
    isDark,
    toggleTheme,
    scrollToSection,
  } = usePortfolio();

  const themeClasses = isDark ? THEME_CLASSES.DARK : THEME_CLASSES.LIGHT;

  return (
    <div className={themeClasses.background}>
      <ScrollIndicator />
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isDark={isDark}
        toggleTheme={toggleTheme}
        themeClasses={themeClasses}
      />

      <main>
        <Home
          scrollToSection={scrollToSection}
          isDark={isDark}
          personalInfo={personalInfo}
          themeClasses={themeClasses}
        />

        <About personalInfo={personalInfo} themeClasses={themeClasses} />

        <Project projects={projects} themeClasses={themeClasses} />

        <Skills skills={skills} themeClasses={themeClasses} />

        <Contacts personalInfo={personalInfo} themeClasses={themeClasses} />
      </main>

      <Footer themeClasses={themeClasses} />
    </div>
  );
}
