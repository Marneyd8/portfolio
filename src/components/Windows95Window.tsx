import { useState, useEffect, useRef, type ReactNode, type MouseEvent as ReactMouseEvent } from "react";

interface Windows95WindowProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  maxWidth?: string;
  disableDrag?: boolean;
}

const Windows95Window = ({ title, children, onClose, maxWidth = "600px", disableDrag = false, }: Windows95WindowProps) => {
  const [visible, setVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const [pos, setPos] = useState({ x: 100, y: 100 });
  const dragging = useRef(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const windowStartPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!visible) {
      const timeout = setTimeout(() => {
        setShouldRender(false);
        onClose();
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [visible, onClose]);

  const onMouseDown = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (disableDrag) return;
    dragging.current = true;
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    windowStartPos.current = { ...pos };
    e.preventDefault();
  };

  const onMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!dragging.current || disableDrag) return;
    const dx = e.clientX - dragStartPos.current.x;
    const dy = e.clientY - dragStartPos.current.y;
    setPos({ x: windowStartPos.current.x + dx, y: windowStartPos.current.y + dy });
  };

  const onMouseUp = () => {
    if (disableDrag) return;
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
        left: isMobile ? "50%" : pos.x,
        top: isMobile ? "unset" : pos.y,
        bottom: isMobile ? "auto" : undefined,
        transform: isMobile ? "translateX(-50%) scale(0.75)" : visible ? "scale(1)" : "scale(0.95)",
        transformOrigin: "top left",
        transition: visible ? "opacity 0.2s ease, transform 0.2s ease" : undefined,
        opacity: visible ? 1 : 0,
        fontFamily: "'Press Start 2P', monospace",
        width: isMobile ? "110vw" : maxWidth,
        minWidth: isMobile ? "110vw" : "400px",
        border: "4px solid black",
        boxShadow: "inset 2px 2px 0 0 rgb(255,255,255), inset -2px -2px 0 0 rgb(0,0,0)",
        backgroundColor: "#e0e0e0",
        userSelect: dragging.current ? "none" : "auto",
        zIndex: 1000,
        marginBottom: isMobile ? "20px" : undefined,
      }}
    >
      <div
        onMouseDown={onMouseDown}
        className="flex justify-between items-center bg-blue-700 text-white px-3 py-1 border-b-4 border-black select-none text-sm"
        style={{ userSelect: "none", cursor: disableDrag ? "default" : "move" }}
      >
        {title}
        <button
          onClick={() => {
            if (!isMobile) setVisible(false);
          }}
          className={`px-2 ml-2 border border-white text-xs ${isMobile
              ? "bg-red-600 text-white cursor-not-allowed"
              : "bg-red-600 text-white hover:bg-red-700"
            }`}
          title={isMobile ? "Disabled on mobile" : "Close"}
        >
          X
        </button>
      </div>
      <div className="p-4 text-black text-xs">{children}</div>
    </div>
  );
};

export default Windows95Window;
