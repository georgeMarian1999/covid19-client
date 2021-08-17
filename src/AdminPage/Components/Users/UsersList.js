import React from 'react';
import EditUsers from "./EditUsers";
import DeleteUsers from "./DeleteUsers";
import classes from "./UsersList.module.css"

const UsersList = ({users}) => {

    return (
        <div className="container">
            <table className={classes.users}>
                <thead>
                <tr>
                    <th>User</th>
                    <th>Type</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                        <td>{user.username}</td>
                        <td>{user.type}</td>
                        <td>
                            <EditUsers user={user}/>
                        </td>
                        <td>
                            <DeleteUsers user={user}/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}


export default UsersList;