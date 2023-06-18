import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { MailOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./Forgot-Password.scss";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const onFinish = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      navigate("/reset-password");
      setLoading(false);
    }, 1000);
  };
  const navigateToSignIn = () => {
    navigate("/login");
  };

  return (
    <div className="forget-password-form">
      <h2 className="component-decription">Forgot Password</h2>
      <p className="forgot-password-note fs-12">
        If you forgot your password, enter your Email address below to send the link to reset your
        password.</p>
      <Form name="email" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            { type: "email", message: "please enter valid email (e.g example@mail.com)" },
            {
              required: true,
              message: "Required field",
            },
          ]}
        >
          <Input
            placeholder="Email ID"
            prefix={<MailOutlined style={{ color: "#A5AEB5" }} className="fs-22" />}
          />
        </Form.Item>
        <Button
          style={{ height: '48px', marginBottom: '3.5rem', marginTop: '1rem' }}
          type="primary"
          htmlType="submit"
          loading={loading}
          block
          className="secondary-btn height-50 fs-16 fw-500"
        >
          Send Link
        </Button>
      </Form>
      <div>
        <p style={{ textAlign: "center", marginTop: "5rem" }}>
          Back to{" "}
          <span
            style={{ color: "rgba(231, 111, 81, 1)", cursor: "pointer" }}
            onClick={navigateToSignIn}
          >
            {" "}
            Sign in{" "}
          </span>
          Page
        </p>
      </div>
    </div>
  );
};
export default ForgotPassword;
