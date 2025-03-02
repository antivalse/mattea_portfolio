/* Projects Page */

import scrollToDiv from "../helpers/scrollToDiv";

import { useEffect } from "react";

const ProjectsPage = () => {
  useEffect(() => {
    scrollToDiv("projects");
  }, []);
  return (
    <div id="projects" className="page-container">
      Projects
    </div>
  );
};

export default ProjectsPage;
