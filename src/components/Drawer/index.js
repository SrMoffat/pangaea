import { useContext, useState } from "react";
import { CurrencyContext, CartContext } from "../../state";
import { getQuantity } from "../../state/cart";
import "../../styles/Drawer.css";


const SideDrawer = (props) => {
    const { state: { currencies } } = useContext(CurrencyContext);
    const { state: { cart, items }, dispatch } = useContext(CartContext);
    const [currency, setCurrency] = useState("USD");
    const { setShowDrawer } = props;
    const calculateSubTotal = cart => {
        const priceReducer = (accumulator, currentValue) => accumulator + currentValue;
        return cart.map(({ price }) => price).reduce(priceReducer, 0);
    };
    const handleIncrementProduct = event => {
        dispatch({
            type: "INCREMENT_ITEM",
            payload: event.target.id
        });
    };
    const handleDecrementProduct = event => {
        dispatch({
            type: "DECREMENT_ITEM",
            payload: event.target.id
        });
    };
    const handleCurrencyChange = event => {
        setCurrency(event.target.value);
        // TODO: Refetch products and update context
    };
    const count = getQuantity(cart);
    return (
        <div>
            <div className="drawer" style={{ zIndex: 99 }}>
                <div className="drawer-header">
                    <img onClick={() => setShowDrawer(false)} className="close-side-bar" alt="close-side-bar" src="../../closeside.png"/>
                    <p className="drawer-title">Your Cart</p>
                    <div style={{ justifySelf: "end" }}>
                        <img className="cart" alt="cart" src="../../../cart.png" />
                        <span className="cart-item-count">{ cart && cart.length }</span>
                    </div>
                </div>
                <select onChange={handleCurrencyChange} className="currency-selection" name="currency-selection">
                    {
                        currencies && currencies.map((currency, index) => (
                            <option key={`${currency}-${index}`} value={currency}>{currency}</option>
                        ))
                    }
                </select>
                {
                    items && items.map(({ id, title, price, image_url, quantity }, index) => (
                        <div className="checkout-product" key={`${index}-checkout-product`}>
                            <div className="checkout-product-details">
                                <div className="checkout-product-name">{ title }</div>
                                <div className="checkout-product-meta">Dry | 25-34</div>
                                <div className="quantity-control">
                                    <div id={id} className="quantity-control-button" onClick={handleDecrementProduct}>-</div>
                                    <div>{ quantity || count[title] }</div>
                                    <div id={id} className="quantity-control-button" onClick={handleIncrementProduct}>+</div>
                                </div>
                            </div>
                            <div className="checkout-produxt-price">
                                <div>{`${currency} ${price}`}</div>
                            </div>
                            <div>
                                <img className="checkout-product-image" alt="checkout-product" src={image_url} />
                            </div>
                        </div>
                    ))
                }
                {
                    items.length === 0 && <img className="empty-cart" alt="empty-cart" src={"../../../empty-cart.svg"}/>
                }
                <div className="checkout-section">
                    <div className="total">
                        <div className="subtotal-title">Subtotal</div>
                        <div className="subtotal-amount">{`${currency}${" "}${calculateSubTotal(cart)}.00`}</div>
                    </div>
                    <button className="checkout-button">Proceed To Checkout</button>
                </div>
            </div>
            <div className="mask">.</div>
        
        </div>
    );
};
export default SideDrawer;