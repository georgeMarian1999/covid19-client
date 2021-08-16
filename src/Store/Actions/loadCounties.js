const loadCounties = (data) =>{
    return{
        type: "LOAD",
        payload: data,
    }
}

export default {
    loadCounties,
};