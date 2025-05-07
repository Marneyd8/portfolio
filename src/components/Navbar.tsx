import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-4 fixed w-full top-0 z-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Portfolio</h2>
        <div className="flex gap-6">
          <a href="#intro" className="hover:text-indigo-400 transition-colors duration-300">
            <i className="fa fa-home"></i>
          </a>
          <a href="#school" className="hover:text-indigo-400 transition-colors duration-300">
            <i className="fa fa-graduation-cap"></i>
          </a>
          <a href="#work" className="hover:text-indigo-400 transition-colors duration-300">
            <i className="fa fa-briefcase"></i>
          </a>
          <a href="#projects" className="hover:text-indigo-400 transition-colors duration-300">
            <i className="fa fa-code"></i>
          </a>
          <a href="#link" className="hover:text-indigo-400 transition-colors duration-300">
          <i className="fa fa-link"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
