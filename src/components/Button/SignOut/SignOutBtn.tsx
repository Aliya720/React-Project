import { useAuthContext } from "../../../context/AuthenticationContext";
import classes from "./signOut.module.css";

const SignOutBtn = () => {
  const Auth = useAuthContext();
  const handleClick = () => {
    Auth?.signOut();
  };
  return (
    <button onClick={handleClick} className={classes.signOutBtn}>
      {" "}
      Sign Out
    </button>
  );
};

export default SignOutBtn;
