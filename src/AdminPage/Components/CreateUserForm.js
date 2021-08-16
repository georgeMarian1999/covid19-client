import classes from "./DataList.module.css";
import React, {useRef} from "react";

const CreateUserForm = (props) => {

    const username = useRef('');
    const password = useRef('');
    const type = useRef('');

    const submitForm = (e) => {
        e.preventDefault();

        const newUsername = username.current.value;
        const newPassword = password.current.value;
        const newType = type.current.value;


        const user = {
            username: newUsername,
            password: newPassword,
            type: newType
        }

        props.onCreateUser(user);

        username.current.value = '';
        password.current.value = '';
        type.current.value = '';

    }


    return <>
        <form className={classes.formContainer} onSubmit={submitForm}>
            <label>Username</label>
            <input type="text" required ref={username}/>

            <label>Password</label>
            <input type="text" required ref={password}/>

            <div className={classes.type}>
                <label>Select role</label>
                <select required ref={type}>
                    <option></option>
                    <option value="Admin">Admin</option>
                    <option value="Medic">Medic</option>
                    <option value="Operator">Operator</option>
                    <option value="User">User</option>
                </select>
            </div>
            <button className={classes.add}>Add user</button>
        </form>
    </>

}

export default CreateUserForm;