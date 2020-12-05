import React, { useState } from 'react';
import FormNewUser from './FormNewUser';
import CardNewUser from './CardNewUser';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import './StyleNewUser.css'

function NewUser() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({
    userName: "",
    newUser: "",
    dni: "",
    age:"",
    email:"",
    password: "",
    validatePassword: ""
  })

  return (
    <>
      <Container>
        <h2>Hola Nuevo Usuario!!</h2>
        <h4>Complete todos los datos para que lo registremos</h4>
        <Row>
          <Col className="mb-4" xs={12}>
            <FormNewUser
              setUser={setUser}
              user={user}
              users={users}
              setUsers={setUsers}
            />
          </Col>
          <Col>
            <div className="d-flex flex-wrap">
              {users.map((item) => {
                return (
                  <CardNewUser key={item.dni} user={item} />
                )
              })}
            </div>

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NewUser;