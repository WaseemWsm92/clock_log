import {Button } from "antd";
import {useNavigate } from "react-router-dom";
import { useState } from "react";
import verifyMail from "../../../assets/images/SignIn/verifyemail.png";
import "./confirmAccount.scss";

const ConfirmedPassword = () => {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  // const onFinish = (values: any) => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     navigate("/reset-password");
  //     setLoading(false);
  //   }, 1000);
  // };
  const navigateToSignIn = () => {
    navigate("/login");
  };

  return (
    <div className="confirm-account">
      <div >
        {/* <div className="mailImageDiv" style={{position:"relative"}}> */}
          <img src={verifyMail} alt="verifyMailIcon"  />
          {/* <img src={MailGIF} alt="mail" className="gifImg" style={{position:'absolute',height:'20px',right:'16.89rem',top:'3px'}}/> */}
        {/* </div> */}
        <h4 className="owner-name">Hello John!</h4>
        <h4 className="account-status">Thanks for registering your account. Your account is now activated.</h4>
        <p className="account-note">We are happy to have you here. Start exploring ClockLog by signing in from the link given below.</p>
        <Button
          className="sign-in-btn"
          type="primary"
          style={{ borderColor: "none",marginTop:'5rem',paddingInline:'2.5rem' }}
          onClick={() => navigate("/login", { state: { accountStatus: "activated" } })}
        >
          Sign in
        </Button>
      </div>
      <div>
        <p style={{ textAlign: "center", marginTop: "6rem" }}>
         Thanks for choosing 
          <span className="fs-14 fw-700" style={{ color: "rgba(231, 111, 81, 1)", cursor: "pointer" }} onClick={navigateToSignIn}>
            {" "}
           ClockLog{" "}
          </span>
        </p>
      </div>
    </div>
  );
};
export default ConfirmedPassword;
