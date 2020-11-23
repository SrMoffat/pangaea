import { useState } from "react";
import { useQuery } from "@apollo/client";

import { fetchProductsQuery } from "../graphql/queries";

import NavBar from "./NavBar";
import ProductSection from "./ProductSection";
import FilterSection from "./FilterSection";
import SideDrawer from "./Drawer";
import Footer from "./Footer";


import '../styles/App.css';

function App() {
  const { loading, data } = useQuery(fetchProductsQuery);
  const [showDrawer, setShowDrawer] = useState(); // TODO: Use ContextAPI to avoid prop drilling
  console.log("Clicked", showDrawer);


  const products = data && data.products;
  return (
    <div className="App">
      <div className="App">
        <NavBar />
        <FilterSection />
        <ProductSection products={products} loading={loading} setShowDrawer={setShowDrawer} />
        <Footer />
        {
          showDrawer && <SideDrawer />
        }
      </div>
    </div>
  );
}

export default App;


