import { useState } from "react";
import { Link } from "react-router-dom";
import { Steps, Button, Row, Col } from "antd";
import { v4 as uuidv4 } from "uuid";
import fblogo from "../../../assets/images/SignIn/fblogo.png";
import googlelogo from "../../../assets/images/SignIn/googlelog.png";
import ConfirmedPassword from "../confirmed-password/ConfirmedPassword";
import FirstStepper from "./FirstStepper/FirstStepper";
import SecondStepper from "./SecondStepper/SecondStepper";
import ThirdStepper from "./ThirdStepper/ThirdStepper";
import LastStepper from "./LastStepper/LastStepper";
import "./SignUpForm.scss";

const SignUpForm = () => {
  const [current, setCurrent] = useState(0);
  const [isResetAccount, setIsResetAccount] = useState(false);

  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);

  const steps = [
    {
      title: "",
      content: <FirstStepper handleNextStep={next} />,
      description: "Enter Your Personal Information",
    },
    {
      title: "",
      content: <SecondStepper handleNextStep={next} handlePrevStep={prev} />,
      description: "Enter Your Company Information",
    },
    {
      title: "",
      content: <ThirdStepper handleNextStep={next} handlePrevStep={prev} />,
      description: "Set Your Password",
    },
    {
      title: "",
      content: <LastStepper />,
      description: "Verify Your Email",
    },
  ];

  return (
    <>
      {!isResetAccount ? (
        <div className="sign-up-form">
          <h2 className="component-decription">Registration Process</h2>
          <h2 className="heading">{steps[current].description}</h2>
          <div className="custom-stepper">
            <Steps type="inline" responsive current={current}>
              {steps.map((item) => (
                <Steps.Step key={uuidv4()} />
              ))}
            </Steps>
          </div>
          <div>{steps[current].content}</div>

          <div style={{ textAlign: "center" }}>
            {current === steps.length - 1 && (
              <Button
                className="resend-btn"
                type="primary"
                style={{ borderColor: "none" }}
                onClick={() => setIsResetAccount(true)}
              >
                Resend Email
              </Button>
            )}
          </div>
          <Row style={{ marginTop: "13px", color: "rgba(165, 174, 181, 1)" }}>
            <Col span={11}>
              <hr />
            </Col>
            <Col span={2} style={{ textAlign: "center" }}>
              Or
            </Col>
            <Col span={11}>
              <hr />
            </Col>
          </Row>
          <div style={{ textAlign: "center" }}>
            <div className="icons">
              <img className="logo-image1" src={fblogo}  alt="facebook"/>
              <img className="logo-image2" src={googlelogo} alt="google" />
            </div>
            <p>
              Already have an account? &nbsp;
              <span>
                <Link
                  style={{ color: "rgba(231, 111, 81, 1)", cursor: "pointer" }}
                  to="/login"
                >
                  Sign In
                </Link>
              </span>
            </p>
          </div>
        </div>
      ) : (
        <ConfirmedPassword />
      )}
    </>
  );
};
export default SignUpForm;
