import csharp from "../assets/csharp.png";
import corner from "../assets/corner.png";

const Work = () => {
  return (
    <section id="work">
      <div className="bg-gray-800 flex flex-row gap-12 items-center w-full pb-15">
        <img
          src={csharp}
          alt="csharp"
          className="w-full max-w-xs md:max-w-sm scale-80 mx-30 mt-10"
        />
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center mt-10">Work Experience</h2>
          <div className="grid md:grid-cols-2 md:grid-rows-2 gap-6 relative mr-20">
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/20 transition">
              <h3 className="text-2xl font-semibold">Junior C# Developer – AMSYS, s.r.o.</h3>
              <p className="text-lg text-indigo-300 mb-1">09/2024 – Present, Brno</p>
              <p className="text-lg text-gray-300">Developing and maintaining WinForms applications for call center systems and attendance terminals.</p>
            </div>
            <div></div>
            <div className="flex justify-center items-center">
              <img
                src={corner}
                alt="connector"
                className="w-130 pl-90"
              />
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/20 transition">
            <h3 className="text-2xl font-semibold">IT Support Technician – AMSYS, s.r.o.</h3>
              <p className="text-lg text-indigo-300 mb-1">01/2024 – 08/2024, Brno</p>
              <p className="text-lg text-gray-300">Scripting and automation (Python, Kotlin), PostgreSQL SQL queries, Docker container management.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
