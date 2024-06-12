import "./App.css";
import Cart from "./components/Cart";
import CheckoutModal from "./components/CheckoutModal";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

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
      <Home />
    </div>
  );
}

export default App;
