import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseCartProductCount,
  increaseCartProductCount,
  removeProductFromCart,
} from '../features/products/productsSlice';
import { formatPrice } from '../utils/utils';

const SingleCartProduct = ({ id }) => {
  const cartProducts = useSelector((store) => store.productsState.cartProducts);
  const cartProduct = cartProducts.find((cp) => cp.id === id);
  let dispatch = useDispatch();
  const { image, name, price } = cartProduct.fields;
  return (
    <article className='cart-item'>
      <img
        src={image[0].thumbnails.large.url}
        className='cart-item-img'
        alt='high-back bench'
      />
      <div>
        <h4 className='cart-item-name'>{name}</h4>
        <p className='cart-item-price'>{formatPrice(price)}</p>
        <button
          onClick={() => dispatch(removeProductFromCart(id))}
          className='cart-item-remove-btn'
        >
          remove
        </button>
      </div>

      <div>
        <button
          onClick={() => dispatch(increaseCartProductCount(id))}
          className='cart-item-increase-btn'
        >
          <i className='fas fa-chevron-up'></i>
        </button>
        <p className='cart-item-amount'>{cartProduct.count}</p>
        <button
          onClick={() => dispatch(decreaseCartProductCount(id))}
          className='cart-item-decrease-btn'
        >
          <i className='fas fa-chevron-down'></i>
        </button>
      </div>
    </article>
  );
};

export default SingleCartProduct;
