import { Fragment, useContext } from "react";
import { CartContext } from "./CartContext";
import classes from "./cart.module.css";

export const Cart = () => {
  const state = useContext(CartContext);
  return (
    <>
      <h1>this will be cart</h1>
      <div className={classes.cartWrapper}>
        {state?.addToCart.length ? (
          <Fragment>
            {state.addToCart.map((product) => (
              <div>
                {/* <img src={state?.product.images} alt="" /> */}
                <p>{state.product.title}</p>
              </div>
            ))}
          </Fragment>
        ) : (
          <h2 className={classes.emptyCart}>Cart is empty</h2>
        )}
      </div>
    </>
  );
};
