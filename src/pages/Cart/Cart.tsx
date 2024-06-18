import classes from "./cart.module.css";
import { useCart } from "./CartContext";

export const Cart = () => {
  const cartState = useCart();
  return (
    <div className={classes.cartWrapper}>
      {cartState?.cartItems.map((item) => (
        <div key={item.id}>
          <div className={classes.productWrapper}>
            <img
              src={item.images[0]}
              alt={item.title}
              className={classes.productImage}
            />
            <div>
              <h1 className={classes.productTitle}>{item.title}</h1>
              <div className={classes.productQuantity}>
                <p className={classes.quantityTitle}>Quantity</p>
                <div className={classes["product-action"]}>
                  <button
                    className={classes["product-action"]}
                    onClick={() => {
                      cartState.addToCart(item);
                    }}
                  >
                    +
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className={classes["product-action"]}
                    onClick={() => {
                      cartState.removeFromCart(item);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
            <p className={classes.productPrice}>Rs {item.price}</p>
          </div>
          <hr />
        </div>
      ))}
      {cartState!.cartItems.length > 0 ? (
        <div className={classes.cartTotal}>
          <h1>Total: Rs{cartState?.getCartTotal()}</h1>
          <button
            className={classes.clearCart}
            onClick={() => {
              cartState?.clearCart();
            }}
          >
            Clear cart
          </button>
        </div>
      ) : (
        <h1 className={classes.emptyCart}>Your cart is empty</h1>
      )}
    </div>
  );
};
