import React, { useState } from 'react';
//import CardNewUser from './CardNewUser';
import 'bootstrap/dist/css/bootstrap.css'
import './StyleNewUser.css'
import './font-register.css'

function UserPage({ users }) {
    
    return (
        <>
        <h1>hola soy la pagina del usuario</h1>
             {/* <div className="d-flex flex-wrap">
              {users.map((item) => {
                return (
                  <CardNewUser key={item.apellido} Users={item} />
                )
              })}
            </div> */}
        </>
    );
}

export default UserPage;