/**
 * This should be a CSS file, for a reason styles are not loading on this page.
 * TODO: Look into this
 */
const change = window.innerWidth < 768;
export const productSectionStyles = {
    backgroundColor: "#f5f5f5", 
    height: 500, 
    padding: 60,
    overflowY: "scroll",
    
};
export const productsContainerStyles = {
    display: "grid",
    gridTemplateColumns: `${change ? "1fr 1fr" : "1fr 1fr 1fr"}`,
    gridGap: "40px",
};