import React from 'react';

const UserTable = (props) => {
    console.log("props que traigo de adminUser " + props.users)

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
                {props.users.lenght > 0 ? (
                    props.users.map(listUser => (
                        <tr key={listUser.id}>
                            <td>{listUser.userName}</td>
                            <td>{listUser.newUser}</td>
                            <td>
                                <button className="button muted-button">Edit</button>
                                <button className="button muted-button">Delete</button>
                            </td>
                        </tr>
                    ))) : (
                        <tr>
                            <td colSpan={3}>No Users</td>
                        </tr>
                    )}
            </tbody>
        </table>
    );
}

export default UserTable;