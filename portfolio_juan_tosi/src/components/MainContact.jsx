import Form from "react-bootstrap/Form";

const MainContact = () => {
  return (
    <div className="formulario">
      <h2>Contactame</h2><br />
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Mail</Form.Label>
          <Form.Control type="email" placeholder="nombre@mail.com" />
        </Form.Group> <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Dejame tu mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group> <br />
      </Form>
      <div className="formulario">
      <button>Enviar</button>
      </div>
    </div>
  );
};

export default MainContact;
