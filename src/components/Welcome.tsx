import "./Welcome.css";
import profile from "../assets/profile.jpg";

function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-3 animate-fade-in-up">
      {/* Profile image with purple to blue gradient and darker background */}
      <div className="relative w-60 h-60 rounded-full bg-gradient-to-tr from-purple-500 via-indigo-500 to-blue-500 p-1">
        <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
          <img
            src={profile}
            alt="Adam's face"
            className="w-56 h-56 rounded-full object-cover border-4 border-white shadow-xl"
          />
        </div>
      </div>

      {/* Welcome Text */}
      <div className="space-y-1">
        <h1 className="text-4xl font-bold text-black tracking-wide">
          Hi, I'm <span className="text-blue-400">Adam Juhás</span>
        </h1>
        <p className="text-xl font-mono text-gray-400">
          <span className="animate-typewriter no-caret">
            Welcome to my profile.
          </span>
        </p>
      </div>
    </div>
  );
}

export default Welcome;
