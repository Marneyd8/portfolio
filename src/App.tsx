import './App.css';
import Intro from './components/Intro';
import Links from './components/Links';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import School from './components/School';
import Work from './components/Work';
import ParticlesOverlay from "./components/ParticlesOverlay";
import Windows95Sidebar from './components/Windows95Sidebar'; // <-- import here

function App() {
  return (
    <div className="bg-gray-900 text-white text-4xl">
      <ParticlesOverlay />
      
      <Windows95Sidebar /> {/* <-- add sidebar here */}
      <div className="ml-48"> {/* Add left margin to avoid content hidden behind sidebar */}
        <Navbar />
        <Intro />
        <School />
        <Work />
        <Projects />
        <Links />
      </div>
    </div>
  );
}

export default App;
