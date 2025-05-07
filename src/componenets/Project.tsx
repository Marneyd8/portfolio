import React from 'react';

interface ProjectProps {
  name: string;
  description: string;
  githubUrl: string;
}

const Project: React.FC<ProjectProps> = ({ name, description, githubUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{name}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-300"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default Project;
