import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.css'
import { Form } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import {ButtonGroup, Button} from "react-bootstrap";
import './containerform.css'

const FormNewUser = ({ users, setUsers }) => {
    const { register, handleSubmit, errors, getValues } = useForm({ mode: 'onBlur' });

    const onSubmit = (data, event) => {
        console.log(data)
        event.target.reset();
        setUsers([...users, data])
    }
    return (
        <>
        <div className="container-form">
        <Form onSubmit={handleSubmit(onSubmit)}>
  <Form.Row>
    <Col xs = {6}>
    <Form.Label className="font-register"><h5>Nombre</h5></Form.Label>
    <input
                    className="form-control"
                    name="userName"
                    ref={register({
                        required: { value: true, message: 'Nombre es requerido' },
                    })}
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors?.userName?.message}
                </span>
    </Col>
    <Col xs = {6}>
    <Form.Label className="font-register"><h5>Apellido</h5></Form.Label>
    <input
                    className="form-control"
                    name="lastName"
                    ref={register({
                        required: { value: true, message: 'Apellido es requerido' },
                    })}
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors?.newUser?.message}
                </span>
    </Col>
  </Form.Row>
  <Form.Row>
      <Col xs = {12}>
      <Form.Label className="font-register"><h5>Pais</h5></Form.Label>
      <Form.Control as="select" custom
      name="pais"
      ref={register({
        required: { value: true, message: 'Pais es requerido' },
    })}>
       <option className="font-register">Argentina</option>
      <option className="font-register">Uruguay</option>
      <option className="font-register">Chile</option>
      <option className="font-register">Venezuela</option>
      <option className="font-register">Colombia</option>
      </Form.Control>
      </Col>
  </Form.Row>
  <hr/>
  <Form.Row>
      <Col xs={12}>
      <Form.Label className="font-register"><h5>Edad</h5></Form.Label>
      <input
                    className="form-control mb-2"
                    name="age"
                    ref={register({
                        validate: {
                            underAge: value => parseFloat(value) > 19,
                            overAge: value => parseFloat(value) < 120,
                        },
                    })}
                />
                {errors.age && errors.age.type === 'underAge' && (
                    <span className="text-danger text-small d-block mb-2">Debe ser mayor de edad</span>
                )}
                {errors.age && errors.age.type === 'overAge' && (
                    <span className="text-danger text-small d-block mb-2">Es demasiado viejo</span>
                )}
      </Col>
  </Form.Row>
  <Form.Row>
      <Col xs={12}>
      <Form.Label className="font-register"><h5>E-mail</h5></Form.Label>
      <input
                    className="form-control mb-2"
                    name="email"
                    ref={register({
                        required: true,
                        validate: value =>
                            value.includes('@') || "Ingrese su e-mail por favor",
                    })}
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors.email && errors.email.message}
                </span>
      </Col>
  </Form.Row>
  <Form.Row>
      <Col xs={12}>
      <Form.Label className="font-register"><h5>Usuario</h5></Form.Label>
      <input
                    className="form-control"
                    name="newUser"
                    ref={register({
                        required: { value: true, message: 'Piense un buen nombre de usuario' },
                    })}
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors?.newUser?.message}
                </span>
      </Col>
  </Form.Row>
  <Form.Row>
      <Col xs={6}>
      <Form.Label className="font-register"><h5>Contraseña</h5></Form.Label>
      <input
                    className="form-control"
                    name="password"
                    type="password"
                    ref={register({
                        required: {value: true, message: 'Ingrese una clave'},
                        minLength: {value: 6, message: 'Su clave debe tener al menos 6 digitos'}
                    })}
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors.password && errors.password.message}
                </span>
                </Col>
                <Col xs={6}>
                <Form.Label className="font-register"><h5>Reingresar</h5></Form.Label>
                <input
                    className="form-control mb-2"
                    name="validatePassword"
                    type="password"
                    ref={register({
                        required: {value: true},
                        validate: {
                          matchesPreviousPassword: (value) => {
                            const { password } = getValues();
                            return password === value || 'Debe coincider ambas claves';
                          },
                        }
                      })}
                />
                <span className="text-danger text-small d-block mb-2">
                {errors.validatePassword && errors.validatePassword.message}
                </span>
      </Col>
  </Form.Row>
  <div className="container-submit">
  <button type="submit" className="btn btn-dark btn-lg btn-block font-register">Registrarme</button>
  </div>
</Form>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <b>Nombre</b>
                <input
                    className="form-control mb-2"
                    name="userName"
                    ref={register({
                        required: { value: true, message: 'Nombre es requerido' },
                    })}
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors?.userName?.message}
                </span>
                <b>Usuario</b>
                <input
                    className="form-control mb-2"
                    name="newUser"
                    ref={register({
                        required: { value: true, message: 'Piense un buen nombre de usuario' },
                    })}
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors?.newUser?.message}
                </span>
                <b>DNI</b>
                <input
                    className="form-control mb-2"
                    name="dni"
                    ref={register({
                        required: { value: true, message: 'Por favor Ingrese su DNI sin puntos ni espacios' },
                        minLength: { value: 8, message: 'ingerese un DNI válido, sin puntos ni espacios' }
                    })}
                />
                {errors.dni && <span className="text-danger text-small d-block mb-2"> {errors.dni && errors.dni.message} </span>}
                <b>Edad</b>
                <input
                    className="form-control mb-2"
                    name="age"
                    ref={register({
                        validate: {
                            underAge: value => parseFloat(value) > 19,
                            overAge: value => parseFloat(value) < 120,
                        },
                    })}
                />
                {errors.age && errors.age.type === 'underAge' && (
                    <span className="text-danger text-small d-block mb-2">Debe ser mayor de edad</span>
                )}
                {errors.age && errors.age.type === 'overAge' && (
                    <span className="text-danger text-small d-block mb-2">Es demasiado viejo</span>
                )}
                <b>E-mail</b>
                <input
                    className="form-control mb-2"
                    name="email"
                    ref={register({
                        required: true,
                        validate: value =>
                            value.includes('@') || "Ingrese su e-mail por favor",
                    })}
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors.email && errors.email.message}
                </span>
                <b>Clave</b>
                <input
                    placeholder="Clave"
                    className="form-control mb-2"
                    name="password"
                    type="password"
                    ref={register({
                        required: {value: true, message: 'Ingrese una clave'},
                        minLength: {value: 6, message: 'Su clave debe tener al menos 6 digitos'}
                    })}
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors.password && errors.password.message}
                </span>
                <b>Reingrese su Clave</b>
                <input
                    placeholder="Validación de Clave"
                    className="form-control mb-2"
                    name="validatePassword"
                    type="password"
                    ref={register({
                        required: {value: true},
                        validate: {
                          matchesPreviousPassword: (value) => {
                            const { password } = getValues();
                            return password === value || 'Debe coincider ambas claves';
                          },
                        }
                      })}
                />
                <span className="text-danger text-small d-block mb-2">
                {errors.validatePassword && errors.validatePassword.message}
                </span>
                <button type="submit" className="btn btn-dark">
                    Registrarme
                </button>
            </form> */}
            </div>
        </>
    )
}

export default FormNewUser;