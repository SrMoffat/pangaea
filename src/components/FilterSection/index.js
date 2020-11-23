import "../../styles/FilterSection.css";

const FilterSection = () => {
    const captionOptions = {
        all: {
            text: "All Products",
            caption: "A 360° look at Lumin"
        },
        new: {
            text: "New Products",
            caption: "Brand new upgrades for your routine"
        },
        sets: {
            text: "Sets",
            caption: "Find your perfect routine"
        },
        skin: {
            text: "Skincare",
            caption: "Unlock your full face potential"
        },
        hair: {
            text: "Hair & Body Care",
            caption: "Lather up with the good stuff"
        }
    };
    return (
        <div className="filter-section">
            <div className="page-caption">
                <h1 class="page-caption__text">All Products</h1>
                <div class="page-caption__caption">A 360° look at Lumin</div>            
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