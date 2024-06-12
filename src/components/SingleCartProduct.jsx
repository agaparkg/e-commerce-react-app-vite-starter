import { formatPrice } from "../utils/utils";
import { products } from "../features/products/products-data";

const SingleCartProduct = ({ id }) => {
  const cartProducts = products;

  const cartProduct = cartProducts.find((cp) => cp.id === id);

  const { image, name, price } = cartProduct.fields;

  return (
    <article className="cart-item">
      <img
        src={image[0].thumbnails.large.url}
        className="cart-item-img"
        alt="high-back bench"
      />
      <div>
        <h4 className="cart-item-name">{name}</h4>
        <p className="cart-item-price">{formatPrice(price)}</p>
        <button onClick={() => {}} className="cart-item-remove-btn">
          remove
        </button>
      </div>

      <div>
        <button onClick={() => {}} className="cart-item-increase-btn">
          <i className="fas fa-chevron-up"></i>
        </button>
        <p className="cart-item-amount">{cartProduct.count}</p>
        <button onClick={() => {}} className="cart-item-decrease-btn">
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
    </article>
  );
};

export default SingleCartProduct;
