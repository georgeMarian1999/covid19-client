const editUsersReducer = (state = {}, action) => {

    switch (action.type) {
        case "EDIT":
            return action.payload
        default:
            return state
    }
}

export default editUsersReducer;