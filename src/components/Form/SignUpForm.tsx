import { NavLink } from "react-router-dom";
import classes from "./form.module.css";
import { useState } from "react";
import ShowEyeIcon from "../Icons/ShowEyeIcon";
import HideEyeIcon from "../Icons/HideEyeIcon";
import { regex } from "../../constants/regex";

const SignUpForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!regex.Password.test(password)) {
      setMessage("Password is Weak");
    }

    if (!regex.Email.test(email)) {
      setMessage("Invalid Email");
    }

    if (password !== confirmPassword) {
      setMessage("Password does not match");
    }

    if (firstName == "") {
      setMessage("First Name Required");
    }

    if (secondName == "") {
      setMessage("Second Name Required");
    }

    if (userName == "") {
      setMessage("Username Required");
    }
  };

  return (
    <section className={classes.signUpWrapper}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <p>{message}</p>
        <div className={classes.userName}>
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            className={classes.dataField}
          />
          <input
            type="text"
            placeholder="Second Name"
            onChange={(e) => setSecondName(e.target.value)}
            className={classes.dataField}
          />
        </div>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
          className={classes.dataField}
        />
        <input
          type="email"
          placeholder="Email"
          className={classes.dataField}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className={classes.password}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create password"
            onChange={(e) => setPassword(e.target.value)}
            className={classes.dataField}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={classes.showPassword}
          >
            {showPassword ? <ShowEyeIcon /> : <HideEyeIcon />}
          </button>
        </div>
        <div className={classes.password}>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={classes.dataField}
          />{" "}
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className={classes.showPassword}
          >
            {showConfirmPassword ? <ShowEyeIcon /> : <HideEyeIcon />}
          </button>
        </div>
        <button type="submit" className={classes.submitBtn}>
          Sign Up
        </button>

        <section className={classes.newUser}>
          <p>or</p>
          <p>
            Already User.
            <NavLink to="/signIn">Sign In</NavLink>
          </p>
        </section>
      </form>
    </section>
  );
};

export default SignUpForm;
