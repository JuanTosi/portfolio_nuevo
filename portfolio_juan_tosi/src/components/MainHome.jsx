import React from "react";
import "../styles/main.css";

const MainHome = () => {
  return (
    <>
      <div className="main">
        <div className="contenedor">
          <div className="nombre">
            <h1>Juan Tosi</h1>
          </div>
          <div className="descripcion">
            <p>
              <span>Software Developer</span>
              <br />
              <br />
              Desarrollador web estudiante de la Tecnicatura Universitaria en
              Programacion en la UTN - FRT. Actualmente me encuentro cursando el
              2° año de la carrera, llevo creados varios proyectos a modo de
              practica que me ayudan a desarrollar mis habilidades en
              programacion.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHome;
