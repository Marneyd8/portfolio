import Project from './Project';

const Projects = () => {
  const projectList = [
    {
      name: 'Real-Time LED Matrix Controller',
      technologies: 'React · Vite · Node.js · TypeScript · Arduino C++ · WebSocket · NeoPixel',
      description:
        'Interactive LED matrix controller via WebSocket. React UI sends live commands to an Arduino system.',
      githubUrl: 'https://github.com/Marneyd8/LED-Matrix-Control-System',
      imageUrl: '/assets/project-led-matrix.png', // Add image URL here
    },
    {
      name: 'Film Festival Web App',
      technologies: 'React · Tailwind · TypeScript · Redis · PostgreSQL · NX · Docker',
      description:
        'Full-stack app for film festivals with booking and admin control. Features modern frontend and backend.',
      githubUrl: 'https://github.com/Marneyd8/FilmFestival',
      imageUrl: '/assets/project-film-festival.png', // Add image URL here
    },
    {
      name: 'EasyFood Desktop App',
      technologies: 'Java · Swing · H2 · Maven · XML',
      description:
        'Asynchronous app for managing recipes. Built with Java Swing, H2 DB and XML I/O.',
      githubUrl: 'https://github.com/Marneyd8/EasyFood',
      imageUrl: '/assets/project-easyfood.png', // Add image URL here
    },
  ];
  

  return (
    <section id="projects">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-6 pb-4">
          {projectList.map((project, index) => (
            <div key={index} className="min-w-[300px] max-w-sm flex-shrink-0">
              <Project
                key={index}
                name={project.name}
                description={project.description}
                githubUrl={project.githubUrl}
                technologies={project.technologies}
                imageUrl={project.imageUrl}  // Add the path to each project's image
              />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
