import React from 'react';

const UserTable = ({ user }) => {
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
                <tr>
                    <td> {user["userName"]}</td>
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