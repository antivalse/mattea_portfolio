/* About Page */

import scrollToDiv from "../helpers/scrollToDiv";

import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    scrollToDiv("about");
  }, []);

  return (
    <div id="about" className="page-container">
      <div className="about-container flex flex-col items-center p-8">
        <h1>About</h1>
        <p className="body body--secondary mt-5">
          I’m Mattea, a Front End Developer with experience in backend
          technologies like Node.Js, SQL, MongoDB and database management. I’m
          curious by nature and dedicated to create user-friendly and accessible
          experiences through development and design.{" "}
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
