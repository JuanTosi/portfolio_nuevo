import fotoproyecto from '../images/fotoproyecto.png';
import pedidosyapng from '../images/pedidosyapng.png';

const MainProjects = () => {
  return (
    <div className='proyectos'>
      <div className='card-proyecto'>
        <h3>Proyecto Lenguajes</h3> <br />
        <a href="https://tp2programacionproyecto.netlify.app/" target="_blank">
          <img src={fotoproyecto} alt="Proyecto 1"/>
          
        </a>
      </div>
      <div className='card-proyecto'>
        <h3>Proyecto PedidosYa</h3> <br />
        <a href="https://pedidosyaproyecto.netlify.app/" target="_blank">
          <img src={pedidosyapng} alt="Proyecto 1"/>
          
        </a>
      </div>
    </div>
  )
}

export default MainProjects