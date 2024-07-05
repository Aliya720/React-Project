import { useState } from "react";
import { useAuthContext } from "../../context/AuthenticationContext";
import classes from "./form.module.css";
import { NavLink } from "react-router-dom";
import ShowEyeIcon from "../Icons/ShowEyeIcon";
import HideEyeIcon from "../Icons/HideEyeIcon";
import axios from "axios";
import { ProductsApi } from "../../api/products.endpoints";

const SignInForm = () => {
  const AuthContext = useAuthContext();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await axios.post(ProductsApi.AuthUser, {
      username: userName,
      password: password,
    });
    console.log("data", data);
    if (data) {
      AuthContext?.signIn(data);
    }
    setMessage("Incorrect Username and Password");
  };

  return (
    <section className={classes.signInWrapper}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <p>{message}</p>
        <input
          className={classes.dataField}
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          placeholder="user Id or email"
        />
        <div className={classes.password}>
          <input
            className={classes.dataField}
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={classes.showPassword}
          >
            {showPassword ? <ShowEyeIcon /> : <HideEyeIcon />}
          </button>
        </div>
        <button type="submit" className={classes.submitBtn}>
          Sign In
        </button>
        <hr />
        <section className={classes.newUser}>
          <p>or</p>
          <p>
            New to ShopHere.
            <NavLink to="/signUp">Sign up</NavLink>
          </p>
        </section>
      </form>
    </section>
  );
};

export default SignInForm;
