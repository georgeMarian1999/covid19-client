const loadHistorical = (data) =>{
    return {
        type: "LOADHISTORY",
        payload: data,
    }
}

export default {
    loadHistorical,
}