import { useDispatch } from "react-redux";
import { formatPrice } from "../utils/utils";
import { addProductToCart } from "../features/products/productsSlice";

const SingleProduct = ({ fp }) => {
  const dispatch = useDispatch();

  return (
    <article className="product">
      <div className="product-container">
        <img src={fp.fields.image[0].url} className="product-img img" alt="" />

        <div className="product-icons">
          <a href="#" className="product-icon">
            <i className="fa fa-search"></i>
          </a>
          <button
            onClick={() => dispatch(addProductToCart(fp.id))}
            className="product-cart-btn product-icon"
          >
            <i className="fa fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <footer>
        <p className="product-name">
          {fp.fields.name} ({fp.fields.company})
        </p>
        <h4 className="product-price">{formatPrice(fp.fields.price)}</h4>
      </footer>
    </article>
  );
};

export default SingleProduct;
