import React from 'react';

interface ProjectProps {
  name: string;
  technologies: string;
  description: string;
  githubUrl: string;
  imageUrl: string;  // Add imageUrl as a prop to include project images
}

const Project: React.FC<ProjectProps> = ({ name, technologies, description, githubUrl, imageUrl }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-indigo-500 hover:scale-105 transform-gpu">
      {/* Project Image */}
      <div className="mb-4">
        <img src={imageUrl} alt={name} className="w-full h-40 object-cover rounded-lg shadow-md mb-4" />
      </div>
      
      {/* Project Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{name}</h2>
      
      {/* Technologies */}
      <p className="text-sm text-indigo-600 mb-3 font-medium uppercase tracking-wide">{technologies}</p>
      
      {/* Project Description */}
      <p className="text-gray-700 mb-4">{description}</p>
      
      {/* GitHub Link */}
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default Project;
