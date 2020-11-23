import ProductItem from "../Product";
import Loader from "../Loader";

const ProductSection = (props) => {
    const { products, loading, setShowDrawer } = props;
    const productSectionStyles = {
        backgroundColor: "#e3e8e5", 
        height: 500, 
        padding: 60,
        overflowY: "scroll",
        
    };
    const productsContainerStyles = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridGap: "40px",

    };
    return (
        <div className="test" style={productSectionStyles}>
            <div style={productsContainerStyles}>
            {
                products && products.map((product, index) => {
                    return <div key={`${product.name}${index}`} style={{ padding: 40 }}>
                        <ProductItem key={`${product.name}${index}-product`} product={product} setShowDrawer={setShowDrawer}/>
                    </div>
                })
            } 
            </div>
            {
                loading && <Loader />
            } 
        </div>
    );
};
export default ProductSection;
