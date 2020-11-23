const Product = (props) => {
    const currency = "KES"
    const { product } = props;
    const { title, image_url, price } = product;
    const productImageStyles = {
        width: 100,
        height: 200
    };
    const productNameStyles = {
        marginTop: 5,
        marginBbottom: 20
    };
    const addCartButtonStyles = {
        outline: "none",
        userSelect: "none",
        padding: 15,
        border: "none",
        backgroundColor: "rgb(75, 85, 72)",
        color: "#ffffff",
        cursor: "pointer"
    };
    
    return (
        <div>
          <img style={productImageStyles} alt="product-image" className="product-image" src={image_url} />
          <div style={productNameStyles} className="product-name">{title}</div>
          <div style={{ marginBottom: 15 }} className="product-price">{`From: ${currency} ${price}`}</div>
          <button style={addCartButtonStyles} className="add-to-cart">Add to Cart</button>
        </div>
    );
};

export default Product;