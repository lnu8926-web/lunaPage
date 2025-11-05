import React from "react";
import { Moon, Menu, X } from "lucide-react";

const Navigation = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
}) => {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Moon className="text-yellow-50" size={24} />
            <span className="text-xl font-light text-slate-100 tracking-wider">
              LUNA
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {["home", "about", "projects", "skills", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-light transition-colors ${
                    activeSection === section
                      ? "text-blue-400"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-400"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-6 py-4 space-y-2">
            {["home", "about", "projects", "skills", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-3 text-sm font-light text-slate-400 hover:text-slate-200"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
