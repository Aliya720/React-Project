import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css";
import { useCart } from "../../pages/Cart/CartContext";
import { CartIcon } from "../../assets/icons/CartIcon";

export const Navbar = () => {
  const cartState = useCart();
  return (
    <>
      <nav className={classes.mainNav}>
        <ul className={classes.navItems}>
          <NavLink to="/" className={classes.navIcon}>
            ShopHere
          </NavLink>

          <li className={classes.navItem}>
            {" "}
            <NavLink className={classes.navLinks} to="/products">
              {" "}
              Products
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink className={classes.navLinks} to="/">
              {" "}
              Deals
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <NavLink className={classes.navLinks} to="/">
              {" "}
              What's New
            </NavLink>
          </li>
          <li className={classes.navItem}>
            <input
              type="search"
              placeholder="Search"
              className={classes.searchProduct}
            />
          </li>
          <li className={classes.navItem}>
            <NavLink className={classes.navLinks} to="/">
              {" "}
              {/* <UserIcon /> */}
              Account
            </NavLink>{" "}
          </li>
          <li className={classes.navItem}>
            <NavLink className={classes.navLinks} to="/cart">
              {" "}
              {/* <img src={cartIcon} alt="cart" className={classes.svgIcons} /> */}
              <CartIcon />
              <button className={classes.cartLength}>
                {cartState?.cartItems.length}
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
