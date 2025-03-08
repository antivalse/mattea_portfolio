/* Projects Page */

import BackToHomepage from "../components/navigation/BackToHomepage";
import scrollToDiv from "../helpers/scrollToDiv";
import CandyShopImg from "../assets/images/project-images/candyshopimg.png";

import { useEffect } from "react";

const ProjectsPage = () => {
  const projectImages = [
    {
      id: 1,
      title: "Bortakväll - online candy shop",
      src: "../assets/images/candyshopimg.png",
    },
  ];
  useEffect(() => {
    scrollToDiv("projects-content");
  }, []);
  return (
    <div id="projects" className="page-container projects">
      <h1 className="header header--page">projects</h1>
      <ul id="projects-content">
        {projectImages.map((project) => (
          <li
            key={project.id}
            className="projects__card flex flex-col justify-between gap-5"
          >
            <p>{project.title}</p>
            <img src={CandyShopImg} alt={project.title} />
            <div className="text-right">
              <a
                className="self-end"
                href="https://bortakvall.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
            </div>
          </li>
        ))}
      </ul>
      <BackToHomepage />
    </div>
  );
};

export default ProjectsPage;
