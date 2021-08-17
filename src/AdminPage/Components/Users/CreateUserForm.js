import classes from "./CreateUserForm.module.css";
import React, {useRef} from "react";

const CreateUserForm = (props) => {
    const username = useRef("");
    const password = useRef("");
    const type = useRef("");

    // if (props.editUser.username !== undefined) {
    //     username.current.value = props.editUser.username;
    //     password.current.value = props.editUser.password
    //     type.current.value = props.editUser.type;
    // }

    const submitForm = (e) => {

        e.preventDefault();

        const newUsername = username.current.value;
        const newPassword = password.current.value;
        const newType = type.current.value.toLowerCase();

        const user = {
            username: newUsername,
            password: newPassword,
            type: newType,
        };

        console.log(user);

        props.onCreateUser(user);

        username.current.value = "";
        password.current.value = "";
        type.current.value = "";
    };

    return <div className={classes.form_style}>
        <form onSubmit={submitForm}>
            <fieldset>
                <legend>User Info</legend>
                <input type="text" placeholder="Your username" required ref={username}/>
                <input type="password" placeholder="Your password" required ref={password}/>
                <label>User type</label>
                <select required ref={type}>
                    <option value="admin">Admin</option>
                    <option value="medic">Medic</option>
                    <option value="operator">Operator</option>
                </select>
            </fieldset>
            <button
                className={classes.create}>Create user
            </button>
        </form>
    </div>
};

export default CreateUserForm;
