import { useState, useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";

import NavBar from "./NavBar";
import ProductSection from "./ProductSection";
import FilterSection from "./FilterSection";
import SideDrawer from "./Drawer";
import Footer from "./Footer";

import { fetchCurrencyQuery, dynamicFetchProductsQuery } from "../graphql/queries";
import { ProductsContext, CurrencyContext } from "../state";

import '../styles/App.css';

function App() {
  const { loading: currencyLoading, data: currencyData } = useQuery(fetchCurrencyQuery);
  const [showDrawer, setShowDrawer] = useState();
  const { dispatch } = useContext(ProductsContext);
  const { dispatch: currencyDispatch, state: { current } } = useContext(CurrencyContext);
  const { loading, data } = useQuery(dynamicFetchProductsQuery(current));
  const products = data && data.products;
  const currencies = currencyData && currencyData.currency;
  useEffect(() => {
    dispatch({
      type: "FETCH_PRODUCTS",
      payload: products
    });
  }, [products, dispatch]);
  useEffect(() => {
    currencyDispatch({
      type: "FETCH_CURRENCIES",
      payload: currencies
    });
  }, [currencies, currencyDispatch]);
  return (
    <div className="App">
      <div className="App">
        <NavBar setShowDrawer={setShowDrawer}/>
        <FilterSection />
        <ProductSection loading={loading} setShowDrawer={setShowDrawer} />
        <Footer />
        {
          showDrawer && <SideDrawer currencyLoading={currencyLoading} setShowDrawer={setShowDrawer}/>
        }
      </div>
    </div>
  );
}

export default App;


