import { formatPrice } from "../utils/utils";
import { products } from "../features/products/products-data";
import { useDispatch, useSelector } from "react-redux";
import {
  displayCheckoutModal,
  selectAllState,
} from "../features/products/productsSlice";

function Footer() {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector(selectAllState);

  const totalCartPrice = cartProducts.reduce(
    (sum, item) => sum + item.count * item.fields.price,
    0
  );

  return (
    <footer>
      <h3 className="cart-total text-slanted">
        total : {formatPrice(totalCartPrice)}
      </h3>
      <button
        onClick={() => dispatch(displayCheckoutModal())}
        className="cart-checkout btn"
      >
        checkout
      </button>
    </footer>
  );
}

export default Footer;
