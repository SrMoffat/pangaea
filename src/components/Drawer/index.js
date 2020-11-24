import { useContext } from "react";
import { CurrencyContext, CartContext } from "../../state";
import "../../styles/Drawer.css";


const SideDrawer = (props) => {
    const { state: { currencies } } = useContext(CurrencyContext);
    const { state: { cart } } = useContext(CartContext);
    const { setShowDrawer } = props;
    return (
        <div>
            <div className="drawer" style={{ zIndex: 99 }}>
                <div className="drawer-header">
                    <img onClick={() => setShowDrawer(false)} className="close-side-bar" alt="close-side-bar" src="../../closeside.png"/>
                    <p className="drawer-title">Your Cart</p>
                    <div style={{ justifySelf: "end" }}>
                        <img className="cart" alt="cart" src="../../../cart.png" />
                        <span className="cart-item-count">{cart && cart.length}</span>
                    </div>
                </div>
                <select className="currency-selection" name="currency-selection">
                    {
                        currencies && currencies.map((currency, index) => (
                            <option key={`${currency}-${index}`} value={currency}>{currency}</option>
                        ))
                    }
                </select>
                {
                    cart && cart.map(({ title, price }, index) => (
                        <div className="checkout-product">
                            <div className="checkout-product-details">
                                <div className="checkout-product-name">{ title }</div>
                                <div className="checkout-product-meta">Dry | 25-34</div>
                                <div className="quantity-control">
                                    <div>-</div>
                                    <div>2</div>
                                    <div>+</div>
                                </div>
                            </div>
                            <div className="checkout-produxt-price">
                                <div>{`AMD ${price}`}</div>
                            </div>
                            <div>
                                <img className="checkout-product-image" alt="checkout-product" src="https://i.shgcdn.com/aaef22bc-bf48-4e0d-81c2-482265460220/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
                            </div>
                        </div>
                    ))
                }
                <div className="checkout-section">
                    <div className="total">
                        <div className="subtotal-title">Subtotal</div>
                        <div className="subtotal-amount">AMD {`${100}.00`}</div>
                    </div>
                    <button className="checkout-button">Proceed To Checkout</button>
                </div>
            </div>
            <div style={{ backgroundColor: "rgba(150, 150, 150, 0.95)", height: "100vh", width: "100vw", position: "fixed", top: 0 }}>
            .
            </div>
        
        </div>
    );
};
export default SideDrawer;