import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProductToCart } from '../features/products/productsSlice';
import { formatPrice } from '../utils/utils';

const SingleProduct = ({ fp }) => {
  let dispatch = useDispatch();
  return (
    <article className='product'>
      <div className='product-container'>
        <img src={fp.fields.image[0].url} className='product-img img' alt='' />

        <div className='product-icons'>
          <Link to={`/products/${fp.id}`} className='product-icon'>
            <i className='fa fa-search'></i>
          </Link>
          <button
            onClick={() => dispatch(addProductToCart(fp.id))}
            className='product-cart-btn product-icon'
          >
            <i className='fa fa-shopping-cart'></i>
          </button>
        </div>
      </div>
      <footer>
        <p className='product-name'>
          {fp.fields.name} ({fp.fields.company})
        </p>
        <h4 className='product-price'>{formatPrice(fp.fields.price)}</h4>
      </footer>
    </article>
  );
};

export default SingleProduct;
