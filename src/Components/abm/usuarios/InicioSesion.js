import React,{Component} from "react";
import { withRouter } from "react-router-dom";
import "./altaUsuario.css";
import { Form, Button } from "react-bootstrap";

const InicioSesion = ({ setUser, user, users, setUsers }) => {
  function handleChange(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    FormCompleto();
    if (FormCompleto()) {
      setUsers([...users, user]);
      setUser({
        ...user,
      });
    } else {
      alert("El formulario tiene que estar completo");
    }
    console.log("formulario completo", FormCompleto());
  }
  function FormCompleto() {
    if (
      user.userName !== "" ||
      user.password !== ""
    ) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
    <div className="container">
    <div className="Titulo-2">estas en la lista???</div>
      <Form className="Formulario" onSubmit={handleSubmit} name="formNewUser">
        <Form.Group controlId="userName">
          <Form.Label className="label">Nombre de Usuario</Form.Label>
          <Form.Control  className="input"
            type="text"
            placeholder="Nombre de Usuario"
            onChange={handleChange}
            name="userName"
            value={user.userName}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label className="label">Contraseña</Form.Label>
          <Form.Control className="Input" className="input"
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
            name="password"
            value={user.password}
          />
        </Form.Group>
        <Button size="small" className="botones" variant="dark" type="submit">
          Inicia Sesión
        </Button>

      </Form>
      </div>
    </>
  );
};
export default withRouter(InicioSesion);
