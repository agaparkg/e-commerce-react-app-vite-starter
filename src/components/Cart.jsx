import Footer from "./Footer";
import SingleCartProduct from "./SingleCartProduct";
import { products } from "../features/products/products-data";

function Cart() {
  const showCart = false;
  // const showCart = true;
  const showCartClassName = showCart ? "cart-overlay show" : "cart-overlay";
  const cartProducts = products;

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
          {cartProducts.map((cp) => {
            const { id } = cp;
            return <SingleCartProduct key={id} id={id} />;
          })}
        </div>
        {/* footer */}
        <Footer />
      </aside>
    </div>
  );
}

export default Cart;
