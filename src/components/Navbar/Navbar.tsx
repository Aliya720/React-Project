import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css";
import { CartIcon } from "../Icons/CartIcon";
import { UserIcon } from "../Icons/UserIcon";
import { SearchIcon } from "../Icons/SearchIcon";
import { ChevronDownIcon } from "../Icons/ChevronDownIcon";

export const Navbar = () => {
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
              <ChevronDownIcon />
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
            />{" "}
            <SearchIcon />
          </li>
          <li className={classes.navItem}>
            <NavLink className={classes.navLinks} to="/">
              {" "}
              Sign in
              <UserIcon />
            </NavLink>{" "}
          </li>
          <li className={classes.navItem}>
            <NavLink className={classes.navLinks} to="/cart">
              {" "}
              <CartIcon />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
