import { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";

const About = ({ themeClasses }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 py-20 theme-transition"
      >
        <div className="max-w-3xl mx-auto animate-fade-in text-center">
          <h2 className={`section-title ${themeClasses.text} luna-font`}>
            About
          </h2>
          <div
            className={`space-y-6 font-light leading-relaxed ${themeClasses.textSecondary}`}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="aboutBtn btn-secondary flex items-center justify-center hover-lift focus-ring"
              data-tooltip-id="aboutBtn"
              data-tooltip-content="Click Here!"
              data-tooltip-place="bottom"
            >
              About Me
            </button>
            <Tooltip id="aboutBtn" />
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-opacity-90 flex items-center justify-center p-4 z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 헤더 */}
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold mb-2">
                <span className="luna-font text-blue-400">Luna</span>
              </h3>
              <p className="text-gray-500">Front-end Developer</p>
            </div>

            {/* 소개 */}
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-lg mb-2">👋 안녕하세요</h4>
                <p className="text-gray-700">
                  사용자 경험을 중심으로 깔끔하고 효율적인 웹 애플리케이션을
                  만듭니다.
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-lg mb-2">💻 기술 스택</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    Tailwind CSS
                  </span>
                </div>
              </div>

              <div className="border-l-4 border-blue-400 pl-4">
                <h4 className="font-semibold text-lg mb-2">🎯 개발 철학</h4>
                <p className="text-gray-700">
                  깨끗한 코드와 간결한 디자인을 추구합니다.
                </p>
              </div>
            </div>

            {/* 닫기 버튼 */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full px-4 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors font-medium"
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
