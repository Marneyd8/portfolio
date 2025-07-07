
const ProjectDetailWindow = ({ project, onClose }) => {
    return (
        <div className="absolute top-20 left-20 w-[500px] bg-gray-100 border-2 border-black p-2 shadow-[4px_4px_0_0_rgb(0,0,0)] font-['Press_Start_2P'] text-xs z-50">
            <div className="flex justify-between items-center bg-gray-300 border-b-2 border-black px-2 py-1">
                <span>{project.name}</span>
                <button onClick={onClose}>X</button>
            </div>

            <div className="p-2">
                <h2 className="text-sm font-bold mb-2">{project.name}</h2>
                <p>{project.details}</p>
            </div>
        </div>
    );
};

export default ProjectDetailWindow;
