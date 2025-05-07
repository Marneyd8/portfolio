import ProfilePicture from "../assets/profile.jpg";

const Intro = () => {
  return (
    <section id="intro" className="bg-gray-800">
      <div className="pt-32 pb-16 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        <img
          src={ProfilePicture}
          alt="Adam Juhás"
          className="w-60 h-60 rounded-full shadow-xl"
        />
        <div>
          <h1 className="text-5xl font-bold mb-6">Hi! My name is Adam</h1>
          <p className="text-2xl text-gray-300">
            I am a <b>third-year</b> student at <b>Masaryk University</b> in Brno, studying <b>Programming and Application Development</b>.
            I have a passion for <b>software development</b> and am always eager to contribute to projects that have a positive impact. 
            I love working with people and sharing my <b>creativity</b> and <b>problem-solving</b>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
