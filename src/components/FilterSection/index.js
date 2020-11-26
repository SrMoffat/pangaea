import "../../styles/FilterSection.css";

const FilterSection = () => {
    return (
        <div className="filter-section">
            <div className="page-caption">
                <h1 style={{ fontFamily: "freight-display-pro,serif", fontWeight: 400 }} className="page-caption__text">All Products</h1>
                <div className="page-caption__caption">A 360° look at Lumin</div>            
            </div>
            <select className="filter" name="filters">
                <option value="">Filter By</option>
                <option value="AR">All Products</option>
                <option value="FR">New Products</option>
                <option value="EN">Sets</option>
                <option value="ES">Skincare</option>
                <option value="DE">Hair & Body Care</option>
            </select>
        </div>
    );
};
export default FilterSection;