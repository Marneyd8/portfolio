import React, { useState, useEffect, useRef } from "react";

const Windows95Sidebar = ({ onSelectPanel, visiblePanels }) => {
  const items = ["Intro", "School", "Work", "Projects", "Links"];

  const sidebarRef = useRef(null);
  // pupilPos: [x, y] normalized position (0 to 1)
  const [pupilPos, setPupilPos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sidebarRef.current) return;

      const rect = sidebarRef.current.getBoundingClientRect();

      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;

      // Clamp horizontal and vertical positions within sidebar bounds
      const clampedX = Math.max(0, Math.min(relativeX, rect.width));
      const clampedY = Math.max(0, Math.min(relativeY, rect.height));

      // Normalize to 0 - 1 range
      const normX = clampedX / rect.width;
      const normY = clampedY / rect.height;

      setPupilPos({ x: normX, y: normY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const pupilMaxMove = 5; // max pixels to move from center in each direction

  // Calculate offsets from center (0.5)
  const pupilXOffset = (pupilPos.x - 0.5) * 2 * pupilMaxMove;
  const pupilYOffset = (pupilPos.y - 0.5) * 2 * pupilMaxMove;

  // Eye styles to avoid repetition
  const eyeStyle = {
    width: 40,
    height: 24,
    border: "3px solid black",
    borderRadius: "20px / 12px",
    backgroundColor: "white",
    position: "relative",
    boxShadow:
      "inset -3px -3px 0 0 rgb(0,0,0), inset 3px 3px 0 0 rgb(255,255,255)",
    marginLeft: 6, // spacing between eyes
  };

  return (
    <div
      ref={sidebarRef}
      className="fixed top-0 left-0 h-full w-38 bg-gray-200 border-r-4 border-black
                 p-4 text-black shadow-[inset_-4px_-4px_0_0_rgb(0,0,0),inset_4px_4px_0_0_rgb(255,255,255)] 
                 flex flex-col"
      style={{ fontFamily: "'Press Start 2P', monospace" }}
    >
      <div className="mb-4 p-2 bg-gradient-to-br from-gray-100 to-gray-300 border-2 border-black text-center text-xs font-bold shadow-[2px_2px_0_0_rgb(0,0,0)]">
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
            onClick={() => onSelectPanel(item)}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Face container: eyes, nose, mouth */}
      <div className="mt-4 mx-auto flex flex-col items-center select-none">
        {/* Eyes container */}
        <div className="flex justify-center">
          {/* Left eye */}
          <div style={eyeStyle}>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 12,
                height: 12,
                backgroundColor: "black",
                borderRadius: "50%",
                transform: `translate(calc(-50% + ${pupilXOffset}px), calc(-50% + ${pupilYOffset}px))`,
                transition: "transform 0.1s ease-out",
              }}
            />
          </div>

          {/* Right eye */}
          <div style={eyeStyle}>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 12,
                height: 12,
                backgroundColor: "black",
                borderRadius: "50%",
                transform: `translate(calc(-50% + ${pupilXOffset}px), calc(-50% + ${pupilYOffset}px))`,
                transition: "transform 0.1s ease-out",
              }}
            />
          </div>
        </div>

        {/* Nose */}
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderTop: "10px solid black",
            marginTop: 6,
          }}
        />

        {/* Mouth */}
        <div
          style={{
            width: 24,
            height: 6,
            borderTop: "3px solid black",
            borderRadius: "0 0 12px 12px",
            marginTop: 6,
          }}
        />
      </div>
    </div>
  );
};

export default Windows95Sidebar;
