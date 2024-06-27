import { Route, Routes, useRoutes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import CheckoutModal from "./components/CheckoutModal";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import SideBar from "./components/SideBar";
import ProductDetails from "./components/ProductDetails";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    { path: "products", element: <Products /> },
    { path: "products/:id", element: <ProductDetails /> },
    { path: "about", element: <About /> },
    { path: "*", element: <ErrorPage /> },
  ]);

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
      {element}
    </div>
  );
}

export default App;
