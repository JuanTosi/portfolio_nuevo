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
              Programacion en la UTN - FRT. Actualmente cursando el
              2° año de la carrera. A lo largo de mis estudios, fui creando algunos proyectos a modo de
              practica con los cuales busco desarrollar mis habilidades en
              programacion.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHome;
