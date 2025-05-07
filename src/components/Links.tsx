import resume from '../assets/resume.pdf';

const Links = () => {
  return (
    <section id="link">
      <footer className="bg-gray-800 py-12 mt-16 border-t border-gray-200 text-center">
        <div className="space-y-4">
          <p className="text-lg font-medium">Let’s connect and build something awesome together.</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Marneyd8"
              className="text-indigo-600 hover:underline"
            >
              <i className="fa fa-github"></i> GitHub
            </a>
            <a
              href="https://linkedin.com/in/adam-juh%C3%A1s-a57ab3273/"
              className="text-indigo-600 hover:underline"
            >
              <i className="fa fa-linkedin-square"></i> LinkedIn
            </a>
            <a
              href={resume}
              download
              className="text-indigo-600 hover:underline"
            >
              <i className="fa fa-download"></i> Download CV
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Links;
