import eduImage from "../assets/education.svg";

const School = () => {
  return (
    <section id="school">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 pl-25">Education</h2>
        <div className="space-y-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-10">
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/20 transition">
              <h3 className="text-2xl font-semibold">
                Masaryk University – Faculty of Informatics
              </h3>
              <p className="text-lg text-indigo-300 mb-1">2022 – 2025</p>
              <p className="text-lg text-gray-300">
                Third-year in Programming and Application Development (Bc.)
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/20 transition">
              <h3 className="text-2xl font-semibold">
                High School: Gymnázium Ivana Kraska
              </h3>
              <p className="text-lg text-indigo-300 mb-1">2018 – 2022</p>
              <p className="text-lg text-gray-300">Rimavská Sobota</p>
            </div>
          </div>
          <div className="flex-1">
            <img
              src={eduImage}
              alt="MUNI FI"
              className="w-full max-w-xs md:max-w-sm scale-90"
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default School;
