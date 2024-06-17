import { products } from "../features/products/products-data";
import Footer from "./Footer";
import SingleCartProduct from "./SingleCartProduct";

function Cart() {
  // const showCart = false;
  const showCart = true;
  const showCartClassName = showCart ? "cart-overlay show" : "cart-overlay";
  const cartProducts = [];

  return (
    <div className={showCartClassName}>
      <aside className="cart">
        <button onClick={() => {}} className="cart-close">
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
