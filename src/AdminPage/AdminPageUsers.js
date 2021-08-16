import React, {useEffect, useState} from "react";
import classes from './Components/DataList.module.css'
import axios from "axios";
import DataList from "./Components/DataList";
import CreateUserForm from "./Components/CreateUserForm";

const AdminPageUsers = () => {

    const [users, setUsers] = useState([]);


    // Get all users
    const getAllUsers = () => {
        axios.get("http://localhost:5000/getAllUsers")
            .then(res => {
                const users = res.data;
                setUsers(users);
            });
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    // Add user
    const createUser = async (user) => {

        try {
             await fetch("http://localhost:5000/createUser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            });

        } catch (err) {
            console.error(err.message);
        }


        // axios.post("http://localhost:5000/createUser", {
        //     body: JSON.stringify(user)
        // })
        //     .then(res => {
        //        const response =  res.data;
        //        const data = JSON.parse(response);
        //     })
        //     .catch(err => {
        //         console.error(err.message);
        //     })

        setUsers([...users, user]);

    }

    return <div className="mainContainer">

        <div className={classes.adminForm}>
            <CreateUserForm onCreateUser={createUser}/>
        </div>

        <h1>Users</h1>
        <div className="usersContainer">
            <DataList users={users}/>
        </div>

    </div>
}


export default AdminPageUsers;