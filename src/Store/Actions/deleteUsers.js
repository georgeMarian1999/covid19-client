export const deleteUsers = (data) => {

    return {
        type: "DELETE",
        payload: data
    }

}

export default deleteUsers;