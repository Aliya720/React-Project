import SignUpForm from "../../components/Form/SignUpForm";
import classes from "./signUp.module.css";

const SignUp = () => {
  return (
    <div className={classes.signUpForm}>
      <h1 className={classes.title}>Sign Up</h1>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
