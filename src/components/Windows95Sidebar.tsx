const Windows95Sidebar = () => (
    <div
      className="fixed top-0 left-0 h-full w-48 bg-gray-200 border-r-4 border-black
                 overflow-y-auto p-4 text-black"
      style={{ fontFamily: "'Press Start 2P', monospace" }}
    >
      <h2 className="text-xs mb-4 border-b-2 border-black pb-2">MENU</h2>
      <ul className="text-xs space-y-3">
        {["Home", "Intro", "Work", "Projects", "Links"].map((item) => (
          <li
            key={item}
            className="px-2 py-1 border-2 border-black bg-gray-300 cursor-pointer hover:bg-gray-400 active:translate-x-[1px] active:translate-y-[1px]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default Windows95Sidebar;
  