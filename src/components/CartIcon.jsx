import { useDispatch, useSelector } from "react-redux";
import { products } from "../features/products/products-data";
import {
  displayCart,
  selectAllState,
} from "../features/products/productsSlice";

function CartIcon() {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector(selectAllState);

  const cartCount = cartProducts.reduce(
    (sum, item) => (item.count ? sum + item.count : sum + 0),
    0
  );

  return (
    <div className="toggle-container">
      <button onClick={() => dispatch(displayCart())} className="toggle-cart">
        <i className="fa fa-shopping-cart"></i>
      </button>
      <span className="cart-item-count">{cartCount}</span>
    </div>
  );
}

export default CartIcon;
