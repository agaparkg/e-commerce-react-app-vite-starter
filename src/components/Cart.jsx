import { useDispatch, useSelector } from 'react-redux';
import { displayCart } from '../features/products/productsSlice';
import Footer from './Footer';
import SingleCartProduct from './SingleCartProduct';

function Cart() {
  const dispatch = useDispatch();
  const showCart = useSelector((store) => store.productsState.showCart);
  const showCartClassName = showCart ? 'cart-overlay show' : 'cart-overlay';
  const cartProducts = useSelector((store) => store.productsState.cartProducts);

  return (
    <div className={showCartClassName}>
      <aside className='cart'>
        <button onClick={() => dispatch(displayCart())} className='cart-close'>
          <i className='fa fa-times'></i>
        </button>
        <header>
          <h3 className='text-slanted'>your bag</h3>
        </header>
        {/* cart items */}
        <div className='cart-items'>
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
