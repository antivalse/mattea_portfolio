/* Contact Page */

import scrollToDiv from "../helpers/scrollToDiv";

import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    scrollToDiv("contact");
  }, []);

  return (
    <div id="contact" className="page-container">
      Contact
    </div>
  );
};

export default ContactPage;
