import React from "react";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./altaUsuario.css";
import { Form, Button } from "react-bootstrap";

const altaUsuario = ({ setUser, user, users, setUsers }) => {
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
      user.firstName !== "" ||
      user.lastName !== "" ||
      user.country !== "" ||
      user.age !== "" ||
      user.email !== "" ||
      user.userName !== "" ||
      user.role !== ""
    ) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
      <Form onSubmit={handleSubmit} name="formNewUser">
        <Form.Group controlId="firstName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            onChange={handleChange}
            name="firstName"
            value={user.firstName}
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Apellido"
            onChange={handleChange}
            name="lastName"
            value={user.lastName}
          />
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label>Pais</Form.Label>
          <Form.Control
            type="text"
            placeholder="Pais"
            onChange={handleChange}
            name="country"
            value={user.country}
          />
        </Form.Group>
        <Form.Group controlId="age">
          <Form.Label>Edad</Form.Label>
          <Form.Control
            type="number"
            placeholder="Edad"
            onChange={handleChange}
            name="age"
            value={user.age}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Correo electrónico"
            onChange={handleChange}
            name="email"
            value={user.email}
          />
        </Form.Group>
        <Form.Group controlId="userName">
          <Form.Label>Nombre de Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre de Usuario"
            onChange={handleChange}
            name="userName"
            value={user.userName}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="text"
            placeholder="Contraseña"
            onChange={handleChange}
            name="password"
            value={user.password}
          />
        </Form.Group>
        <Button className="w-100" variant="warning" type="submit">
          Registrarme
        </Button>
      </Form>
    </>
  );
};
export default withRouter(altaUsuario);
