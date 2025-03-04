/* Back To Homepage Component */

import { Link } from "react-router-dom";

const BackToHomePage = () => {
  return (
    <Link to="/" className="link link--primary uppercase mt-20">
      Go to homepage
    </Link>
  );
};

export default BackToHomePage;
