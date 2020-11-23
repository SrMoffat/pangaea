const Product = () => {
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
          <img style={productImageStyles} alt="product-image" className="product-image" src="https://cdn.shopify.com/s/files/1/2960/5204/products/0_4_1024x1024.png?v=1602841693" />
          <div style={productNameStyles} className="product-name">Keratin Strengthening Conditioner</div>
          <div style={{ marginBottom: 15 }} className="product-price">From: KES 1,200.00</div>
          <button style={addCartButtonStyles} className="add-to-cart">Add to Cart</button>
        </div>
    );
};

export default Product;