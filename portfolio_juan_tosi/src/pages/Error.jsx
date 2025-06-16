import React from 'react'
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
        <h2>ERROR AL BUSCAR LA PAGINA</h2>
        <Link to={"/"}>Volver al inicio</Link>
    </div>
  )
}

export default Error