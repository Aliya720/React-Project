import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css";
import { CartIcon } from "../Icons/CartIcon";
import { UserIcon } from "../Icons/UserIcon";
import ProductCategory from "../ProductCategory/ProductCategory";
import SearchItem from "../SearchItem/SearchItem";
import { useState } from "react";
import { MenuCloseIcon, MenuIcon } from "../Icons/MenuIcon";
import { useAuthContext } from "../../context/AuthenticationContext";

import UserDropDown from "../UserDropDown/UserDropDown";

export const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuToggle = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  const Auth = useAuthContext();

  return (
    <>
      <nav className={classes.mainNav}>
        <label className={classes.menuToggle} onClick={menuToggle}>
          {menuIsOpen ? <MenuCloseIcon /> : <MenuIcon />}
        </label>
        <NavLink to="/" className={classes.navIcon}>
          ShopHere
        </NavLink>

        <ul className={menuIsOpen ? classes.active : classes.navItems}>
          <li className={classes.navItem}>
            {" "}
            <ProductCategory />
          </li>
          <li className={classes.navItem}>
            <SearchItem />
          </li>
          <li className={classes.navItem}>
            {!Auth?.isAuthenticated ? (
              <NavLink className={classes.navLinks} to="/signIn">
                Sign in
                <i>
                  <UserIcon />
                </i>
              </NavLink>
            ) : (
              <span>
                <UserDropDown />
              </span>
            )}
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
