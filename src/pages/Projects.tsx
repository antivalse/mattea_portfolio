/* Projects Page */

import scrollToDiv from "../helpers/scrollToDiv";

import { useEffect } from "react";

const ProjectsPage = () => {
  useEffect(() => {
    scrollToDiv("projects");
  }, []);
  return (
    <div id="projects" className="page-container">
      <h1 className="header header--page">projects</h1>
    </div>
  );
};

export default ProjectsPage;
