
const Work = () => {
  return (
    <section id="work">
      <div className="bg-gray-800 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/assets/dev-placeholder.png" // replace with dev illustration
          alt="Developer at work"
          className="w-full rounded-xl shadow-md"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Junior C# Developer – AMSYS, s.r.o.</h3>
              <p className="text-sm text-gray-500">09/2024 – Present, Brno</p>
              <p>Developing and maintaining WinForms applications for call center systems and attendance terminals.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">IT Support Technician – AMSYS, s.r.o.</h3>
              <p className="text-sm text-gray-500">01/2024 – 08/2024, Brno</p>
              <p>Scripting and automation (Python, Kotlin), PostgreSQL SQL queries, Docker container management.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
