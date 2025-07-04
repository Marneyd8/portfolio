import { useState } from "react";
import FreeTime from "./components/FreeTime";
import Intro from "./components/Intro";
import ParticlesOverlay from "./components/ParticlesOverlay";
import Projects from "./components/Projects";
import School from "./components/School";
import Windows95Sidebar from "./components/Windows95Sidebar";
import Windows95Window from "./components/Windows95Window";
import Work from "./components/Work";

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

  const windowPositions = {
    Intro: { top: -60, left: 100 },
    School: { top: 50, left: 400 },
    Work: { top: 250, left: 60 },
    Projects: { top: 250, left: 400 },
    FreeTime: { top: 450, left: 230 },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white text-4xl relative" style={{ height: "170vh" }}>
      
      <ParticlesOverlay />
      <Windows95Sidebar onSelectPanel={togglePanel} visiblePanels={visiblePanels} />

      {visiblePanels.Intro && (
        <div
          style={{
            position: "absolute",
            top: windowPositions.Intro.top,
            left: windowPositions.Intro.left,
            zIndex: 100,
          }}
        >
          <Windows95Window title="[Intro.exe]" onClose={() => handleClose("Intro")}>
            <Intro />
          </Windows95Window>
        </div>
      )}

      {visiblePanels.School && (
        <div
  style={{
    position: "absolute",
    top: windowPositions.School.top,
    left: windowPositions.School.left,
    zIndex: 100,
    width: 700,
    minWidth: 700,
  }}
>
        
          <Windows95Window title="School" onClose={() => handleClose("School")}>
            <School />
          </Windows95Window>
        </div>
      )}

      {visiblePanels.Work && (
        <div
          style={{
            position: "absolute",
            top: windowPositions.Work.top,
            left: windowPositions.Work.left,
            zIndex: 100,
            maxWidth: "900px",
          }}
        >
          <Windows95Window
            title="Work"
            onClose={() => handleClose("Work")}
            maxWidth="900px"
          >
            <Work />
          </Windows95Window>
        </div>
      )}

      {visiblePanels.Projects && (
        <div
          style={{
            position: "absolute",
            top: windowPositions.Projects.top,
            left: windowPositions.Projects.left,
            zIndex: 100,
            maxWidth: "900px",
          }}
        >
          <Windows95Window
            title="Projects"
            onClose={() => handleClose("Projects")}
            maxWidth="900px"
          >
            <Projects />
          </Windows95Window>
        </div>
      )}

      {visiblePanels.FreeTime && (
        <div
          style={{
            position: "absolute",
            top: windowPositions.FreeTime.top,
            left: windowPositions.FreeTime.left,
            zIndex: 100,
          }}
        >
          <Windows95Window title="FreeTime" onClose={() => handleClose("FreeTime")}>
            <FreeTime />
          </Windows95Window>
        </div>
      )}
    </div>
  );
}

export default App;