import { createContext, useReducer } from "react";

const checkIfItemInCart = (cart, item, items) => {
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
            const toReturn = [ ...new Set(cart) ];
            return toReturn;
        } else {
            const originalItem = {
                ...item,
                quantity: 1
            };
            const uniqueItems = [ ...new Set(cart) ].filter(({ quantity }) => quantity === undefined);
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
const checkProductIds = (item, productId) => (Number(item.id) === Number(productId));
const checkProductIdsNoMatch = (item, productId) => (Number(item.id) !== Number(productId));

export const getQuantity = cart => {
    const counts = {};
    const productNames = cart.map(({ title }) => title);
    for (let i = 0; i < productNames.length; i++){
        if (!counts.hasOwnProperty(productNames[i])){
            counts[productNames[i]] = 1;
        } else {
            counts[productNames[i]]++;
        }
    };
    return counts;
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
            const { cart, items: stateItems } = state;
            const newCart = checkIfItemInCart(cart, payload, stateItems);
            const newState = {
                cart: [...cart, payload],
                items: newCart
            };
            return newState;
        case "INCREMENT_ITEM":
            const { items, cart: userCart } = state;
            const counts = getQuantity(userCart);
            const itemIndex = items.findIndex(item => checkProductIds(item, payload));
            const newItems = [ ...items ];
            const updatedItem = {
                ...items[itemIndex],
                quantity: Number(counts[items[itemIndex]['title']]) + 1,
            };
            newItems[itemIndex] = updatedItem;
            const newItemsState = {
                items: newItems,
                cart: [...userCart, updatedItem]
            };
            return newItemsState;
        case "DECREMENT_ITEM":
            const { items: itemState, cart: usersCart } = state;
            const countsObj = getQuantity(usersCart);
            const itemPosition = itemState.findIndex(item => checkProductIds(item, payload));
            const itemsCopy = [ ...itemState ];
            const some = usersCart.filter(item => checkProductIds(item, payload));
            if(some.length < 2){
                const itemsUpdate = itemState.filter(item => checkProductIdsNoMatch(item, payload));
                const cartUpdate = usersCart.filter(item => checkProductIdsNoMatch(item, payload));
                return {
                    items: itemsUpdate,
                    cart: cartUpdate
                }
            } else {
                const updateItem = {
                    ...itemState[itemPosition],
                    quantity: Number(countsObj[itemsCopy[itemPosition]['title']]) - 1,
                };
                itemsCopy[itemPosition] = updateItem;
                usersCart.splice(usersCart.findIndex(item => checkProductIds(item, payload)), 1);
                const newItemsStates = {
                    items: itemsCopy,
                    cart: usersCart,
                };
                return newItemsStates;
            }
        case "UPDATE_CART_WITH_NEW_CURRENCY":
            const { items: currencyItems, cart: currencyCart } = state;
            if(payload){
                const newPrices = payload.map(({ id, price }) => ({ id, price }));
                const currencyItemsNewPrices = currencyItems.map(({ id: itemsId }) => (newPrices.filter(item => checkProductIds(item, itemsId)))).flat();
                const itemsCopy = [...currencyItems];
                const updatedItems = itemsCopy.map((item => {
                    return currencyItemsNewPrices.map((price => {
                        if(Number(price.id) === Number(item.id)){
                            const updated = {
                                ...item,
                                price: price.price,
                            };
                            return updated
                        };
                    }));
                })).flat().filter(item => item !== undefined);
                const currencyCartNewPrices = [...new Set(currencyCart.map(({ id: itemsId }) => (newPrices.filter(item => checkProductIds(item, itemsId)))).flat())];
                const cartCopy = [...currencyCart];
                const updatedCart = cartCopy.map((item => {
                    return currencyCartNewPrices.map((price => {
                        if(Number(price.id) === Number(item.id)){
                            const updated = {
                                ...item,
                                price: price.price,
                            };
                            return updated
                        };
                    }));
                })).flat().filter(item => item !== undefined);
                return {
                    items: updatedItems,
                    cart: updatedCart
                };
            }
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
