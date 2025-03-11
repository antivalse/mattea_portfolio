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
      description: "Collaboration project - html | css | javascript",
      href: "https://deft-flan-8c51cf.netlify.app/",
      src: "src/assets/images/project-images/candyshopimg.png",
      title: "Bortakväll - Online Candy Shop",
    },
    {
      id: 2,
      description: "School assignment - html | css | javascript",
      href: "https://gleeful-bunny-50bbaf.netlify.app/",
      src: "src/assets/images/project-images/guessinggameimg.png",
      title: "Guess the Name Game - Quiz Game",
    },
    {
      id: 3,
      description: "School assignment - html | css | react",
      href: "https://incredible-squirrel-e5e5fe.netlify.app/",
      src: "src/assets/images/project-images/tmdbimg.png",
      title: "The Movie Database",
    },
  ];

  return (
    <div className="page-container projects">
      <h1 className="header header--page mb-10">projects</h1>
      <div id="projects-content">
        <ul className="flex gap-5 mt-20">
          {projectImages.map((project) => (
            <li
              key={project.id}
              className="projects__card flex flex-col justify-between gap-5"
            >
              <p>{project.title}</p>
              <a href={project.href}>
                <img src={project.src} alt={project.title} />
              </a>
              <div className="text-right">
                <a
                  className="projects__card__link-btn self-end"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project →
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <BackToHomepage />
    </div>
  );
};

export default ProjectsPage;
