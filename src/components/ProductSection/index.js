import ProductItem from "../Product";

const ProductSection = (props) => {
    const { products } = props;
    const productSectionStyles = {
        backgroundColor: "#e3e8e5", 
        height: 500, 
        padding: 60,
        overflowY: "scroll"
    };
    return (
        <div style={productSectionStyles}>
        {
            products && products.map(product => {
                return  <ProductItem  product={product}/>
            })
        }
        </div>
    );
};
export default ProductSection;