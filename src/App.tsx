import './App.css';
import Intro from './components/Intro';
import Links from './components/Links';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import School from './components/School';
import Work from './components/Work';
import './index.css';

function App() {
  return (
    <div className="bg-gray-900 text-white text-4xl">
      <Navbar />
      <Intro />
      <School />
      <Work />
      <Projects />
      <Links />
    </div>
  );
}

export default App;
