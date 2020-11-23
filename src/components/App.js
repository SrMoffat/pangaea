import NavBar from "./NavBar";
import ProductSection from "./ProductSection";
import FilterSection from "./FilterSection";
import Footer from "./Footer";


import '../styles/App.css';

function App() {
  const products = [
    {
      title: "Premium-Grade Moisturizing Balm",
      image_url: "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/moisturizing-balm.png",
      price: 10,
    },
    {
      title: "No-Nonsense Charcoal Cleanser",
      image_url: "https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/charcoal-cleanser.png",
      price: 10,
    },
    {
      title: "Clarifying Body Wash",
      image_url: "https://i.shgcdn.com/b44f5ef8-6bc0-4a4a-8eef-1f7ced30503d/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      price: 10,
    },
    {
      title: "Keratin Recovery Shampoo",
      image_url: "https://i.shgcdn.com/4c9671b2-8161-4e58-b3b5-cefa74b74a05/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      price: 10,
    },
    {
      title: "Keratin Strengthening Conditioner",
      image_url: "https://i.shgcdn.com/aaef22bc-bf48-4e0d-81c2-482265460220/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
      price: 10,
    },
  ];
  return (
    <div className="App">
      <NavBar />
      <FilterSection />
      <ProductSection products={products} />
      <Footer />
    </div>
  );
}

export default App;
