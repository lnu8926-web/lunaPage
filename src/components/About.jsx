const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-light text-slate-100 mb-12">About</h2>
        <div className="space-y-6 text-slate-400 font-light leading-relaxed">
          <p>
            안녕하세요, Luna입니다. 사용자 경험을 중심으로 깔끔하고 효율적인 웹
            애플리케이션을 만듭니다.
          </p>
          <p>
            React와 JavaScript를 주로 사용하며, 깨끗한 코드와 간결한 디자인을
            추구합니다.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
