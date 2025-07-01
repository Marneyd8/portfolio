import { useState, useEffect, useRef } from "react";

const Windows95Window = ({ title, children, onClose }) => {
  const [visible, setVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  // position state
  const [pos, setPos] = useState({ x: 100, y: 100 }); // initial position
  const dragging = useRef(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const windowStartPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!visible) {
      const timeout = setTimeout(() => {
        setShouldRender(false);
        onClose(); // inform parent to hide this panel
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [visible, onClose]);

  // mouse down on title bar to start dragging
  const onMouseDown = (e) => {
    dragging.current = true;
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    windowStartPos.current = { ...pos };
    // prevent selecting text while dragging
    e.preventDefault();
  };

  // mouse move moves window if dragging
  const onMouseMove = (e) => {
    if (!dragging.current) return;

    const dx = e.clientX - dragStartPos.current.x;
    const dy = e.clientY - dragStartPos.current.y;
    setPos({ x: windowStartPos.current.x + dx, y: windowStartPos.current.y + dy });
  };

  // mouse up stops dragging
  const onMouseUp = () => {
    dragging.current = false;
  };

  if (!shouldRender) return null;

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      style={{
        position: "absolute",
        left: pos.x,
        top: pos.y,
        transition: visible ? "opacity 0.2s ease, transform 0.2s ease" : undefined,
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.95)",
        fontFamily: "'Press Start 2P', monospace",
        maxWidth: "600px",
        border: "4px solid black",
        boxShadow: "inset 2px 2px 0 0 rgb(255,255,255), inset -2px -2px 0 0 rgb(0,0,0)",
        backgroundColor: "#e0e0e0",
        userSelect: dragging.current ? "none" : "auto",
        zIndex: 1000,
      }}
    >
      <div
        onMouseDown={onMouseDown}
        className="flex justify-between items-center bg-blue-700 text-white px-3 py-1 border-b-4 border-black select-none text-sm cursor-move"
        style={{ userSelect: "none" }}
      >
        {title}
        <button
          onClick={() => setVisible(false)}
          className="bg-red-600 text-white px-2 ml-2 hover:bg-red-700 border border-white text-xs"
        >
          X
        </button>
      </div>
      <div className="p-4 text-black text-xs">{children}</div>
    </div>
  );
};

export default Windows95Window;
