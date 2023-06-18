import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { Button, Form, Input } from "antd";
import { Col, Radio, Row, Select, Switch, RadioChangeEvent } from "antd";
import { TwoFactorAuth, ConfirmationCode } from "./modals/twoFactorAuth/TwoFactorAuth";
import SaveFormModal from "../MyAccount/modals/saveFormModal/SaveFormModal";
import "./MyAccount.scss";
import Search from "antd/es/input/Search";

const userDepartment = [
  { label: "Design", value: "Design" },
  { label: "Business Analysis", value: "Business Analysis" },
  { label: "Accounts", value: "Accounts" },
];
const userDesignation = [
  { label: "UI Design", value: "UI Design" },
  { label: "Mid BA", value: "Mid BA" },
  { label: "Mid Designer", value: "Mid Designer" },
];
const userShift = [
  { label: "Morning", value: "Morning" },
  { label: "Evening", value: "Evening" },
  { label: "Night", value: "Night" },
];
const usertimeZone = [
  {
    label: "(UTC+05:00) Islamabad, Karachi",
    value: "(UTC+05:00) Islamabad, Karachi",
  },
  { label: "(UTC+04:30) Kabul", value: "(UTC+04:30) Kabul" },
  { label: "(UTC+04:00) Yerevan", value: "(UTC+04:00) Yerevan" },
];

