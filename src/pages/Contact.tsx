/* Contact Page */

import { Link } from "react-router-dom";
import scrollToDiv from "../helpers/scrollToDiv";

import { useEffect } from "react";

const ContactPage = () => {
  // const linkArrow = (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     width="52"
  //     height="52"
  //     viewBox="0 0 52 52"
  //     fill="none"
  //   >
  //     <path
  //       d="M4 0V8H38.36L0 46.36L5.64 52L44 13.64V48H52V0H4Z"
  //       fill="#F6F4F0"
  //     />
  //   </svg>
  // );

  useEffect(() => {
    scrollToDiv("contact");
  }, []);

  return (
    <div id="contact" className="page-container">
      <h1 className="header header--page">let's talk</h1>
      <div className="contact-container grid grid-cols-1 md:grid-cols-3 place-items-center p-8 gap-8">
        <ul className="flex justify-center col-span-3">
          <li>
            <Link to="github.com/antivalse">Github /</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
