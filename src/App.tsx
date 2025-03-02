import MainNavbar from "./components/navigation/MainNavbar";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ProjectsPage from "./pages/Projects";
import "./scss/main.scss";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div id="root">
      <MainNavbar />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;
