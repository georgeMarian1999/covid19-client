import counties from "./counties";
import historical from "./historical";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    counties,
    historical
})

export default rootReducer;