import React from 'react';

interface ProjectProps {
  name: string;
  technologies: string;
  description: string;
  githubUrl: string;
  imageUrl: string;
}

const Project: React.FC<ProjectProps> = ({
  name,
  technologies,
  description,
  githubUrl,
  imageUrl,
}) => {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg h-[600px] hover:shadow-indigo-500/20 transition text-center flex flex-col justify-between">
      <div>
        <div className="mb-4">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-40 object-cover rounded-xl shadow-md"
          />
        </div>

        <h3 className="text-2xl font-semibold mb-2 text-white">{name}</h3>
        <p className="text-lg text-indigo-300 mb-2">{technologies}</p>
        <p className="text-lg text-gray-300 mb-4">{description}</p>
      </div>

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700 transition text-white mb-2"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default Project;
