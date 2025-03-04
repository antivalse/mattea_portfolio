/* Contact Page */

import { linkArrow } from "../assets/images/icons";
import BackToHomePage from "../components/navigation/BackToHomePage";
import scrollToDiv from "../helpers/scrollToDiv";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    scrollToDiv("contact");
  }, []);

  const contactLinks = [
    { name: "Github", url: "https://github.com/antivalse" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mattea-saxell-597012163/",
    },
  ];

  return (
    <div className="page-container">
      <h1 className="header header--page">let's talk</h1>
      <ul className="flex justify-between gap-20">
        {contactLinks.map(({ name, url }, index) => (
          <li key={index} className="link link--large">
            <a
              href={url}
              target="_blank"
              className="flex items-center gap-1 m-0 p-0"
            >
              {name} <span className="ml-3">{linkArrow}</span>
            </a>
          </li>
        ))}
      </ul>
      <div id="contact"></div>
      <BackToHomePage />
    </div>
  );
};

export default ContactPage;
