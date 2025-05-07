import Project from './Project'
import album from '../assets/album.jpg'
import led from '../assets/led.jpg'
import film from '../assets/film.jpg'
import food from '../assets/food.jpg'
import pokemon from '../assets/pokemon.jpg'

const Projects = () => {
  const projectList = [
    {
      name: 'Real-Time LED Matrix Controller',
      technologies: 'React · Vite · Node.js · TypeScript · Arduino C++ · WebSocket · NeoPixel',
      description:
        'Interactive LED matrix controller via WebSocket. React UI sends live commands to an Arduino system.',
      githubUrl: 'https://github.com/Marneyd8/LED-Matrix-Control-System',
      imageUrl: led,
    },
    {
      name: 'Pokémon Album App',
      technologies: 'C# · WPF · MVVM · JSON · REST API',
      description:
        'MVVM-based WPF app for managing Pokémon cards with filtering, sorting, and persistent storage in JSON. Uses external API for real-time updates.',
      githubUrl: 'https://github.com/Marneyd8/PokemonAlbum',
      imageUrl: album,
    },
    {
      name: 'Film Festival Web App',
      technologies: 'React · Tailwind · TypeScript · Redis · PostgreSQL · NX · Docker',
      description:
        'Full-stack app for film festivals with booking and admin control. Features modern frontend and backend.',
      githubUrl: 'https://github.com/Marneyd8/FilmFestival',
      imageUrl: film,
    },
    {
      name: 'EasyFood Desktop App',
      technologies: 'Java · Swing · H2 · Maven · XML',
      description:
        'Asynchronous app for managing recipes. Built with Java Swing, H2 DB and XML I/O.',
      githubUrl: 'https://github.com/Marneyd8/EasyFood',
      imageUrl: food,
    },
    {
      name: 'Pokemon Tournament Game',
      technologies: 'C# · Console Application',
      description:
        'Turn-based battle game where you become a Trainer and lead your team of mighty little creatures to world championship victory. Choose your team and defeat 3 rival trainers in knockout rounds to win.',
      githubUrl: 'https://github.com/Marneyd8/PokemonTournament',
      imageUrl: pokemon,
    }
    
  ];

  return (
    <section id="projects" className="pt-15">
      <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-6 justify-between pb-4 flex-wrap">
          {projectList.map((project, index) => (
            <div key={index} className="min-w-[300px] max-w-sm flex-shrink-0">
              <Project
                key={index}
                name={project.name}
                description={project.description}
                githubUrl={project.githubUrl}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
