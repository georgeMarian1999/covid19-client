import React from 'react';

const DataList = ({users}) =>{
    console.log(users);

    return(
        <>
            <table >
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Type</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.type}</td>
                        <td>
                            <button>Edit</button>
                        </td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}


export default DataList;