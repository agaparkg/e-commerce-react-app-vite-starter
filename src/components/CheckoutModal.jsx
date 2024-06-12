import { useDispatch, useSelector } from 'react-redux';
import { displayCheckoutModal } from '../features/products/productsSlice';

function CheckoutModal() {
  const showCheckoutModal = useSelector(
    (store) => store.productsState.showCheckoutModal
  );
  const dispatch = useDispatch();
  const showCheckoutClassName = showCheckoutModal
    ? 'checkout-overlay show'
    : 'checkout-overlay';

  return (
    <div className={showCheckoutClassName}>
      <aside className='checkout'>
        {/* close */}
        <button
          onClick={() => dispatch(displayCheckoutModal())}
          className='checkout-close'
        >
          <i className='fa fa-times'></i>
        </button>
        <h3 className='checkout-error'>
          sorry, checkout is under construction at the moment!
        </h3>
      </aside>
    </div>
  );
}

export default CheckoutModal;
