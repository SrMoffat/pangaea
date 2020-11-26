import { createContext, useReducer } from "react";

export const CurrencyInitialState = {
    currencies: [],
    current: "USD"
};

export const CurrencyContext = createContext({
    state: CurrencyInitialState,
});

export const CurrencyReducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
        case "FETCH_CURRENCIES":
            const newState = {
                ...state,
                currencies: payload
            };
            return newState;
        case "SET_CURRENT_CURRENCY":
            const newCurrency = {
                ...state,
                current: payload
            };
            return newCurrency;
        default:
            return state;
    };
};

export const CurrencyContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CurrencyReducer, CurrencyInitialState);
    return (
        <CurrencyContext.Provider value={{ state, dispatch }}>
            { children }
        </CurrencyContext.Provider>
    );
};
