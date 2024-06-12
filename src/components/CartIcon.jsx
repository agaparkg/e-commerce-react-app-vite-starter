import { products } from "../features/products/products-data";

function CartIcon() {
  const cartProducts = products;

  // const cartCount = cartProducts.reduce((sum, item) => sum + item.count, 0);

  const cartCount = cartProducts.reduce(
    (sum, item) => (item.count ? sum + item.count : sum + 0),
    0
  );

  return (
    <div className="toggle-container">
      <button onClick={() => {}} className="toggle-cart">
        <i className="fa fa-shopping-cart"></i>
      </button>
      <span className="cart-item-count">{cartCount}</span>
    </div>
  );
}

export default CartIcon;
