import React, { useState } from 'react';
import FormNewUser from './FormNewUser';
import CardNewUser from './CardNewUser';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import './StyleNewUser.css'
import './font-register.css'

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
        <br></br>
        <h1 className="container-form font-register">REGISTRATE</h1>
        <br></br>
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
                  <CardNewUser key={item.apellido} user={item} />
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