import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './StyleNewUser.css'
import './font-register.css'
import FormNewUser from './FormNewUser';

function UserPage() {
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