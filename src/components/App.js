import NavBar from "./NavBar";
import ProductItem from "./Product";
import FilterSection from "./FilterSection";
import Footer from "./Footer";


import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <FilterSection />
      <div style={{ backgroundColor: "#e3e8e5", height: 500, padding: 60 }}>
        <ProductItem />
      </div>
    </div>
  );
}

export default App;
