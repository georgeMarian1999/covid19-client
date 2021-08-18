import counties from "./counties";
import historical from "./historical";
import removeUsersReducer from "./removeUsers"
import editUsersReducer from "./editUsersReducer";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    counties,
    historical,
    removeUsersReducer,
    editUsersReducer
})

export default rootReducer;