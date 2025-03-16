/* Projects Page */

import BackToHomepage from "../components/navigation/BackToHomepage";
import { projectData } from "../data/project-data";
import scrollToDiv from "../helpers/scrollToDiv";

import { useEffect } from "react";

const ProjectsPage = () => {
  useEffect(() => {
    scrollToDiv("projects-content");
  }, []);

  return (
    <div id="projects-content" className="page-container">
      <h1 className="header header--page mt-10 mb-10">projects</h1>
      <div className="projects">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {projectData.map((project) => (
            <li
              key={project.id}
              className="projects__card flex flex-col justify-between gap-5"
            >
              <p>{project.title}</p>
              <a
                href={project.href}
                className="projects__card__image-wrapper"
                target="_blank"
                rel="noreferrer"
              >
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
