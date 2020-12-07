import React from 'react';
import { useForm } from 'react-hook-form';

const FormNewUser = ({ users, setUsers }) => {
    const { register, handleSubmit, errors, getValues } = useForm({ mode: 'onBlur' });

    const onSubmit = (data, event) => {
        console.log(data)
        event.target.reset();
        setUsers([...users, data])
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <b>Nombre</b>
                <input
                    placeholder="Jime"
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
                    placeholder="TheBest"
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
                    placeholder="12345678"
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
                    placeholder="Debe ser mayor de edad"
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
                <b>e-mail</b>
                <input
                    placeholder="thebest@pojectfinale.com"
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
                        required: { value: true, message: 'Ingrese una clave' },
                        minLength: { value: 6, message: 'Su clave debe tener al menos 6 digitos' }
                    })}
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors.password && errors.password.message}
                </span>
                <b>Validación de Clave</b>
                <input
                    placeholder="Validación de Clave"
                    className="form-control mb-2"
                    name="validatePassword"
                    type="password"
                    ref={register({
                        required: { value: true },
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
                    Enviar
                </button>
            </form>
        </>
    )
}

export default FormNewUser;