/* About Page */

import scrollToDiv from "../helpers/scrollToDiv";
import ProfileImage from "../assets/images/portfolio-img.jpg";

import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    scrollToDiv("about");
  }, []);

  return (
    <div className="page-container">
      <h1 className="header header--page">about</h1>
      <div className="about-container grid grid-cols-1 md:grid-cols-3 place-items-center p-8 gap-8">
        <div className="about-image col-span-1">
          <img src={ProfileImage} alt="mattea" className="profile-image" />
        </div>
        <div className="about-text col-span-2 flex flex-col justify-center">
          <p id="about" className="body body--secondary mt-5">
            I’m Mattea, a Front End Developer with experience in backend
            development. I’m curious by nature and dedicated to create
            user-friendly and accessible experiences through development and
            design.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
