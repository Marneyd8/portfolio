
import { useState, useEffect } from "react";
import FreeTime from "./components/FreeTime";
import Intro from "./components/Intro";
import ParticlesOverlay from "./components/ParticlesOverlay";
import Projects from "./components/Projects";
import School from "./components/School";
import Skills from "./components/Skills";
import Welcome from "./components/Welcome";
import Windows95Sidebar from "./components/Windows95Sidebar";
import Windows95Window from "./components/Windows95Window";
import Work from "./components/Work";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

export {useIsMobile};

function App() {
  const [visiblePanels, setVisiblePanels] = useState({
    Intro: true,
    School: true,
    Work: true,
    Projects: true,
    FreeTime: true,
    Welcome: true,
    Skills: true,
  });

  type PanelName = keyof typeof visiblePanels;

  const togglePanel = (panel: PanelName) => {
    setVisiblePanels((prev) => ({
      ...prev,
      [panel]: !prev[panel],
    }));
  };

  const handleClose = (panel: PanelName) => {
    setVisiblePanels((prev) => ({
      ...prev,
      [panel]: false,
    }));
  };

  const isMobile = useIsMobile();
  const windowPositions = isMobile
  ? {
      Welcome: { top: 0, left: 260 },
      Intro: { top: 370, left: 110 },
      School: { top: 760, left: 260 },
      Work: { top: 1240, left: 260 },
      FreeTime: { top: 1900, left: 260 },
      Projects: { top: 2630, left: 260 },
      Skills: { top: 3220, left: 260 },
    }
  : {
      Welcome: { top: -60, left: 290 },
      Intro: { top: -20, left: 900 },
      School: { top: 465, left: 190 },
      Work: { top: 365, left: 850 },
      Projects: { top: 1050, left: 850 },
      FreeTime: { top: 1050, left: 190 },
      Skills: { top: 1810, left: 850 },
    };

  return (
    <div
      className={`min-h-screen bg-gray-900 text-white text-4xl relative`}
      style={{ height: isMobile ? "auto" : "240vh" }}
    >
      <ParticlesOverlay />
      <Windows95Sidebar onSelectPanel={togglePanel} visiblePanels={visiblePanels} />

      <div className={`${isMobile ? "flex flex-col items-center gap-4 pt-20 pb-10" : ""}`}>
        {visiblePanels.Welcome && (
          <div
            style={{
              position: "absolute",
              top: windowPositions.Welcome.top,
              left: windowPositions.Welcome.left,
              zIndex: 100,
            }}
          >
            <Windows95Window
              title="Welcome!"
              onClose={() => handleClose("Welcome")}
              maxWidth="300px"
            >
              <Welcome />
            </Windows95Window>
          </div>
        )}

        {visiblePanels.Intro && (
          <div
            style={{
              position: "absolute",
              top: windowPositions.Intro.top,
              left: windowPositions.Intro.left,
              zIndex: 100,
              width: 300,
              minWidth: 300,
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
              maxWidth: "600px",
            }}
          >
            <Windows95Window
              title="School"
              onClose={() => handleClose("School")}
              maxWidth="600px"
            >
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
              maxWidth: "700px",
            }}
          >
            <Windows95Window
              title="Work"
              onClose={() => handleClose("Work")}
              maxWidth="700px"
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
              maxWidth: "700px",
            }}
          >
            <Windows95Window
              title="Projects"
              onClose={() => handleClose("Projects")}
              maxWidth="700px"
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

        {visiblePanels.Skills && (
          <div
            style={{
              position: "absolute",
              top: windowPositions.Skills.top,
              left: windowPositions.Skills.left,
              zIndex: 100,
            }}
          >
            <Windows95Window title="Skills" onClose={() => handleClose("Skills")} maxWidth="700px">
              <Skills />
            </Windows95Window>
          </div>
        )}
    </div>
    </div>
  );
}

export default App;
