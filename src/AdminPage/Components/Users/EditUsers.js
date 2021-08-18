import {useDispatch} from "react-redux";
import {editUser} from "../../../Store/Actions/editUser"

const EditUsers = ({user}) => {

    const dispatch = useDispatch();

    return <button onClick={() => dispatch(editUser(user))}>Edit</button>

}

export default EditUsers;