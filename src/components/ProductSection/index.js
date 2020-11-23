import ProductItem from "../Product";

const ProductSection = () => {
    const productSectionStyles = {
        backgroundColor: "#e3e8e5", 
        height: 500, 
        padding: 60
    };
    return (
        <div style={productSectionStyles}>
            <ProductItem />
        </div>
    );
};
export default ProductSection;