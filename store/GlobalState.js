import { createContext, useReducer } from "react"
import reducers from "./Reducer"

export const DataContext = createContext()

export const DataProvider = ({children}) => {
    const initialisationState = { notify: {}, auth: {}}
    const [state, dispatch] = useReducer(reducers, initialisationState)
    
    return (
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}