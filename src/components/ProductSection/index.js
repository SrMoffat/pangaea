import { useContext } from "react";

import ProductItem from "../Product";
import Loader from "../Loader";

import { ProductsContext } from "../../state";

const ProductSection = (props) => {
    const { state: { products } } = useContext(ProductsContext);
    const { loading, setShowDrawer } = props;
    const productSectionStyles = {
        backgroundColor: "#f5f5f5", 
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
