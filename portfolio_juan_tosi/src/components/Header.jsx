import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="rutas">
        <Link to={"/"}>Inicio</Link>
        <Link to={"/aboutMe"}>Sobre mi</Link>
        <Link to={"/projects"}>Proyectos</Link>
        <Link to={"/contact"}>Contacto</Link>
      </div>

      <div className="toggle">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Header;
