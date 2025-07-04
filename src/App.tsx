import { useState } from 'react';
import Intro from './components/Intro';
import School from './components/School';
import Work from './components/Work';
import Projects from './components/Projects';
import ParticlesOverlay from "./components/ParticlesOverlay";
import Windows95Sidebar from './components/Windows95Sidebar';
import Windows95Window from './components/Windows95Window';
import FreeTime from './components/FreeTime';

function App() {
  const [visiblePanels, setVisiblePanels] = useState({
    Intro: true,
    School: true,
    Work: true,
    Projects: true,
    FreeTime: true,
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
  <Windows95Window title="[Intro.exe]" onClose={() => handleClose("Intro")}>
    <Intro />
  </Windows95Window>
)}

    {visiblePanels.School && (
      <Windows95Window title="School" onClose={() => handleClose("School")}>
        <School />
      </Windows95Window>
    )}

    {visiblePanels.Work && (
      <Windows95Window
        title="Work"
        onClose={() => handleClose("Work")}
        maxWidth="900px"  // wider window for Work
      >
        <Work />
      </Windows95Window>
    )}

    {visiblePanels.Projects && (
      <Windows95Window
        title="Projects"
        onClose={() => handleClose("Projects")}
        maxWidth="900px"  // wider window for Projects
      >
        <Projects />
      </Windows95Window>
    )}

    {visiblePanels.FreeTime && (
      <Windows95Window title="FreeTime" onClose={() => handleClose("FreeTime")}>
        <FreeTime />
      </Windows95Window>
    )}

    </div>
  );
}

export default App;
