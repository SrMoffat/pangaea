import "../../styles/Drawer.css";
const SideDrawer = () => {
    return (
        <div className="drawer">
            <div className="drawer-header">
                <img className="close-side-bar" alt="close-side-bar" src="../../closeside.png"/>
                <p className="drawer-title">Your Cart</p>
            </div>
            <select className="currency-selection" name="currency-selection">
                <option>USD</option>
                <option>KES</option>
                <option>EUR</option>
                <option>YEN</option>
                <option>RAN</option>
            </select>
            <div className="checkout-product">
                <div className="checkout-product-details">
                    <div className="checkout-product-name">Age Management Set</div>
                    <div className="checkout-product-meta">Dry | 25-34</div>
                    <div className="quantity-control">
                        <div>-</div>
                        <div>2</div>
                        <div>+</div>
                    </div>
                </div>
                <div className="checkout-produxt-price">
                    <div>AMD 32, 000.00</div>
                </div>
                <div>
                    <img className="checkout-product-image" alt="checkout-product" src="https://i.shgcdn.com/aaef22bc-bf48-4e0d-81c2-482265460220/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
                </div>
            </div>
            <div className="checkout-section">
                <div className="total">
                    <div className="subtotal-title">Subtotal</div>
                    <div className="subtotal-amount">{`${100}`}</div>
                </div>
                <button className="checkout-button">Proceed To Checkout</button>
            </div>
        </div>
    );
};
export default SideDrawer;