import React from 'react';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import './StyleNewUser.css'
import './font-register.css'
import { Form, Button } from 'react-bootstrap';
import './containerform.css'
import UserPage from './UserPage';

const FormNewUser = ({ setUser, user, users, setUsers }) => {

    function handleChange(event) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        console.log(typeof user)
        console.log( user)
        event.preventDefault()
        console.log( user)
        FormCompleto()
        console.log(FormCompleto())
        if (FormCompleto()) {
            setUsers([...users, user])
            setUser({
                ...user,
            })
        } else {
            alert('El formulario tiene que estar completo')
        }
        console.log("formulario completo", FormCompleto())
    }
    function FormCompleto() {
        if (user.userName !== ''
        ) {
            return true;
        }
        else {
            return false;
        }
    }
    return (
        <>
            <Form onSubmit={handleSubmit} name="formNewUser">
                <Form.Group controlId="userName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" onChange={handleChange}
                        name="userName"
                        value={user.userName} />
                </Form.Group>
                <Button className="w-100" variant="warning" type="submit">Registrarme</Button>
            </Form>
        </>
    )
}
export default withRouter(FormNewUser);