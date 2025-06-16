import foto_perfil from '../images/foto_perfil.jpg';

const MainAboutMe = () => {
  return (
    <div className='main'>
      <div className="contenedor">

      <div className='tarjeta'>
        <img variant="top" src={foto_perfil} />
          <div className="info">
            <br />
            <h2>Juan Tosi</h2>
            <br />
          </div>
          <div className="info">
            <div className="skills">
            <p>Skills: HTML, CSS, JS, React, C#, Java</p>
            </div>
          </div>
      </div>

      </div>
    </div>
  )
}

export default MainAboutMe