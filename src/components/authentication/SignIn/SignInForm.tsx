import { useState } from "react";
import { Form, Input, Button, message, Row, Col, Checkbox } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { MailOutlined } from "@ant-design/icons";
import PasswordIcon from "../../../assets/images/SignIn/password.png";
import fblogo from "../../../assets/images/SignIn/fblogo.png";
import googlelogo from "../../../assets/images/SignIn/googlelog.png";
import { useDispatch, useSelector } from "react-redux";
import { setResetPasswordSuccess } from "../../../store/slices/authSlice";
import "./SignInForm.scss";

const SignInForm = (props: any) => {
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(false);
  let navigate = useNavigate();
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsInByb2plY3QiOiJjbG9ja2xvZyJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Bq6PcZBW0XKMjaLXesq90jwW1xaWuj-XHi6SXocTr2M";
  const successResult = useSelector((state: any) => state.auth.resetSuccess);
  const dispatch = useDispatch();
  const onFinish = (values: any) => {
    console.log("form values", values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log(successResult);

      if (successResult) {
        dispatch(setResetPasswordSuccess(false));
      }
      if (
        values.email == "admin@clocklog.co.uk" &&
        values.password == "Admin@123"
      ) {
        // just a mock object when user gets logged in.
        let userData = {
          email: values.email,
          token,
          id: "",
          role: "Admin",
        };
        let stringifyData = JSON.stringify(userData);

        message.success("Login success!");
        localStorage.setItem("UserData", stringifyData);
        navigate("/");
      } else if (
        values.email == "manager@clocklog.co.uk" &&
        values.password == "Manager@123"
      ) {
        // just a mock object when user gets logged in.
        let userData = {
          email: values.email,
          token,
          id: "",
          role: "Manager",
        };
        let stringifyData = JSON.stringify(userData);

        message.success("Login success!");
        localStorage.setItem("UserData", stringifyData);
        navigate("/");
      } else if (
        values.email == "employee@clocklog.co.uk" &&
        values.password == "Employee@123"
      ) {
        // just a mock object when user gets logged in.
        let userData = {
          email: values.email,
          token,
          id: "",
          role: "Employee",
        };
        let stringifyData = JSON.stringify(userData);

        message.success("Login success!");
        localStorage.setItem("UserData", stringifyData);

        navigate("/");
      } else {
        setLoading(false);
        setFormError(true);
      }
    }, 1000);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="sign-in-form">
      <h2 className="component-decription">Let's Sign You In</h2>
      {successResult ? (
        <p className="reset-success">
          Your Password have been reset. Please <b>Sign in</b> again.
        </p>
      ) : (
        ""
      )}
      <Form
        name="email"
        className=""
        onFinishFailed={onFinishFailed}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Required field",
            },
            {
              type: "email",
              message: "please enter valid email (e.g example@mail.com)",
            },
          ]}
        >
          <Input
            placeholder="Email ID"
            prefix={
              <MailOutlined style={{ color: "#A5AEB5" }} className="fs-22" />
            }
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Required field",
            },
          ]}
        >
          <Input.Password
            placeholder="Password"
            prefix={
              <img src={PasswordIcon} alt="password" />
              // <LockOutlined style={{ color: "#A5AEB5" }} className="fs-22" />
            }
          />
        </Form.Item>
        <p className="error-color ">
          {formError ? "Email or password is incorrect" : null}
        </p>
        <div className="remember-me">
          <Form.Item name="rememberMe" valuePropName="checked">
            <Checkbox>Remember Me</Checkbox>
          </Form.Item>
          <Link className="forgot-password" to="/forget-password">
            Forgot Password?
          </Link>
        </div>
        <Form.Item>
          <Button
            style={{ height: "48px" }}
            type="primary"
            htmlType="submit"
            loading={loading}
            className="secondary-btn height-50 fs-16 fw-500"
            block
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
      <Row style={{ marginTop: "13px", color: "rgba(165, 174, 181, 1)" }}>
        <Col span={11}>
          <hr />
        </Col>
        <Col span={2} style={{ textAlign: "center", color: "#A5AEB5" }}>
          Or
        </Col>
        <Col span={11}>
          <hr />
        </Col>
      </Row>
      <div style={{ textAlign: "center" }}>
        <div className="icons">
          <img className="logo-image1" src={fblogo} alt="facebook_icon" />
          <img className="logo-image2" src={googlelogo} alt="google_icon" />
        </div>
        <p>
          Don't have an account? &nbsp;
          <span>
            <Link
              style={{ color: "rgba(231, 111, 81, 1)", cursor: "pointer" }}
              to="/sign-up"
            >
              Sign Up
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};
export default SignInForm;
