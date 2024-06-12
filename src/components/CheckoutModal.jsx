function CheckoutModal() {
  const showCheckoutModal = false;
  // const showCheckoutModal = true

  const showCheckoutClassName = showCheckoutModal
    ? "checkout-overlay show"
    : "checkout-overlay";
  // const showCheckoutClassName = showCheckoutModal
  //   ? "checkout-overlay show"
  //   : "checkout-overlay";

  return (
    <div className={showCheckoutClassName}>
      <aside className="checkout">
        {/* close */}
        <button onClick={() => {}} className="checkout-close">
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
