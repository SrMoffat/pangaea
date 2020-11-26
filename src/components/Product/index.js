import { useContext } from "react";
import { CartContext } from "../../state";
import { productImageStyles, productNameStyles, addCartButtonStyles } from "./productStyles";



const Product = (props) => {
    const { dispatch } = useContext(CartContext);
    const { product, setShowDrawer } = props;
    const { title, image_url, price } = product;
    const handleAddToCart = () => {
        const selectedItem = { ...product };
        setShowDrawer(true);
        dispatch({
            type: "ADD_ITEM",
            payload: selectedItem
        });
    };
    return (
        <div>
          <img style={productImageStyles} alt={title} className="product-image" src={image_url} />
          <div style={productNameStyles} className="product-name">{title}</div>
          <div style={{ marginBottom: 15 }} className="product-price">{`From: ${price}`}</div>
          <button onClick={handleAddToCart} style={addCartButtonStyles} className="add-to-cart">Add to Cart</button>
        </div>
    );
};

export default Product;