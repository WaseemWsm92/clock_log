import { useState } from "react";
import { Button, Col, Form, Radio, Row, Select, Space, Switch } from "antd";
import UserImg from "../../../../assets/images/users/user-1.svg";
import Search from "antd/es/transfer/search";
import CustomScreenShotModal from "../../Modals/customScreenSHots";
import CustomIdleTimeOutModal from "../../Modals/CustomIdleTimeOUtModal";
import "../../../../sass/common.scss";
import "./editUsers.scss";
interface Props {
  setIsEditPage: any;
}
const UsersSetting = (props: Props) => {
  const { setIsEditPage } = props;
  const [isSwitchTrue, setIsSwitchTrue] = useState<boolean>();
  const [isShowCustomModal, setIsShowCustomModal] = useState(false);
  const [isShowTimeOutModal, setIsShowTimeOutModal] = useState(false);

  const [userData, setUserData] = useState<any>({
    noOfscreenCast: "",
    timeZone: "",
    idleTimeOut: "",
  });
  const userChangeHandler = (value: any, type: string) => {
    switch (type) {
      case "noOfscreenCast":
        setUserData({ ...userData, noOfscreenCast: value });
        break;
      case "timeZone":
        setUserData({ ...userData, timeZone: value });
        break;
      case "idleTimeOut":
        setUserData({ ...userData, idleTimeOut: value });
        break;
      default:
        break;
    }
  };
  ///////////************************* */

  const usernoOfscreenCast = [
    { label: "3 min - 1 Screencast", value: "3 min - 1 Screencast" },
    { label: "5 min - 2 Screencast", value: "5 min - 2 Screencast" },
    { label: "10 min - 3 Screencast", value: "10 min - 3 Screencast" },
    { label: "15 min - 4 Screencast", value: "15 min - 4 Screencast" },
    { label: "20 min - 5 Screencast", value: "20 min - 5 Screencast" },
  ];
  const usertimeZone = [
    {
      label: "(UTC+05:00) Islamabad, Karachi",
      value: "(UTC+05:00) Islamabad, Karachi",
    },
    { label: "(UTC+04:30) Kabul", value: "(UTC+04:30) Kabul" },
    { label: "(UTC+04:00) Yerevan", value: "(UTC+04:00) Yerevan" },
  ];
  const userIdleTime = [
    { label: "5 Min", value: "5 Min" },
    { label: "10 Min", value: "10 Min" },
    { label: "15 Min", value: "15 Min" },
    { label: "20 Min", value: "20 Min" },
    { label: "25 Min", value: "25 Min" },
    { label: "30 Min", value: "30 Min" },
  ];
  const onChange = (checked: boolean) => {
    setIsSwitchTrue(checked);
  };
  const switches = [
    { id: 1, name: "Edit Time", isSwitchToggle: false },
    { id: 2, name: "Show in Reports", isSwitchToggle: false },
    { id: 3, name: "Blur Screencast", isSwitchToggle: true },
    { id: 4, name: "Delete Screencast", isSwitchToggle: true },
    { id: 5, name: "Allow Mobile App", isSwitchToggle: true },
  ];
  const handleChange = (value: any) => {
    console.log(value);
  };

  return (
    <div className="edit-users-main">
      <Row>
        <Col xs={24} md={6}>
          <Space align="start" style={{marginTop:"12px"}}>
            <img src={UserImg} alt="userImg" width={30} />
            <div className="setting-user">
            <p className="m-0 fs-16 line-height-18 fw-400 light-black-color">
                Azeem Aslam
              </p>
              <p
                className="m-0 fs-12 fw-500 line-height-18"
                style={{ marginBottom: "10px", color: "#848588" }}
              >
                azeem.aslam@ceative.co.uk
              </p>
            </div>
          </Space>
          <div className="checkboxes">
            {switches.map((e) => {
              return (
                <div className="check">
                  <Switch
                    defaultChecked={e.isSwitchToggle}
                    size="small"
                    onChange={onChange}
                  />
                  <label
                    className={`fs-14 title-color ${
                      isSwitchTrue ? "true" : "false"
                    }`}
                  >
                    {e.name}
                  </label>
                </div>
              );
            })}
          </div>
          <Form layout="vertical">
            <Row gutter={[30, 5]}>
              <Col xs={24}>
              <Form.Item style={{marginBottom:"20px",marginTop:"8px"}}
                  label={<label className="asterisk fs-14 fw-400 line-height-20 " style={{ color: "var(--grey-color)" }}>No of ScreenCast</label>}
                >
                  <>
                    <Select
                      onChange={handleChange}
                      value={
                        userData?.noOfscreenCast
                          ? userData.noOfscreenCast
                          : "Select Option"
                      }
                      style={{ maxWidth: 395, height: 37 }}
                      className="select-input-theme"
                      popupClassName="select-theme"
                      options={[
                        {
                          label: (
                            <>
                              <Radio.Group
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                                className="custom-radio-btn"
                                options={usernoOfscreenCast}
                                value={userData?.noOfscreenCast}
                                onChange={(val) =>
                                  userChangeHandler(
                                    val.target.value,
                                    "noOfscreenCast"
                                  )
                                }
                              />
                              <span
                                // style={{ marginLeft: "20px" }}
                                onClick={() => setIsShowCustomModal(true)}
                              >
                              <Radio className="custom-radio-btn">Custom</Radio> 
                              </span>
                            </>
                          ),
                          key: "0",
                        },
                      ]}
                    />
                  </>
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item
                  label={<label style={{ color: "var(--grey-color)"}}>
                  Time Zone <span className="error-color">*</span>
                </label>}
                >
                  <Select
                    placeholder="Select Option"
                    value={
                      userData.timeZone ? userData.timeZone : "Select Option"
                    }
                    style={{ maxWidth: 395, height: 37 }}
                    onChange={handleChange}
                    className="select-input-theme"
                    popupClassName="select-theme"
                    options={[
                      {
                        label: (
                          <>
                            <Search />
                            <Radio.Group
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                marginTop: "15px",
                              }}
                              options={usertimeZone}
                              className="custom-radio-btn"
                              value={userData?.timeZone}
                              onChange={(val) =>
                                userChangeHandler(val.target.value, "timeZone")
                              }
                            />
                          </>
                        ),
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col xs={24}>
              <Form.Item style={{marginBottom:"20px"}}
                  label={<label className="asterisk fs-14 fw-400 line-height-20" style={{ color: "var(--grey-color)"}}>Idle Timeout</label>}
                >
                  <Select
                    placeholder="Select Option"
                    value={
                      userData.idleTimeOut
                        ? userData.idleTimeOut
                        : "Select Option"
                    }
                    style={{ maxWidth: 395, height: 37 }}
                    onChange={handleChange}
                    className="select-input-theme"
                    popupClassName="select-theme"
                    options={[
                      {
                        label: (
                          <>
                            <Radio.Group
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                              options={userIdleTime}
                              className="custom-radio-btn"
                              value={userData?.idleTimeOut}
                              onChange={(val) =>
                                userChangeHandler(
                                  val.target.value,
                                  "idleTimeOut"
                                )
                              }
                            />
                            <span
                              style={{ marginLeft: "20px" }}
                              onClick={() => setIsShowTimeOutModal(true)}
                            >
                              Custom
                            </span>
                          </>
                        ),
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Space style={{ marginTop: "20px" }}>
              <Button
                className="btn-cancel"
                onClick={() => setIsEditPage(false)}
              >
                Cancel
              </Button>
              <Button className="bg-extra-dull fs-16 fw-500 line-height-24 text-white border-radius-6 update-btn">Update</Button>
            </Space>
          </Form>
        </Col>
      </Row>
      <CustomScreenShotModal
        isShowCustomModal={isShowCustomModal}
        setIsShowCustomModal={setIsShowCustomModal}
      />
      <CustomIdleTimeOutModal
        isShowTimeOutModal={isShowTimeOutModal}
        setIsShowTimeOutModal={setIsShowTimeOutModal}
      />
    </div>
  );
};

export default UsersSetting;
