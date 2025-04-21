/* Main Navbar Component */

import { Link } from "react-router-dom";
import scrollToDiv from "../../helpers/scrollToDiv";

const MainNavbar = () => {
  const navbarLinks = [
    { id: 1, title: "About", href: "/about" },
    { id: 2, title: "Projects", href: "/projects" },
    { id: 3, title: "Contact", href: "/contact" },
  ];
  return (
    <>
      <div className="navbar">
        <h1 className="navbar__logo text-center">
          <Link to="/">mattea saxell</Link>
        </h1>
        <p className="uppercase">web developer</p>
        <ul className="navbar__links uppercase flex mt-10">
          {navbarLinks.map((link) => (
            <li
              key={link.id}
              className="navbar__links__link m-5"
              onClick={() => scrollToDiv(link.title.toLowerCase())}
            >
              <Link to={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MainNavbar;
