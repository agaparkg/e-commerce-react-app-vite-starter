import { useDispatch, useSelector } from 'react-redux';
import {
  displayCart,
  displayCheckoutModal,
} from '../features/products/productsSlice';
import { formatPrice } from '../utils/utils';

function Footer() {
  let dispatch = useDispatch();
  const cartProducts = useSelector((store) => store.productsState.cartProducts);
  const totalCartPrice = cartProducts.reduce(
    (sum, item) => sum + item.count * item.fields.price,
    0
  );

  const handleCheckoutClick = () => {
    dispatch(displayCart());
    dispatch(displayCheckoutModal());
  };
  return (
    <footer>
      <h3 className='cart-total text-slanted'>
        total : {formatPrice(totalCartPrice)}
      </h3>
      <button onClick={handleCheckoutClick} className='cart-checkout btn'>
        checkout
      </button>
    </footer>
  );
}

export default Footer;
