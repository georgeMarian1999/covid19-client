import axios from "axios";
import {useDispatch} from "react-redux";
import {deleteUsers} from "../../../Store/Actions/deleteUsers"

const DeleteUsers = ({user}) => {

    const dispatch = useDispatch();

    // Delete user
    const deleteUser = async () => {
        await axios.delete(`http://localhost:5000/deleteUser/${user.id}`)
            .then(res => {
                const users = res.data;
            }).catch((err) => {
                console.error(err.message());
            });
        dispatch(deleteUsers(user));
    }

    return (
        <button onClick={deleteUser}>Delete</button>
    )

}

export default DeleteUsers;