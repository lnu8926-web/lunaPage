import { useState } from "react";

const About = ({ themeClasses }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 py-20 theme-transition"
      >
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className={`section-title ${themeClasses.text}`}>About</h2>
          <div
            className={`space-y-6 font-light leading-relaxed ${themeClasses.textSecondary}`}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary flex items-center justify-center hover-lift focus-ring"
            >
              About Me
            </button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-90 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <div></div>
            <p className="animate-slide-up mb-4">
              안녕하세요, <span className="luna-font text-blue-400">Luna</span>
              입니다. 사용자 경험을 중심으로 깔끔하고 효율적인 웹 애플리케이션을
              만듭니다.
            </p>
            <p className="animate-slide-up">
              React와 JavaScript를 주로 사용하며, 깨끗한 코드와 간결한 디자인을
              추구합니다.
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-400 text-white rounded-lg"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default About;
