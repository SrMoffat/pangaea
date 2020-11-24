import { useContext } from "react";

import ProductItem from "../Product";
import Loader from "../Loader";
import { ProductsContext } from "../../state";
import { productSectionStyles, productsContainerStyles } from "./productSectionStyles";


const ProductSection = (props) => {
    const { state: { products } } = useContext(ProductsContext);
    const { loading, setShowDrawer } = props;
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
