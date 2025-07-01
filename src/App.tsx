import { useState } from 'react';
import Intro from './components/Intro';
import School from './components/School';
import Work from './components/Work';
import Projects from './components/Projects';
import Links from './components/Links';
import ParticlesOverlay from "./components/ParticlesOverlay";
import Windows95Sidebar from './components/Windows95Sidebar';
import Windows95Window from './components/Windows95Window';

function App() {
  const [visiblePanels, setVisiblePanels] = useState({
    Intro: true,
    School: true,
    Work: true,
    Projects: true,
    Links: true,
  });

  const togglePanel = (panel) => {
    setVisiblePanels((prev) => ({
      ...prev,
      [panel]: !prev[panel],
    }));
  };

  const handleClose = (panel) => {
    setVisiblePanels((prev) => ({
      ...prev,
      [panel]: false,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white text-4xl">
      <ParticlesOverlay />
      <Windows95Sidebar onSelectPanel={togglePanel} visiblePanels={visiblePanels} />
        {visiblePanels.Intro && (
          <Windows95Window title="Intro" onClose={() => handleClose("Intro")}>
            <Intro />
          </Windows95Window>
        )}
        {visiblePanels.School && (
          <Windows95Window title="School" onClose={() => handleClose("School")}>
            <School />
          </Windows95Window>
        )}
        {visiblePanels.Work && (
          <Windows95Window title="Work" onClose={() => handleClose("Work")}>
            <Work />
          </Windows95Window>
        )}
        {visiblePanels.Projects && (
          <Windows95Window title="Projects" onClose={() => handleClose("Projects")}>
            <Projects />
          </Windows95Window>
        )}
        {visiblePanels.Links && (
          <Windows95Window title="Links" onClose={() => handleClose("Links")}>
            <Links />
          </Windows95Window>
        )}
    </div>
  );
}

export default App;
