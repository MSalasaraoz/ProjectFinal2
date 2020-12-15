import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './altaUsuario.css'
import AltaUsuario from './AltaUsuario';

function AltaUsuarioApp() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    country:'',
    age: '',
    email: '',
    userName:'',
    role:''
  })
  return (
    <>
       <AltaUsuario
        setUser={setUser}
        user={user}
        users={users}
        setUsers={setUsers}
      />
    </>
  );
}

export default AltaUsuarioApp;