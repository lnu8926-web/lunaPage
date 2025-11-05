const Skills = ({ skills }) => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl font-light text-slate-100 mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <h3 className="text-lg font-light text-blue-400 mb-4">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="text-slate-400 font-light text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
