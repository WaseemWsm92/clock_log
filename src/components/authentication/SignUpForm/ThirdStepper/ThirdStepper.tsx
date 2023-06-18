import { useState } from "react";
import { Button, Col, Form, Input, Row } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import PasswordLock from "../../../../assets/images/SignIn/password.png";
import ArrowBack from '../../../../assets/images/SignIn/arrowBack.png'
import "./ThirdStepper.scss";

const ThirdStepper = ({ handleNextStep, handlePrevStep }: any) => {
  const [validPasswordLength, setValidPasswordLength] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowerCase] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [hasNumer, hasNumber] = useState(false);

  const [form] = Form.useForm();

  function checkStringComplexity(val: string) {
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    const specialCharRegex = /[!@#$%^&*()]/;
    const numericRegex = /\d/;

    setHasUppercase(upperCaseRegex.test(val));
    setHasLowerCase(lowerCaseRegex.test(val));
    setHasSpecialChar(specialCharRegex.test(val));
    hasNumber(numericRegex.test(val));
  }

  const onValidatePassword = (e: any) => {
    let password = e.target.value;
    setValidPasswordLength(password.length >= 8);
    checkStringComplexity(password);
  };

  const onFinish = (values: any) => {
    console.log(values);
    handleNextStep();
  };

  return (
    <div className="third-stepper">
      <Form form={form} name="email" onFinish={onFinish}>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Required field",
            },
            {
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
              message: ""
            }
          ]}
        >
          <Input.Password
            onChange={onValidatePassword}
            placeholder="Password"
            prefix={<img src={PasswordLock} alt="password_icon" />}
          />
        </Form.Item>
        <div className="validation-div">
          <Row gutter={[0, 16]}>
            <Col xs={24} sm={12} lg={8}>
              <span style={{ color: validPasswordLength ? "#52C41A" : "#A5AEB5" }}>
                <CheckCircleFilled /> <span>At least 8 characters </span>
              </span>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <span style={{ color: hasUppercase ? "#52C41A" : "#A5AEB5" }}>
                <CheckCircleFilled /> <span>one upper case letter </span>
              </span>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <span style={{ color: hasLowercase ? "#52C41A" : "#A5AEB5" }}>
                <CheckCircleFilled /> <span>one lower case letter </span>
              </span>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <span style={{ color: hasSpecialChar ? "#52C41A" : "#A5AEB5" }}>
                <CheckCircleFilled /> <span>one special character </span>
              </span>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <span style={{ color: hasNumer ? "#52C41A" : "#A5AEB5" }}>
                <CheckCircleFilled /> <span>one number </span>
              </span>
            </Col>
          </Row>
        </div>
        <Form.Item
          name="confirmpassword"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Required field",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Password that you entered do not match"));
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Confirm Password"
            prefix={<img src={PasswordLock} alt="password_icon" />}
          />
        </Form.Item>
        <div
          style={{
            marginTop: '7.3rem',
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img src={ArrowBack} alt="Arrow-back" onClick={() => handlePrevStep()} />
          <Button className="step-btn fs-16 fw-500" htmlType="submit" type="primary">
            Join Clocklog
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default ThirdStepper;
