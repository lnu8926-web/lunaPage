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
const Contacts = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-2xl mx-auto w-full text-center">
        <h2 className="text-4xl font-light text-slate-100 mb-12">Contact</h2>
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="mailto:your.email@example.com"
            className="p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all"
          >
            <Mail className="text-slate-400" size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all"
          >
            <Github className="text-slate-400" size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all"
          >
            <Linkedin className="text-slate-400" size={20} />
          </a>
        </div>
        <a
          href="mailto:your.email@example.com"
          className="inline-block px-8 py-3 bg-slate-800 text-slate-100 rounded-lg font-light hover:bg-slate-700 transition-all"
        >
          이메일 보내기
        </a>
      </div>
    </section>
  );
};
export default Contacts;
