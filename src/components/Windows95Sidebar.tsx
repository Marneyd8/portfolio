const Windows95Sidebar = ({ onSelectPanel, visiblePanels }) => {
  const items = ["Intro", "School", "Work", "Projects", "Links"];

  return (
    <div
      className="fixed top-0 left-0 h-full w-38 bg-gray-200 border-r-4 border-black
                 p-4 text-black shadow-[inset_-4px_-4px_0_0_rgb(0,0,0),inset_4px_4px_0_0_rgb(255,255,255)]"
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
                ? 'bg-green-400 text-black shadow-inner'
                : 'bg-gray-300 text-black hover:bg-gray-400'} 
              active:translate-x-[1px] active:translate-y-[1px]`}
            onClick={() => onSelectPanel(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Windows95Sidebar;
