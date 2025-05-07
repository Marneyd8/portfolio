import React from 'react';

interface ProjectProps {
  name: string;
  description: string;
  githubUrl: string;
}

const Project: React.FC<ProjectProps> = ({ name, description, githubUrl }) => {
  return (
    <div className="project">
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default Project;
