import Cart from "./components/Cart";
import CheckoutModal from "./components/CheckoutModal";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import "./App.css";
import { Outlet } from "react-router-dom";

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
      {/* child routes */}
      <Outlet />
    </div>
  );
}

export default App;
