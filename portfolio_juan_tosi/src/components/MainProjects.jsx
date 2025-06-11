import fotoproyecto from '../images/fotoproyecto.png';
import pedidosyapng from '../images/pedidosyapng.png';

const MainProjects = () => {
  return (
    <div className='proyectos'>
      <div className='card-proyecto'>
        <a href="https://tp2programacionproyecto.netlify.app/" target="_blank">
          <img src={fotoproyecto} alt="Proyecto 1"/>
          Proyecto Lenguajes
        </a>
      </div>
      <div className='card-proyecto'>
        <a href="https://pedidosyaproyecto.netlify.app/" target="_blank">
          <img src={pedidosyapng} alt="Proyecto 1"/>
          Proyecto PedidosYa
        </a>
      </div>
    </div>
  )
}

export default MainProjects