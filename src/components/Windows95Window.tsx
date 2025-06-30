const Windows95Window = ({ title, children, style }) => {
    return (
      <div
        className="bg-gray-200 border-4 border-black shadow-[inset_2px_2px_0_0_rgb(255,255,255),inset_-2px_-2px_0_0_rgb(0,0,0)] max-w-4xl mx-auto my-6"
        style={{ fontFamily: "'Press Start 2P', monospace", ...style }}
      >
        <div className="bg-blue-700 text-white px-3 py-1 border-b-4 border-black select-none text-sm">
          {title}
        </div>
        <div className="p-4 text-black text-xs">{children}</div>
      </div>
    );
  };
  
  export default Windows95Window;
  