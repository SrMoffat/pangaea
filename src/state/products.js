import { createContext, useReducer } from "react";

export const ProductsInitialState = {
    products: []
};

export const ProductsContext = createContext({
    state: ProductsInitialState,
});

export const ProductsReducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
        case "FETCH_PRODUCTS":
            const newState = {
                ...state,
                products: payload
            };
            return newState;
        default:
            return state;
    };
};

export const ProductsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductsReducer, ProductsInitialState);
    return (
        <ProductsContext.Provider value={{ state, dispatch }}>
            { children }
        </ProductsContext.Provider>
    );
};
