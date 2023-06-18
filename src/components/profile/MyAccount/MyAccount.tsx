import { useState } from "react";
import { Col, Modal, Row } from "antd";
import { Button, Form, Input } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import TabsSection from "../MyAccount/TabsSection";
import MyAccountForm from "./MyAccountForm";
import "react-phone-input-2/lib/style.css";
import "./MyAccount.scss";
// import { style } from "d3";

const MyAccount = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalTwoOpen, setIsModalTwoOpen] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [validPasswordLength, setValidPasswordLength] = useState(false);
  const [isPassword, setIsPassword] = useState("");
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

  const handleDeleteFinish = (values: any) => {
    console.log("values", values);
    setIsPassword(values?.password);
  };

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);
  const handleOk = () => setIsModalOpen(false);
  const showSecondModal = () => setIsModalTwoOpen(true);
  const handleSecondCancel = () => setIsModalTwoOpen(false);
  const handleSecondOk = () => setIsModalTwoOpen(true);

  return (
    <div className="my-account bgLight-color ">
      <Row
        style={{
          // backgroundColor: "rgba(255, 244, 241, 1)",
          borderRadius: "8px",
        }}
      >
        <Col xs={24} sm={24} md={10} lg={6}>
          <TabsSection
            isModalOpen={isModalOpen}
            isModalTwoOpen={isModalTwoOpen}
            showModal={() => setIsModalOpen(true)}
            showSecondModal={() => setIsModalTwoOpen(true)}
          />
        </Col>

        <Col xs={24} sm={24} md={14} lg={18}>
          <MyAccountForm />
        </Col>
      </Row>
      <Modal
        // title="Change email"
        title={<span className="title-color">Change email</span>}
        width={459}
        centered
        open={isModalOpen}
        onCancel={handleCancel}
        className="card-bg-color  modal-theme account-modal-wrapper"
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,

          <Button key="save" type="primary" onClick={handleOk}>
            Save
          </Button>,
        ]}
      >
        {/* <hr style={{color:'#E6E6E6'}}/> */}
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          autoComplete="off"
          className="form-content"
        >
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Required field",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item
            label="New Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Required field",
              },
            ]}
          >
            <Input placeholder="Email ID" />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title={<span className="title-color">Change Password</span>}
        width={464}
        centered
        open={isModalTwoOpen}
        onOk={() => {
          if (isPassword) {
            setIsModalTwoOpen(false);
          } else {
            form.submit();
          }
        }}
        onCancel={handleSecondCancel}
        className=" modal-theme account-modal-wrapper"
        footer={false}
      >
        {/* <hr /> */}
        <Form
          form={form}
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          autoComplete="off"
          className="form-content"
          onFinish={handleDeleteFinish}
        >
          <Form.Item
            label="Current Password"
            name="currentpassword"
            rules={[
              {
                required: true,
                message: "Required field",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item
            label="New Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Required field",
              },
              {
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
                message: "",
              },
            ]}
          >
            <Input.Password
              onChange={onValidatePassword}
              placeholder="Password"
            />
          </Form.Item>
          <div className="validation-div" style={{ marginBottom: "20px" }}>
            <Row gutter={[0, 10]}>
              <Col xs={24} sm={12} lg={12}>
                <span
                  style={{ color: validPasswordLength ? "#52C41A" : "#A5AEB5" }}
                >
                  <CheckCircleFilled /> <span>At least 8 characters </span>
                </span>
              </Col>
              <Col xs={24} sm={12} lg={12}>
                <span style={{ color: hasUppercase ? "#52C41A" : "#A5AEB5" }}>
                  <CheckCircleFilled /> <span>One upper case letter </span>
                </span>
              </Col>
              <Col xs={24} sm={12} lg={12}>
                <span style={{ color: hasLowercase ? "#52C41A" : "#A5AEB5" }}>
                  <CheckCircleFilled /> <span>One lower case letter </span>
                </span>
              </Col>
              <Col xs={24} sm={12} lg={12}>
                <span style={{ color: hasSpecialChar ? "#52C41A" : "#A5AEB5" }}>
                  <CheckCircleFilled /> <span>One special character</span>
                </span>
              </Col>
              <Col xs={24} sm={12} lg={12}>
                <span style={{ color: hasNumer ? "#52C41A" : "#A5AEB5" }}>
                  <CheckCircleFilled /> <span>One number </span>
                </span>
              </Col>
            </Row>
          </div>
          <Form.Item
            label="Confirm New Password"
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
                  return Promise.reject(new Error("Password doesn't match"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>
          <div className="d-flex justify-end" style={{ paddingBlock: "1rem" }}>
            <Button
              key="back"
              // className="btn-theme-color"
              onClick={handleSecondCancel}
              style={{ marginRight: "10px" }}
            >
              Cancel
            </Button>
            <Button
              key="save"
              htmlType="submit"
              type="primary"
              onClick={() => {
                if (isPassword) {
                  setIsModalTwoOpen(false);
                } else {
                  form.submit();
                }
              }}
            >
              Update
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};
export default MyAccount;
