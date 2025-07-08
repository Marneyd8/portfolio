import { useState, useEffect, useRef } from "react";
import resume from "../assets/CV_Adam_Juhás.pdf";
import Face from "./Face";

type PanelName = "Intro" | "School" | "Work" | "Projects" | "FreeTime" | "Welcome" | "Skills";

interface Windows95SidebarProps {
  onSelectPanel: (panel: PanelName) => void;
  visiblePanels: Record<PanelName, boolean>;
}

const Windows95Sidebar = ({ onSelectPanel, visiblePanels }: Windows95SidebarProps) => {
  const items: PanelName[] = ["Welcome", "Intro", "School", "Work", "Projects", "FreeTime", "Skills"];
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [pupilPos, setPupilPos] = useState({ x: 0.5, y: 0.5 });
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sidebarRef.current) return;
      const rect = sidebarRef.current.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;
      const clampedX = Math.max(0, Math.min(relativeX, rect.width));
      const clampedY = Math.max(0, Math.min(relativeY, rect.height));
      const normX = clampedX / rect.width;
      const normY = clampedY / rect.height;
      setPupilPos({ x: normX, y: normY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const pupilMaxMove = 5;
  const pupilXOffset = (pupilPos.x - 0.5) * 2 * pupilMaxMove;
  const pupilYOffset = (pupilPos.y - 0.5) * 2 * pupilMaxMove;

  return (
    <>
      {/* Toggle button - only visible on mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-110 p-2 bg-gray-200 border-2 border-black shadow-md"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-38 bg-gray-200 border-r-4 border-black
                    p-4 text-black shadow-[inset_-4px_-4px_0_0_rgb(0,0,0),inset_4px_4px_0_0_rgb(255,255,255)] 
                    flex flex-col z-100 transition-transform duration-300
                    ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} 
                    md:translate-x-0`}
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        <div
          className="mb-4 p-2 bg-gradient-to-br from-gray-100 to-gray-300 border-2 border-black text-center text-xs font-bold shadow-[2px_2px_0_0_rgb(0,0,0)] mt-16 md:mt-0"
        >
          MENU
        </div>



        <ul className="text-xs space-y-3">
          {items.map((item) => (
            <li
              key={item}
              className={`px-2 py-1 border-2 border-black cursor-pointer transition-all duration-100
                ${visiblePanels[item]
                  ? "bg-green-400 text-black shadow-inner"
                  : "bg-gray-300 text-black hover:bg-gray-400"} 
                active:translate-x-[1px] active:translate-y-[1px]`}
              onClick={() => {
                onSelectPanel(item);
                setIsMobileOpen(false); // Close sidebar on mobile after selecting
              }}
            >
              {item}
            </li>
          ))}
        </ul>

        <Face pupilXOffset={pupilXOffset} pupilYOffset={pupilYOffset} />

        <div className="mt-auto text-[14px] text-center pt-4 border-t border-black">
          <div className="flex flex-col space-y-3 items-center">
            <a
              href="https://github.com/Marneyd8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline hover:text-blue-900"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/adam-juh%C3%A1s-a57ab3273/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline hover:text-blue-900"
            >
              LinkedIn
            </a>
            <a
              href={resume}
              download
              className="text-blue-700 underline hover:text-blue-900 text-[10px]"
            >
              CV download
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Windows95Sidebar;