const MyAccountForm = () => {
  const [getPhone, setPhone] = useState<any>();
  const [isTwoFactorAuth, setISTwoFactorAuth] = useState(false);
  const [isCodeConfirmation, setIsCodeConfirmation] = useState(false);
  const [saveForm, setSaveForm] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [value, setValue] = useState(1);
  const [userData, setUserData] = useState<any>({
    role: "",
    department: "",
    designation: "",
    shift: "",
    usertimeZone: "",
    isDetected: false
  });

  const userChangeHandler = (value: any, type: string) => {
    switch (type) {
      case "role":
        setUserData({ ...userData, role: value });
        break;
      case "department":
        setUserData({ ...userData, department: value });
        break;
      case "designation":
        setUserData({ ...userData, designation: value });
        break;
      case "shift":
        setUserData({ ...userData, shift: value });
        break;
      case "timeZone":
        setUserData({ ...userData, timeZone: value, isDetected: true });
        break;
      default:
        break;
    }
  };

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const handleVerificationStatus = () => {
    if (isVerified) {
      setIsVerified(false);
      setIsCodeConfirmation(false);
      setISTwoFactorAuth(false);
    } else {
      setISTwoFactorAuth(true);
    }
  };

  return (
    <>
      <div
        style={{
          marginRight: "10px",
          boxShadow: "0px 0px 6px rgba(16, 24, 40, 0.1)",
          borderRadius: "8px",
          minHeight: "75vh",
          padding: "20px",
        }}
        className="my-account-form-styles account-form-wrapper card-bg-color"
      >
        <Form name="basic" layout="vertical" initialValues={{ remember: true }} autoComplete="off">
          <Row gutter={[30, 0]}>
            <Col sm={24} xs={24} md={24} lg={12} xl={8}>
              <Form.Item
                label="Full Name"
                name="fullname"
                className="themeTitle-color"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              // style={{ padding: "0px 20px" }}
              >
                <Input className="my-account-input" placeholder="Full name" />
              </Form.Item>
            </Col>
            <Col sm={24} xs={24} md={24} lg={12} xl={8}>
              <Form.Item label="Role" name="role" className="title-color">
                <Input className="my-account-input" placeholder="Role" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[30, 0]}>
            <Col sm={24} xs={24} md={24} lg={12} xl={8}>
              <Form.Item label="Phone Number" name="phoneNumber">
                <PhoneInput
                  containerClass="phone-input-style"
                  inputClass="phone-input-style"
                  country={"pk"}
                  value={getPhone}
                  onChange={(phone) => setPhone(phone)}
                  placeholder="Phone number"
                />
              </Form.Item>
            </Col>
            <Col sm={24} xs={24} md={24} lg={12} xl={8}>
              <Form.Item
                label="Department"
                name="department"
                rules={[
                  {
                    required: false,
                    message: "Required Field",
                  },
                ]}
              >
                <>
                  <Select
                    className="profile--input-style select-input-theme"
                    value={userData?.department ? userData.department : "Select department"}
                    onChange={handleChange}
                    popupClassName="select-theme"
                    options={[
                      {
                        label: (
                          <Radio.Group
                            rootClassName="custom-radio-btn"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "16px",
                            }}
                            options={userDepartment}
                            value={userData?.department}
                            onChange={(val) => userChangeHandler(val.target.value, "department")}
                          />
                        ),
                      },
                    ]}
                  />
                </>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[30, 0]}>
            <Col sm={24} xs={24} md={24} lg={12} xl={8}>
              <Form.Item label="Shift" name="shift" rules={[{ required: false, message: "Required Field" }]}>
                <>
                  <Select
                    className="profile--input-style select-input-theme"
                    value={userData.shift ? userData.shift : "Select shift"}
                    onChange={handleChange}
                    popupClassName="select-theme"
                    options={[
                      {
                        label: (
                          <Radio.Group
                            rootClassName="custom-radio-btn"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "16px",
                            }}
                            options={userShift}
                            value={userData?.shift}
                            onChange={(val) => userChangeHandler(val.target.value, "shift")}
                          />
                        ),
                      },
                    ]}
                  />
                </>
              </Form.Item>
            </Col>
            <Col sm={24} xs={24} md={24} lg={12} xl={8}>
              <Form.Item
                label="Designation"
                name="designation"
                rules={[
                  {
                    required: false,
                    message: "Required Field",
                  },
                ]}
              >
                <>
                  <Select
                    className="profile--input-style select-input-theme"
                    value={userData.designation ? userData.designation : "Select designation"}
                    onChange={handleChange}
                    popupClassName="select-theme"
                    options={[
                      {
                        label: (
                          <Radio.Group
                            rootClassName="custom-radio-btn"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "16px",
                            }}
                            options={userDesignation}
                            value={userData?.designation}
                            onChange={(val) => userChangeHandler(val.target.value, "designation")}
                          />
                        ),
                      },
                    ]}
                  />
                </>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[30, 0]}>
            <Col sm={24} xs={24} md={24} lg={12} xl={8}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input className="my-account-input" placeholder="email" />
              </Form.Item>
            </Col>
            <Col sm={24} xs={24} md={24} lg={12} xl={8}>
              <Form.Item
                label="Time Zone"
                name="timezone"
                rules={[
                  {
                    required: true,
                    message: "Please input your timezone!",
                  },
                ]}
              >
                <div
                  className="timezone-div timezone-myaccount"
                  style={{
                    border: "1px solid #E6E6E6",
                    borderRadius: "2px",
                    position: "relative",
                  }}
                >
                  <Select
                    className="profile--input-style select-input-theme"
                    placeholder="Select Option"
                    popupClassName="select-theme"
                    value={userData.timeZone ? userData.timeZone : "Select time zone"}
                    onChange={handleChange}
                    options={[
                      {
                        label: (
                          <>
                            <Search />
                            <Radio.Group
                              rootClassName="custom-radio-btn"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                marginTop: "15px",
                              }}
                              options={usertimeZone}
                              value={userData?.timeZone}
                              onChange={(val) => userChangeHandler(val.target.value, "timeZone")}
                            />
                          </>
                        ),
                      },
                    ]}
                  />
                  <span
                    style={{
                      backgroundColor: `${userData.isDetected ? "#2A9D8F" : "#E76F51"}`,
                      borderRadius: "2px",
                      color: "#FFFFFF",
                      padding: "2px 12px",
                      height: "26px",
                      marginTop: "5px",
                      marginRight: "5px",
                    }}
                  >
                    {userData.isDetected ? "Detected" : "Detect"}
                  </span>
                </div>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[30, 0]}>
            <Col sm={24} xs={24} md={24} lg={12} xl={8}>
              <div>
                <h2 className="fs-16 title-color select-label-color" style={{ marginBottom: "8px" }}>
                  Time format
                </h2>
                <Radio.Group rootClassName="custom-radio-btn" onChange={onChange} value={value}>
                  <Radio rootClassName="custom-radio-btn" value={1} className="grey-color">
                    12 Hour
                  </Radio>
                  <Radio value={2} className="grey-color" rootClassName="custom-radio-btn">
                    24 Hour
                  </Radio>
                </Radio.Group>
              </div>
            </Col>
            <Col sm={24} xs={24} md={24} lg={12} xl={8}>
              <div>
                <h2 className="fs-16 title-color select-label-color" style={{ marginBottom: "0px" }}>
                  Mobile App Tracking
                </h2>
                <p className="grey-color  fs-14 m-0">You are allowed to track time through mobile app</p>
              </div>
            </Col>
          </Row>
          <div style={{ margin: "26px 0px" }}>
            <Switch onClick={handleVerificationStatus} rootClassName="theme-checkbox" checked={isVerified} size="small" />
            <span className="grey-color fs-14 fw-400"> Two Factor Authentication</span>
          </div>
          <div style={{ marginTop: "32px" }}>
            <Button
              type="primary"
              className="secondary-btn"
              // loading={loading}
              onClick={() => setSaveForm(true)}
            >
              Save
            </Button>
          </div>
        </Form>
      </div>
      {isTwoFactorAuth && (
        <TwoFactorAuth
          isTwoFactorAuth={isTwoFactorAuth}
          setISTwoFactorAuth={setISTwoFactorAuth}
          isCodeConfirmation={isCodeConfirmation}
          setIsCodeConfirmation={setIsCodeConfirmation}
        />
      )}
      {isCodeConfirmation && (
        <ConfirmationCode isCodeConfirmation={isCodeConfirmation} setIsCodeConfirmation={setIsCodeConfirmation} setIsVerified={setIsVerified} />
      )}
      {saveForm && <SaveFormModal saveForm={saveForm} setSaveForm={setSaveForm} />}
    </>
  );
};
export default MyAccountForm;
