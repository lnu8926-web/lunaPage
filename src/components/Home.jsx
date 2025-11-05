import { Moon } from "lucide-react";

const Home = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="text-center max-w-3xl mx-auto">
        <Moon className="text-yellow-50 mx-auto mb-12" size={64} />
        <h1 className="headerTitle text-6xl md:text-7xl font-extralight text-slate-100 mb-6">
          LunaPage
        </h1>
        <p className="text-xl text-slate-400 mb-12 font-light">
          Frontend Developer
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-slate-800 text-slate-100 rounded-lg font-light hover:bg-slate-700 transition-all"
          >
            프로젝트
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border border-slate-700 text-slate-100 rounded-lg font-light hover:border-slate-600 transition-all"
          >
            연락하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
