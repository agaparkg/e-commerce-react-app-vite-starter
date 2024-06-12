import { formatPrice } from "../utils/utils";
import { products } from "../features/products/products-data";

function Footer() {
  const cartProducts = products;

  const totalCartPrice = cartProducts.reduce(
    (sum, item) => sum + item.count * item.fields.price,
    0
  );

  const handleCheckoutClick = () => {};

  return (
    <footer>
      <h3 className="cart-total text-slanted">
        total : {formatPrice(totalCartPrice)}
      </h3>
      <button onClick={handleCheckoutClick} className="cart-checkout btn">
        checkout
      </button>
    </footer>
  );
}

export default Footer;
