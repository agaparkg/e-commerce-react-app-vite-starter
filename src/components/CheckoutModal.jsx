import { useDispatch, useSelector } from "react-redux";
import {
  displayCheckoutModal,
  selectAllState,
} from "../features/products/productsSlice";

function CheckoutModal() {
  const dispatch = useDispatch();
  const { showCheckoutModal } = useSelector(selectAllState);

  const showCheckoutClassName = showCheckoutModal
    ? "checkout-overlay show"
    : "checkout-overlay";

  return (
    <div className={showCheckoutClassName}>
      <aside className="checkout">
        {/* close */}
        <button
          onClick={() => dispatch(displayCheckoutModal())}
          className="checkout-close"
        >
          <i className="fa fa-times"></i>
        </button>
        <h3 className="checkout-error">
          sorry, checkout is under construction at the moment!
        </h3>
      </aside>
    </div>
  );
}

export default CheckoutModal;
