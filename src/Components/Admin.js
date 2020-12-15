import React, { useState } from 'react';
import UserTable from './NewUserComponents/UserTable';

function Admin({users,setUsers}) {

    //const [users, setUsers] = useState([])
    const [user, setUser] = useState({
        userName: "",
        newUser: "",
        dni: "",
        age: "",
        email: "",
        password: "",
        validatePassword: ""
    })


    return (
        <div className="container">
            <h1>Administrador usuario</h1>
            <div className="flex-row">
                <div className="flex-large">
                    {users.map((item) => {
                        return (
                            <UserTable user={item} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Admin;