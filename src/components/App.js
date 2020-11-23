import NavBar from "./NavBar";
import ProductSection from "./ProductSection";
import FilterSection from "./FilterSection";
import Footer from "./Footer";


import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <FilterSection />
      <ProductSection />
    </div>
  );
}

export default App;
