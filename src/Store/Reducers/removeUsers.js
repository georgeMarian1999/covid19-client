const removeUsersReducer = (state = {}, action) => {

    switch (action.type) {
        case "DELETE":
            return action.payload
        default:
            return state
    }
}

export default removeUsersReducer;