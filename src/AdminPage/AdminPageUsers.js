import React, {useEffect, useState} from "react";
import classes from './Components/Users/UsersList.module.css'
import axios from "axios";
import UsersList from "./Components/Users/UsersList";
import CreateUserForm from "./Components/Users/CreateUserForm";
import {useSelector} from "react-redux";

const AdminPageUsers = () => {

    const [users, setUsers] = useState([]);
    const deletedUser = useSelector(state => state.removeUsersReducer);
    const edit = useSelector(state => state.editUsersReducer);

    // Get all users
    const getAllUsers = async () => {
        await axios.get("http://localhost:5000/getAllUsers")
            .then(res => {
                const users = res.data;
                setUsers(users);
            });
    }

    // Add user
    const createUser = async (user) => {

        try {
            await fetch("http://localhost:5000/createUser", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(user),
            });

        } catch (err) {
            console.error(err.message);
        }

        setUsers([...users, user]);
    }

    useEffect(() => {
        getAllUsers();
        setUsers(users.filter((user) => user.id !== deletedUser.id));
    }, [deletedUser]);


    return <div className={classes.mainContainer}>

        <div className={classes.adminForm}>
            <CreateUserForm onCreateUser={createUser} editUser={edit}/>
        </div>

        <div className={classes.usersContainer}>
            <UsersList users={users}/>
        </div>

    </div>
}


export default AdminPageUsers;