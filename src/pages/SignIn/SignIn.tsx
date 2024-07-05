import SignInForm from "../../components/Form/SignInForm";
import classes from "./signIn.module.css";

const SignIn = () => {
  return (
    <div className={classes.signInForm}>
      <h1 className={classes.title}>Sign In</h1>
      <SignInForm />
    </div>
  );
};

export default SignIn;
