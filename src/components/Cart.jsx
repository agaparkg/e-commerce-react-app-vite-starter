import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import SingleCartProduct from "./SingleCartProduct";
import {
  displayCart,
  selectAllState,
} from "../features/products/productsSlice";

function Cart() {
  const dispatch = useDispatch();
  const { showCart, cartProducts } = useSelector(selectAllState);

  const showCartClassName = showCart ? "cart-overlay show" : "cart-overlay";

  return (
    <div className={showCartClassName}>
      <aside className="cart">
        <button onClick={() => dispatch(displayCart())} className="cart-close">
          <i className="fa fa-times"></i>
        </button>
        <header>
          <h3 className="text-slanted">your bag</h3>
        </header>
        {/* cart items */}
        <div className="cart-items">
          {cartProducts.length !== 0 ? (
            cartProducts.map((cp) => {
              const { id } = cp;
              return <SingleCartProduct key={id} id={id} />;
            })
          ) : (
            <div>
              <h4 className="cart-empty">Cart is empty!</h4>
            </div>
          )}
        </div>
        {/* footer */}
        <Footer />
      </aside>
    </div>
  );
}

export default Cart;
