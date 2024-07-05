import { useState } from "react";
import SignOutBtn from "../Button/SignOut/SignOutBtn";
import classes from "./userDropDown.module.css";
import { ChevronDownIcon } from "../Icons/ChevronDownIcon";
import { useAuthContext } from "../../context/AuthenticationContext";
import PackageIcon from "../Icons/PackageIcon";
import HeartIcon from "../Icons/HeartIcon";
import LogOutIcon from "../Icons/LogOutIcon";
import UserCircleIcon from "../Icons/UserCircleIcon";

const UserDropDown = () => {
  const [showCheckbox, setShowCheckbox] = useState(false);
  const Auth = useAuthContext();
  const IsChecked = () => {
    setShowCheckbox(!showCheckbox);
  };
  return (
    <>
      <label className={classes.dropdownLabel} onClick={IsChecked}>
        <img
          src={Auth?.user?.image}
          alt="user Image"
          className={classes.userImage}
        />
        {Auth?.user?.firstName}{" "}
        <i>
          <ChevronDownIcon />
        </i>
      </label>
      <div
        className={`${classes.dropdownList} ${
          showCheckbox ? classes.show : ""
        }`}
      >
        <section>
          <div className={classes.userData}>
            {" "}
            <img
              src={Auth?.user?.image}
              alt="user Image"
              className={classes.userImage}
            />{" "}
            <p>
              {Auth?.user?.firstName} {Auth?.user?.lastName} <br />
              {Auth?.user?.email}
            </p>
          </div>
          <hr />
          <div>
            <p className={classes.otherOptions}>
              <i>
                <UserCircleIcon />
              </i>{" "}
              My Profile
            </p>
            <p className={classes.otherOptions}>
              <i>
                <PackageIcon />
              </i>{" "}
              My Orders
            </p>
            <p className={classes.otherOptions}>
              <i>
                <HeartIcon />
              </i>{" "}
              My Wishlist
            </p>
            <p className={classes.otherOptions}>
              {" "}
              <i>
                <LogOutIcon />
              </i>
              <SignOutBtn />
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default UserDropDown;
