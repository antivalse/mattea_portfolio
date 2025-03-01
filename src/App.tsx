import MainNavbar from "./components/navigation/MainNavbar";
import LandingPage from "./pages/LandingPage";
import "./scss/main.scss";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div id="root">
      <MainNavbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
