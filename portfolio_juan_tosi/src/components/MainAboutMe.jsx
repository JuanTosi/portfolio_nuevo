import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import foto_perfil from '../images/foto_perfil.jpg';

const MainAboutMe = () => {
  return (
    <div>
      <br /><br />
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={foto_perfil} />
      <Card.Body>
        <Card.Title>Juan Tosi</Card.Title>
        <Card.Text>
          Skills
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Futbol</ListGroup.Item>
        <ListGroup.Item>Boxeo</ListGroup.Item>
        <ListGroup.Item>Leer</ListGroup.Item>
      </ListGroup>
    </Card>
    <br /><br />
    </div>
  )
}

export default MainAboutMe