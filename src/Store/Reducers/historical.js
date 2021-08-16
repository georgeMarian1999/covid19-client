const historical = (state = [], action) =>{
    switch (action.type){
        case "LOADHISTORY": {
            return action.payload
        }
        default : {
            return state;
        }
    }
}
export default historical;