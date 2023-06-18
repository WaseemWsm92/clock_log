import SignInForm from "./SignIn/SignInForm";
import { useLocation } from "react-router-dom";
import ForgotPassword from "./Forgot-Password/Forgot-Password";
import SignUpForm from "./SignUpForm/SignUpForm";
import ResetPassword from "./ResetPassword/ResetPassword";
import "./AuthFormBox.scss";

const AuthFormBox = () => {
  const location = useLocation();
  let content = null;
  if (location.pathname === "/login") {
    content = <SignInForm  />;
  } else if (location.pathname === "/forget-password") {
    content = <ForgotPassword />;
  } else if (location.pathname === "/reset-password") {
    content = <ResetPassword  />;
  } else {
    content = <SignUpForm />;
  }
  return (
    <>
      <div className="main-box">{content}</div>
    </>
  );
};
export default AuthFormBox;
