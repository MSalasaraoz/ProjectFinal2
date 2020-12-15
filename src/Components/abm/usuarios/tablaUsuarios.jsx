import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "react-bootstrap";

const UserTable = ({user}) => {
    // console.log("traigo de formNewUser? " + user)

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>

                {/* {
                   users.map((mapuser) =>( 
                        <tr>
                            <td> {mapuser.userName}</td>
                            <td>{mapuser.newUser}</td>
                            <td>
                                <button className="button muted-button">Edit</button>
                                <button className="button muted-button">Delete</button>
                            </td>
                        </tr>
                    ))
                } */}

                <tr>
                    <td>{user["userName"]} </td>
                    <td>{user["newUser"]}</td>
                    <td>
                        <button className="button muted-button">Edit</button>
                        <button className="button muted-button">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table >
    );
}
export default UserTable;