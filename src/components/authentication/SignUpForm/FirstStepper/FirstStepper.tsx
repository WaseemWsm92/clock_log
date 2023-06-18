import { MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/style.css";
import "./FirstStepper.scss";

const FirstStepper = ({ handleNextStep }: any) => {
  // const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState(false)

  const [form] = Form.useForm();

  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const onFinish = (values: any) => {
    const formValue = { ...values, phoneNumber };
    console.log(formValue, "finish func values");
    handleNextStep();
  };
  const getErrors = ({ errorFields }: any) => {
    const isError = errorFields.find((field: any) => field.name[0] === 'phoneNumber')
    isError && setPhoneError(true)
  }

  return (
    <div className="first-step">
      {/* stepper 1 */}
      <Form name="email" onFinishFailed={getErrors} onFinish={onFinish}>
        {/* first name input */}
        <Form.Item
          name="firstname"
          rules={[
            {
              required: true,
              message: "Required field",
            },
            {
              max: 20,
              message: "The maximum length of this field is 20 characters.",
            },
            {
              pattern: /^[A-Za-z\s]*$/,
              message: "Only alphabets are allowed.",
            },
          ]}
        >
          <Input
            size="large"
            placeholder="First Name"
            prefix={<UserOutlined style={{ color: "#A5AEB5" }} className="fs-22" />}
          />
        </Form.Item>
        {/* last name input */}
        <Form.Item
          name="lastname"
          rules={[
            {
              required: true,
              message: "Required field",
            },
            {
              max: 20,
              message: "The maximum length of this field is 20 characters.",
            },
            {
              pattern: /^[A-Za-z\s]*$/,
              message: "Only alphabets are allowed.",
            },
          ]}
        >
          <Input
            size="large"
            placeholder="Last Name"
            prefix={<UserOutlined style={{ color: "#A5AEB5" }} className="fs-22" />}
          />
        </Form.Item>
        {/* email id input  */}
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "please enter valid email (e.g example@mail.com)",
            },
            {
              required: true,
              message: "Required field",
            },
            {
              validator(_, value) {
                if (value !== "admin@clocklog.co.uk") {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("This Email already exists."));
              },
            },
          ]}
        >
          <Input
            size="large"
            placeholder="Email ID"
            onChange={() => console.log(form.getFieldError('email'))}
            prefix={<MailOutlined style={{ color: "#A5AEB5" }} className="fs-22" />}
          />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          className={phoneError ? 'phone-error-input' : "phone-input"}
          rules={[
            {
              required: true,
              min: 5,
              message: "Required field",
              validator(_, value) {
                if (value.length > 4) {
                  return Promise.resolve(setPhoneError(false));
                }
                return Promise.reject(setPhoneError(true));
              },

            },
            // {
            //   min: 12,
            //   message: "The maximum length of this field is upto 12 digits.",
            // },
          ]}
        >
          <PhoneInput
            containerClass="phone-input"
            country={"pk"}
            value={phoneNumber}
            onChange={(phone: any) => setPhoneNumber(phone)}
          />
        </Form.Item>
        <div style={{ textAlign: "right", marginTop: "24px" }}>
          <Button className="step-btn fs-16 fw-500" htmlType="submit" type="primary">
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default FirstStepper;
