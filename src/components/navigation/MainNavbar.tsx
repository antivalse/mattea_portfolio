/* Main Navbar Component */

import { Link } from "react-router-dom";

const MainNavbar = () => {
  const navbarLinks = [
    { id: 1, title: "About", href: "/" },
    { id: 2, title: "Projects", href: "/" },
    { id: 3, title: "Contact", href: "/" },
  ];
  return (
    <>
      <div className="navbar">
        <h1 className="navbar__logo">
          <Link to="/">mattea saxell</Link>
        </h1>
        <p className="navbar__text uppercase">front-end developer</p>
        <ul className="navbar__links uppercase flex mt-10">
          {navbarLinks.map((link) => (
            <li key={link.id} className="m-5">
              <Link to={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MainNavbar;
