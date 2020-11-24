import { createContext, useReducer } from "react";

export const CartInitialState = {
    cart: []
};

export const CartContext = createContext({
    state: CartInitialState,
});

export const CartReducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
        case "ADD_ITEM":
        const newState = [...state.cart, payload];
        const newn = {
            cart: newState
        };
        console.log("NEW", newn);
            return newn;
        case "REMOVE_ITEM":
            return { ...state, payload }
        default:
            return state;
    };
};

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, CartInitialState);
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            { children }
        </CartContext.Provider>
    );
};
