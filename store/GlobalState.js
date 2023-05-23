import { createContext, useReducer, useEffect } from "react"
import reducers from "./Reducer"
import { getData } from "@/utils/dataFetch"

export const DataContext = createContext()

export const DataProvider = ({children}) => {
    const initialisationState = { notify: {}, auth: {}}
    const [state, dispatch] = useReducer(reducers, initialisationState)
    
    useEffect(() => {
        const firstLogin = localStorage.getItem("firstLogin");
        if(firstLogin){
            getData('auth/accessToken').then(res => {
                if(res.err) return localStorage.removeItem("firstLogin")
                dispatch({ 
                    type: "AUTH",
                    payload: {
                        token: res.access_token,
                        user: res.user
                    }
                })
            })
        }
    },[])

    return (
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}