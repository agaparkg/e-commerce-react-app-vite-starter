import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import CheckoutModal from "./components/CheckoutModal";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import SideBar from "./components/SideBar";
import ProductDetails from "./components/ProductDetails";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* side-bar */}
      <SideBar />
      {/* cart */}
      <Cart />
      {/* checkout-modal */}
      <CheckoutModal />
      {/* <Home /> */}
      {/* <Products /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products">
          <Route path="" element={<Products />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="about" element={<About />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
