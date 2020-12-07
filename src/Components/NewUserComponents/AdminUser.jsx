import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import UserTable from './UserTable';
import { v4 as uuidv4 } from 'uuid';
import FormNewUser from './FormNewUser';

function AdminUser() {


const [users, setUsers] = useState([])

  //funcion para que ingresen los usuarios agregados con formNewUser
  // const addUser = (data) => {
  //   users.id = uuidv4()
  //   setUsers([...users, data])
  // }


  return (
    <div className="container">
      <h1>Admin User User</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          {users.map((item) => {
            return (
              <UserTable key={item.dni} user={item} />
            )
          })}

        </div>
      </div>
    </div>
  );
}

export default AdminUser
