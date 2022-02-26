export default (state, action) => {
    console.log("state and action return",state, action)
    switch(action.type){
        case "Delete_Trans":
            return {
                ...state,
                transections: state.transections.filter(transections => transections.id != action.payload)
            }
        case "Add_Trans":
            return{
                ...state,
                transections: [action.payload, ...state.transections]
             }
        default:
            return state;
    }
}