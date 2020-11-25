import { createContext, useReducer } from "react";

const checkIfItemInCart = (cart, item) => {
    const { id: itemID } = item;
    if(cart.length > 0){
        const newCart = cart && cart.filter(({ id }) => id === itemID);
        if(newCart.length > 0){
            const newItem = {
                ...item,
                quantity: newCart.length + 1
            };
            cart.forEach((element, index) => {
                if(element.id === newItem.id){
                    cart[index] = newItem;
                }
            });
            const toReturn = [... new Set(cart)];
            return toReturn;
        } else {
            const originalItem = {
                ...item,
                quantity: 1
            };
            const uniqueItems = [... new Set(cart)].filter(({ quantity }) => quantity !== undefined);
            return [...uniqueItems, originalItem];
        }
    } else {
        const originalItem = {
            ...item,
            quantity: 1
        };
        return [...cart, originalItem];
    }
};

export const CartInitialState = {
    cart: [],
    items: []
};

export const CartContext = createContext({
    state: CartInitialState,
});

export const CartReducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
        case "ADD_ITEM":
            const { cart } = state;
            const newCart = checkIfItemInCart(cart, payload).filter(({ quantity }) => quantity !== undefined);
            const newState = {
                cart: [...cart, payload],
                items: newCart
            };
            return newState;
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
