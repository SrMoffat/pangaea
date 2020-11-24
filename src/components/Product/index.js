import { useContext } from "react";
import { CartContext } from "../../state";


const Product = (props) => {
    const { state: { cart }, dispatch } = useContext(CartContext);
    const currency = "KES"
    const { product, setShowDrawer } = props;
    const { title, image_url, price } = product;
    const productImageStyles = {
        width: 100,
        height: 200
    };
    const productNameStyles = {
        marginTop: 5,
        marginBottom: 20
    };
    const addCartButtonStyles = {
        outline: "none",
        userSelect: "none",
        padding: 15,
        border: "none",
        backgroundColor: "rgb(75, 85, 72)",
        color: "#ffffff",
        cursor: "pointer",
        minWidth: 200,
        minHeight: 52,
        justifySelf: "end",
    }; 
    const handleAddToCart = () => {
        const selectedItem = { ...product };
        setShowDrawer(true);
        dispatch({
            type: "ADD_ITEM",
            payload: selectedItem
        });
    };
    console.log("STATE", cart);

    return (
        <div>
          <img style={productImageStyles} alt="product-image" className="product-image" src={image_url} />
          <div style={productNameStyles} className="product-name">{title}</div>
          <div style={{ marginBottom: 15 }} className="product-price">{`From: ${price}`}</div>
          <button onClick={handleAddToCart} style={addCartButtonStyles} className="add-to-cart">Add to Cart</button>
        </div>
    );
};

export default Product;