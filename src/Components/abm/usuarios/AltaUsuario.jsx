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
       <div className="Titulo"> Registrate para estar en la lista VIP</div>
      <Form className="Formulario" onSubmit={handleSubmit} name="formNewUser">
        <Form.Group controlId="firstName">
          <Form.Label className="Label" className="label">Nombre</Form.Label>
          <Form.Control className="Input" className="input"
            type="text"
            placeholder="Nombre"
            onChange={handleChange}
            name="firstName"
            value={user.firstName}
          />
        </Form.Group>
        <Form.Group  controlId="lastName">
          <Form.Label className="label">Apellido</Form.Label>
          <Form.Control className="Input" className="input"
            type="text"
            placeholder="Apellido"
            onChange={handleChange}
            name="lastName"
            value={user.lastName}
          />
        </Form.Group>
        <Form.Group  controlId="country">
          <Form.Label className="label">Pais</Form.Label>
          <Form.Control className="Input" className="input"
            type="text"
            placeholder="Pais"
            onChange={handleChange}
            name="country"
            value={user.country}
          />
        </Form.Group>
        <Form.Group controlId="age">
          <Form.Label className="label">Edad</Form.Label>
          <Form.Control className="Input" className="input"
            type="number"
            placeholder="Edad"
            onChange={handleChange}
            name="age"
            value={user.age}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label className="label">Correo electrónico</Form.Label>
          <Form.Control className="Input" className="input"
            type="email"
            placeholder="Correo electrónico"
            onChange={handleChange}
            name="email"
            value={user.email}
          />
        </Form.Group>
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
        <Button className="w-30" variant="dark" type="submit">
          Inicia Sesión
        </Button>
      </Form>
    </>
  );
};
export default withRouter(altaUsuario);
