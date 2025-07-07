import { FaCode, FaDatabase, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = {
  Languages: ["C#", "TypeScript", "Python", "C/C++", "Java"],
  Frameworks: ["React", "Tailwind"],
  Database: ["PostgreSQL", "Microsoft SQL Server"],
  Tools: ["Git", "Docker", "Vite"],
};

const categoryIcons = {
  Languages: <FaCode className="text-cyan-400" />,
  Frameworks: <FaCode className="text-pink-400" />,
  Database: <FaDatabase className="text-violet-400" />,
  Tools: <FaTools className="text-yellow-400" />,
};

const Skills = () => {
  return (
    <motion.div
      className="p-4 w-full text-white bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold text-center mb-4 tracking-tight">
        My Tech Stack
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <div className="flex items-center gap-2 mb-2 font-medium text-white/90">
              {categoryIcons[category]} {category}
            </div>
            <div className="flex flex-wrap gap-1">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 rounded bg-[#2e2e48] hover:bg-pink-600/60 transition text-white/80 border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
