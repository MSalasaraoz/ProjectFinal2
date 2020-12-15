import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './StyleNewUser.css'
import './font-register.css'
import FormNewUser from './FormNewUser';

function UserPage() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({
    userName: ''
  })
  return (
    <>
      <h1>hola soy la pagina del usuario</h1>
      <FormNewUser
        setUser={setUser}
        user={user}
        users={users}
        setUsers={setUsers}
      />
    </>
  );
}

export default UserPage;