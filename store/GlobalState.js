import { createContext, useReducer, useEffect } from "react";
import reducers from "./Reducer";
import { getData } from "@/utils/dataFetch";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialisationState = {
    notify: {},
    auth: {},
    cart: [],
    modal: {},
    orders: [],
  };
  const [state, dispatch] = useReducer(reducers, initialisationState);
  const { cart, auth } = state;

  // Menambahkan LocalStorage Login
  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      getData("auth/accessToken").then((res) => {
        if (res.err) return localStorage.removeItem("firstLogin");
        dispatch({
          type: "AUTH",
          payload: {
            token: res.access_token,
            user: res.user,
          },
        });
      });
    }
  }, []);

  // Menamnbahkan Local Storage cart
  useEffect(() => {
    const _cart_Local_Storage_ = JSON.parse(
      localStorage.getItem("_cart_Local_Storage_")
    );
    if (_cart_Local_Storage_)
      dispatch({ type: "ADD_CART", payload: _cart_Local_Storage_ });
  }, []);

  useEffect(() => {
    localStorage.setItem("_cart_Local_Storage_", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (auth.token) {
      getData("payment", auth.token).then((res) => {
        if(res.err) return dispatch({type: 'NOTIFY', payload: {error: res.err}})
        dispatch({type: 'ADD_ORDERS', payload: res.orders})
      });
    }
  }, [auth.token]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
