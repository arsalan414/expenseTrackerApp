import react,{createContext, useReducer} from "react"
import AppReducer from "./AppReducer";


let initialState = {
    transections:[]
};

// Global Context
export const GlobalContext = createContext(initialState);

// Global Provider
export const GlobalProvider = ({children}) =>{
    let [state, dispatch] = useReducer(AppReducer, initialState);

    //Delete Transection Actions
    function deleteTransection(id){
        console.log("value of id: ",id)
        dispatch({
            type: "Delete_Trans",
            payload: id
        })
    }

    //Add Transection Action
    function addTransection(value){
        console.log(value)
        dispatch({
            type: "Add_Trans",
            payload: value
        })
    }

    return(
        <GlobalContext.Provider value={
            {transection: state.transections,
            deleteTransection,
        addTransection}
        }>
            {children}
        </GlobalContext.Provider>
    );
}