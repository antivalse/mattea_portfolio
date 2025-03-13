/* Projects Page */

import BackToHomepage from "../components/navigation/BackToHomepage";
import scrollToDiv from "../helpers/scrollToDiv";

import { useEffect } from "react";

const ProjectsPage = () => {
  useEffect(() => {
    scrollToDiv("projects-content");
  }, []);

  const projectImages = [
    {
      id: 1,
      description: "html | css | typescript",
      href: "https://deft-flan-8c51cf.netlify.app/",
      src: "src/assets/images/project-images/candyshopimg.png",
      title: "bortakväll - online candy shop",
    },
    {
      id: 4,
      description: "react | typescript | html | css | firebase",
      href: "https://speedysnail.netlify.app/",
      src: "src/assets/images/project-images/speedysnail.png",
      title: "speedy snail - day planner for kids",
    },
    {
      id: 2,
      description: "react | typescript | html | css",
      href: "https://relaxed-lebkuchen-8d216e.netlify.app/",
      src: "src/assets/images/project-images/galactivearchivesimg.png",
      title: "the galactic archives",
    },
    {
      id: 3,
      description: "react | typescript | html | css",
      href: "https://incredible-squirrel-e5e5fe.netlify.app/",
      src: "src/assets/images/project-images/tmdbimg.png",
      title: "the movie database",
    },
    {
      id: 5,
      description:
        "node.js | typescript | socket.io | prisma | mongodb | html | css", // Node.js, TypeScript, Socket.io, Prisma och MongoDB
      href: "https://github.com/antivalse/kill_das_virus_game",
      src: "src/assets/images/project-images/killdasvirusimg.png",
      title: "kill das virus - two player real-time game",
    },
  ];

  return (
    <div className="page-container projects">
      <h1 className="header header--page mb-10">projects</h1>
      <div id="projects-content">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-20">
          {projectImages.map((project) => (
            <li
              key={project.id}
              className="projects__card flex flex-col justify-between gap-5"
            >
              <p>{project.title}</p>
              <a href={project.href} className="projects__card__image-wrapper">
                <img
                  src={project.src}
                  alt={project.title}
                  className="projects__card__image"
                />
                <div className="projects__card__overlay">
                  <span className="projects__card__overlay-text">
                    View Project →
                  </span>
                </div>
              </a>
              <p className="description text-right">{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <BackToHomepage />
    </div>
  );
};

export default ProjectsPage;
