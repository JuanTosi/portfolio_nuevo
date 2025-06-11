import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import "./App.css";

function App() {
  return (
    <>
      <div className="gradient-background">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
        <div className="grid-overlay"></div>
        <div className="noise-overlay"></div>
      </div>
      <div className="content-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/aboutMe" element={<AboutMe />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
