import { useState } from "react";
import Windows95Window from "./Windows95Window";
import './Projects.css';

const projects = [
  {
    id: "a",
    name: "LED-Matrix-Control-System",
    description: "React · Vite TypeScript",
    details: `This project is a real-time LED matrix control system that uses WebSocket communication to control an array of RGB LEDs on an Arduino-based LED matrix.
    The system allows users to interact with the matrix through a React-based frontend, a TypeScript backend, and an Arduino controller that manages the hardware.`,
    github: "https://github.com/Marneyd8/LED-Matrix-Control-System",
  },
  {
    id: "b",
    name: "Statistics Dashboard",
    description: " MVC · JS ·  ASP.NET Core",
    details: `A web application designed for managing and visualizing statistics related to items and clients.
    This app allows users to manage items, assign items to clients, view client profiles, and generate visual statistics on item distribution by category, as well as client-based statistics.`,
    github: "https://github.com/Marneyd8/StatisticsDashboard",
  },
  {
    id: "c",
    name: "Film Festival Application",
    description: "React · Tailwind TypeScript",
    details: `This project is a web application designed to manage and showcase a film festival, allowing users to view films, book seats, and explore festival information.
    The application is built with React and Tailwind CSS for the frontend, and TypeScript for backend using Reddis as database and Axios for API.`,
    github: "https://github.com/Marneyd8/FilmFestival",
  },
  {
    id: "d",
    name: "Pokémon Album Application",
    description: "C# · WPF · MVVM JSON",
    details: `A Pokémon card management application built using the MVVM pattern in WPF.
    The app fetches Pokémon data from an external API and stores the Pokémon album data in JSON files for persistent storage.`,
    github: "https://github.com/Marneyd8/PokemonAlbum",
  },
];

const highlightKeywords = (text: string) => {
  const keywords = [
    "React", "Node.js", "WebSocket", "Vite", "TypeScript", "Chart.js",
    "ASP.NET Core", "WPF", "MVVM", "Tailwind", "JSON", "REST API",
    "EF Core", "C#", "JavaScript"
  ];

  const regex = new RegExp(`\\b(${keywords.join("|")})\\b`, "g");
  return text.split("\n").map((line, index) => (
    <div key={index}>
      {line.split(regex).map((word, i) =>
        keywords.includes(word) ? (
          <span key={i} className="highlight">{word}</span>
        ) : (
          <span key={i}>{word}</span>
        )
      )}
    </div>
  ));
};

const Projects = () => {
  const [openStack, setOpenStack] = useState(projects.map((p) => p.id));

  const openProject = (projectId: string) => {
    setOpenStack((prev) => {
      const without = prev.filter((id) => id !== projectId);
      return [...without, projectId];
    });
  };


  const handleClose = (projectId: string) => {
    setOpenStack((prev) => prev.filter(id => id !== projectId));
  };

  return (
    <>
      <div className="projects-title-window">
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <div
                className="folder-icon"
                onClick={() => openProject(project.id)}
                role="button"
                tabIndex={0}
              >
                📁
                <span
                  className="ping-dot"
                  style={{ backgroundColor: openStack.includes(project.id) ? 'limegreen' : 'red' }}
                ></span>

              </div>
              <div className="folder-title" onClick={() => openProject(project.id)}>
                {project.name}
              </div>
              <div className="folder-description">{project.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-container">
        {openStack.map((projectId, i) => {
          const project = projects.find(p => p.id === projectId);
          const position = openStack.length - 1 - i;

          let className = "carousel-card hidden";
          if (position === 0) className = "carousel-card front";
          else if (position === 1) className = "carousel-card middle";
          else if (position === 2) className = "carousel-card back";

          if (!project) return null;

          return (
            <div key={projectId} className={className}>
              <Windows95Window
                title={project.name}
                onClose={() => handleClose(project.id)}
                maxWidth="630px"
              >
                <div className="project-details">
                  {project.details
                    ? highlightKeywords(project.details)
                    : "No details provided for this project."}
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    🔗 View on GitHub
                  </a>
                )}
              </Windows95Window>
            </div>
          );
        })}
      </div>
      {openStack.length === 0 && (
        <div className="project-hint text-center text-black/80">
          📂 Open a folder to see the project details!
        </div>
      )}
    </>
  );
};

export default Projects;