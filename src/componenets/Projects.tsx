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
    <div className="projects">
      <h1>My Projects</h1>
      {projectList.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          description={project.description}
          githubUrl={project.githubUrl}
        />
      ))}
    </div>
  );
};

export default Projects;
