import "../../styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <h2>Let’s stay in touch</h2>
                <p>We’ll give you a heads up on new Lumin products, deals, and events, plus tips & tricks on how to keep your skin looking its damned finest.</p>
                <input />
                <h4 style={{ marginTop: 10 }}> Need help?</h4>
                <p>Contact us through our Support Concierge</p>
                <p>Or email us at support@luminskin.com</p>
                <p>© {`${(new Date()).getFullYear()}`}, Lumin</p>
            </div>
            <div>
                <h2>Shop</h2>
                <p>Hair</p>
                <p>Skin</p>
                <p>Body</p>
            </div>
            <div>
                <h2>About</h2>
                <p>Blog</p>
                <p>How To</p>
                <p>Ingredients</p>
                <p>Reviews</p>
                <p>Support</p>
            </div>
            <div>
                <h2>More</h2>
                <p>Jobs</p>
                <p>Affiliate</p>
                <p>Wholesale</p>
                <p>Free Trial FAQ</p>
                <p>Heroes Program</p>
                <p>Request Personal Data</p>
            </div>
            <div>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>Facebook</p>
            </div>
        </div>
    );
};
export default Footer;