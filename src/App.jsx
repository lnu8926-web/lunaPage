import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Moon,
  Contact,
} from "lucide-react";

import "./app.css";

import Navigation from "./components/Navigation.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Project from "./components/Project.jsx";
import Skills from "./components/Skills.jsx";
import Contacts from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "E-커머스 플랫폼",
      description:
        "React와 Node.js를 활용한 풀스택 쇼핑몰 웹사이트입니다. 결제 시스템과 관리자 대시보드를 포함합니다.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      title: "날씨 앱",
      description:
        "실시간 날씨 정보를 제공하는 반응형 웹 애플리케이션입니다. OpenWeather API를 활용했습니다.",
      tech: ["React", "API", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "태스크 매니저",
      description:
        "드래그 앤 드롭 기능이 있는 칸반 보드 스타일의 작업 관리 도구입니다.",
      tech: ["React", "Redux", "Firebase"],
      link: "#",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "Redux"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    },
    { category: "Tools", items: ["Git", "Docker", "Webpack", "VS Code"] },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <Home scrollToSection={scrollToSection} />

      {/* About Section */}
      <About scrollToSection={scrollToSection} />

      {/* Projects Section */}
      <Project projects={projects} />

      {/* Skills Section */}
      <Skills skills={skills} />

      {/* Contact Section */}
      <Contacts />

      {/* Footer */}
      <Footer />
    </div>
  );
}
