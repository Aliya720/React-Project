import { useEffect, useState } from "react";
import { useCart } from "../../pages/Cart/CartContext";
import classes from "./addToCart.module.css";
import { AddToCartType } from "./addToCart.type";
import { NavLink } from "react-router-dom";

const AddToCart = (props: AddToCartType) => {
  const cartState = useCart();
  const [localQuantity, setLocalQuantity] = useState(0);
  const [incrementDisable, setIncrementDisable] = useState(false);

  useEffect(() => {
    const cartItem = cartState?.cartItems.find(
      (item) => item.id === props.currentProduct.id
    );
    if (cartItem) {
      setLocalQuantity(cartItem.quantity);
    }
  }, [cartState?.cartItems, props.currentProduct?.id]);

  const SetIncrement = () => {
    if (localQuantity <= props.currentProduct.stock) {
      setLocalQuantity(localQuantity + 1);
      cartState?.addToCart(props.currentProduct);
      setIncrementDisable(false);
    } else {
      setIncrementDisable(true);
    }
  };

  const SetDecrement = () => {
    setLocalQuantity(localQuantity - 1);
    cartState?.removeFromCart(props.currentProduct);
  };

  return (
    <div className={classes.btnWrapper}>
      {localQuantity == 0 ? (
        <button className={classes.AddToCartBtn} onClick={SetIncrement}>
          Add to Cart
        </button>
      ) : (
        <div className={classes.actionWrapper}>
          <button
            className={classes.productAction}
            onClick={SetIncrement}
            disabled={incrementDisable}
          >
            +
          </button>

          <p>{localQuantity}</p>

          <button className={classes.productAction} onClick={SetDecrement}>
            -
          </button>
          <NavLink to="/cart" className={classes.navLink}>
            go to cart
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
