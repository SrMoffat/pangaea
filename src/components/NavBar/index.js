import "../../styles/NavBar.css";


const NavBar = () => {
    return (
        <div className="nav">
            <img className="logo" alt="PangaEA" src="../../../luminlogo.png"/>
            <div className="nav-options">
                <div>Shop</div>
                <div>Help</div>
                <div>Blog</div>
            </div>
            <div className="cart-section">
                <div>Account</div>
                <div>
                    <img className="cart" alt="cart" src="../../../cart.png" />
                    <span className="cart-item-count">10</span>
                </div>
                <select className="language-selector" name="languages">
                    <option value="EN">EN</option>
                    <option value="AR">AR</option>
                    <option value="FR">FR</option>
                    <option value="ES">ES</option>
                    <option value="DE">DE</option>
                    <option value="HE">HE</option>
                    <option value="ZH">ZH</option>
                </select>
            </div>
        </div>
    );
};

export default NavBar;