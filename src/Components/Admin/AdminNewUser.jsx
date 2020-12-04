import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import UserTable from './UserTable';
import AddUserForm from './AddUserForm.jsx';
import FormNewUser from '../FormNewUser';


function AdminNewUser({ user }) {
    
//State
      const [ users, setUsers] = useState()

//agregar usuario
const AddUser = (user) => {
    user.id = user.dni
    setUsers([
        ...users,
        user
    ])
}

// //Eliminar Usario
// const DeleteUser = (id) => {
//   console.log(id)

//   const ArrayFiltrado = users.filter(user => user.id !== id);
  
//   setUsers(ArrayFiltrado)

// }

    return (
     <div className="container">
     <h1>Admin New User</h1>
     <div className="flex-row">
       <div className="flex-large">
         <h2>Add user</h2>
         <NewUserForm AddUser={AddUser}/>
       </div>
       <div className="flex-large">
         <h2>View users</h2>
         <UserTable users={users} DelewteUser={DeleteUser}/>
        
       </div>
     </div>
   </div>
    );
}

export default AdminNewUser
