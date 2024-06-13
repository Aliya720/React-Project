import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css";

export const Navbar = () => {
  return (
    <>
      <nav className={classes.mainNav}>
        <ul className={classes.navItems}>
          <NavLink to="/" className={classes.navIcon}>
            ShopHere
          </NavLink>
          <li className={classes.navLinks}>Products</li>
          <li className={classes.navLinks}>Deals</li>
          <li className={classes.navLinks}>What's New</li>
          <li className={classes.navLinks}>
            <input
              type="search"
              placeholder="Search"
              className={classes.searchProduct}
            />
          </li>
          <li className={classes.navLinks}> Account</li>
          <li className={classes.navLinks}>Cart</li>
        </ul>
      </nav>
    </>
  );
};
