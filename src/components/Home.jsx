import { Sun, Moon } from "lucide-react";

const Home = ({ scrollToSection, isDark, personalInfo, themeClasses }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 theme-transition"
    >
      <div className="text-center max-w-3xl mx-auto animate-fade-in">
        {/* 중앙 아이콘 (순수 장식용) */}
        <div className="mx-auto mb-12 animate-float">
          {isDark ? (
            <Moon className="text-blue-400 mx-auto hover-scale" size={48} />
          ) : (
            <Sun className="text-orange-500 mx-auto hover-scale" size={48} />
          )}
        </div>

        <h1 className="luna-font home-title responsive-title mb-6 text-5xl md:text-6xl lg:text-7xl">
          LunaPage
        </h1>
        <p
          className={`text-xl mb-12 font-light animate-slide-up ${themeClasses.textSecondary}`}
        >
          {personalInfo.role}
        </p>
        <div className="flex justify-center gap-4 animate-slide-up">
          <button
            onClick={() => scrollToSection("projects")}
            className="btn-primary hover-lift focus-ring"
          >
            프로젝트
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="btn-secondary hover-lift focus-ring"
          >
            연락하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
