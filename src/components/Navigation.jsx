import React from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navigation = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
  isDark,
  toggleTheme,
  themeClasses,
}) => {
  return (
    <nav
      className={`fixed top-0 w-full backdrop-blur-md z-50 border-b theme-transition ${
        isDark
          ? "bg-slate-900/95 border-slate-800"
          : "bg-white/95 border-slate-200"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            {/* 테마 토글 버튼 */}
            <button
              onClick={toggleTheme}
              className={`theme-toggle p-2 rounded-lg transition-all duration-300 hover-scale ${
                isDark
                  ? "hover:bg-slate-800 text-yellow-400"
                  : "hover:bg-slate-100 text-orange-500"
              }`}
              aria-label="테마 변경"
            >
              {isDark ? <Moon size={24} /> : <Sun size={24} />}
            </button>

            <span
              className={`luna-font home-title text-2xl tracking-wider gradient-text animate-fade-in`}
            >
              LunaPage
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {["home", "about", "projects", "skills", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link text-sm font-light transition-all duration-300 focus-ring ${
                    activeSection === section
                      ? themeClasses.accent + " active"
                      : `${themeClasses.textSecondary} hover:${themeClasses.text}`
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
            className={`md:hidden p-2 rounded-lg transition-all duration-300 hover-scale focus-ring ${
              isDark
                ? "text-slate-400 hover:bg-slate-800"
                : "text-slate-600 hover:bg-slate-100"
            }`}
            aria-label="메뉴 열기/닫기"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden border-t ${
            isDark
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-slate-200"
          }`}
        >
          <div className="px-6 py-4 space-y-2">
            {["home", "about", "projects", "skills", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-3 text-sm font-light rounded-lg transition-colors ${
                    activeSection === section
                      ? `${themeClasses.accent} ${
                          isDark ? "bg-slate-800" : "bg-slate-100"
                        }`
                      : `${themeClasses.textSecondary} ${
                          isDark ? "hover:bg-slate-800" : "hover:bg-slate-100"
                        }`
                  }`}
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
