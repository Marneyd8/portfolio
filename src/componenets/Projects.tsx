import React from 'react';
import Project from './Project';

const Projects: React.FC = () => {
  const projectList = [
    {
      name: 'Project 1',
      description: 'A brief description of Project 1.',
      githubUrl: 'https://github.com/username/project1',
    },
    {
      name: 'Project 2',
      description: 'A brief description of Project 2.',
      githubUrl: 'https://github.com/username/project2',
    },
    {
      name: 'Project 3',
      description: 'A brief description of Project 3.',
      githubUrl: 'https://github.com/username/project3',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">My Projects</h1>
      <div className="space-y-6">
        {projectList.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            description={project.description}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
