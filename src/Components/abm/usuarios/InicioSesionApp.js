import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './altaUsuario.css'
import InicioSesion from './InicioSesion';

function InicioSesionApp() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({
    userName:'',
    password:''
  })
  return (
    <>
       <InicioSesion
        setUser={setUser}
        user={user}
        users={users}
        setUsers={setUsers}
      />
    </>
  );
}

export default InicioSesionApp;