import { useState } from "react";
import { Radio, Select } from "antd";
import { Col, Row, Form } from "antd";
import Search from "antd/es/transfer/search";
import "../../../../sass/common.scss";
import "../../invite-users-modal/invite-users.scss";
import CustomScreenShotModal from "../customScreenSHots";
import CustomIdleTimeOutModal from "../CustomIdleTimeOUtModal";

const EditSetting = () => {
  ///////////************************* */
  const [isShowCustomModal, setIsShowCustomModal] = useState(false);
  const [isShowTimeOutModal, setIsShowTimeOutModal] = useState(false);
  const [userData, setUserData] = useState<any>({
    noOfscreenCast: "",
    allowMobileApp: "",
    canEditTime: "",
    blurScreenCast: "",
    delScreenCast: "",
    timeZone: "",
    showReports: "",
    idleTimeOut: "",
  });

  const userChangeHandler = (value: any, type: string) => {
    switch (type) {
      case "noOfscreenCast":
        setUserData({ ...userData, noOfscreenCast: value });
        break;
      case "allowMobileApp":
        setUserData({ ...userData, allowMobileApp: value });
        break;
      case "canEditTime":
        setUserData({ ...userData, canEditTime: value });
        break;
      case "blurScreenCast":
        setUserData({ ...userData, blurScreenCast: value });
        break;
      case "delScreenCast":
        setUserData({ ...userData, delScreenCast: value });
        break;
      case "showReports":
        setUserData({ ...userData, showReports: value });
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
    { label: "3 min - 1Screencast", value: "3 min - 1Screencast" },
    { label: "5 min - 2Screencast", value: "5 min - 2Screencast" },
    { label: "10 min - 3Screencast", value: "10 min - 3Screencast" },
    { label: "15 min - 4Screencast", value: "15 min - 4Screencast" },
    { label: "20 min - 5Screencast", value: "20 min - 5Screencast" },
    // { label: "Custom", value: "custom" },
  ];
  const userallowMobileApp = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];
  const usercanEditTime = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];
  const userblurScreenCast = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];
  const userdelScreenCast = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];
  const usershowReports = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
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
    { label: "Custom", value: "Custom" },
  ];

  ///////////************************* */

  const handleChange = (value: any) => {
    console.log(value);
  };
  return (
    <div className="invite-users">
      <div
        style={{ maxHeight: "650px", overflowY: "auto", overflowX: "hidden" }}
      >
        <Form layout="vertical">
          <Row gutter={[30, 5]}>
            <Col xl={12} xs={24} md={12} lg={12}>
              <Form.Item
                label=<label>
                  No of ScreenCast <span className="error-color">*</span>
                </label>
              >
                <>
                  <Select
                    onChange={handleChange}
                    value={
                      userData?.noOfscreenCast
                        ? userData.noOfscreenCast
                        : "Select Option"
                    }
                    style={{ maxWidth: 520, height: 40 }}
                    options={[
                      {
                        label: (
                          <>
                            <Radio.Group
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
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
                              style={{ marginLeft: "20px" }}
                              onClick={() => setIsShowCustomModal(true)}
                            >
                              Custom
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
            <Col xl={12} xs={24} md={12} lg={12}>
              <Form.Item
                label=<label>
                  Blur ScreenCast <span className="error-color">*</span>
                </label>
              >
                <Select
                  placeholder="Select Option"
                  value={
                    userData.blurScreenCast
                      ? userData.blurScreenCast
                      : "Select Option"
                  }
                  style={{ maxWidth: 520, height: 40 }}
                  onChange={handleChange}
                  options={[
                    {
                      label: (
                        <Radio.Group
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                          options={userblurScreenCast}
                          value={userData?.blurScreenCast}
                          onChange={(val) =>
                            userChangeHandler(
                              val.target.value,
                              "blurScreenCast"
                            )
                          }
                        />
                      ),
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col xl={12} xs={24} md={12} lg={12}>
              <Form.Item
                label=<label>
                  Delete ScreenCast <span className="error-color">*</span>
                </label>
              >
                <Select
                  placeholder="Select Option"
                  value={
                    userData.delScreenCast
                      ? userData.delScreenCast
                      : "Select Option"
                  }
                  style={{ maxWidth: 520, height: 40 }}
                  onChange={handleChange}
                  options={[
                    {
                      label: (
                        <Radio.Group
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                          options={userdelScreenCast}
                          value={userData?.delScreenCast}
                          onChange={(val) =>
                            userChangeHandler(val.target.value, "delScreenCast")
                          }
                        />
                      ),
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col xl={12} xs={24} md={12} lg={12}>
              <Form.Item
                label=<label>
                  Allow Mobile App <span className="error-color">*</span>
                </label>
              >
                <Select
                  placeholder="Select Option"
                  value={
                    userData?.allowMobileApp
                      ? userData.allowMobileApp
                      : "Select Option"
                  }
                  style={{ maxWidth: 520, height: 40 }}
                  onChange={handleChange}
                  options={[
                    {
                      label: (
                        <Radio.Group
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                          options={userallowMobileApp}
                          value={userData?.allowMobileApp}
                          onChange={(val) =>
                            userChangeHandler(
                              val.target.value,
                              "allowMobileApp"
                            )
                          }
                        />
                      ),
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col xl={12} xs={24} md={12} lg={12}>
              <Form.Item
                label=<label>
                  Can Edit Time <span className="error-color">*</span>
                </label>
              >
                <Select
                  placeholder="Select Option"
                  value={
                    userData.canEditTime
                      ? userData.canEditTime
                      : "Select Option"
                  }
                  style={{ maxWidth: 520, height: 40 }}
                  onChange={handleChange}
                  options={[
                    {
                      label: (
                        <Radio.Group
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                          options={usercanEditTime}
                          value={userData?.canEditTime}
                          onChange={(val) =>
                            userChangeHandler(val.target.value, "canEditTime")
                          }
                        />
                      ),
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col xl={12} xs={24} md={12} lg={12}>
              <Form.Item
                label=<label>
                  Show Reports <span className="error-color">*</span>
                </label>
              >
                <Select
                  placeholder="Select Option"
                  value={
                    userData.showReports
                      ? userData.showReports
                      : "Select Option"
                  }
                  style={{ maxWidth: 520, height: 40 }}
                  onChange={handleChange}
                  options={[
                    {
                      label: (
                        <Radio.Group
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                          options={usershowReports}
                          value={userData?.showReports}
                          onChange={(val) =>
                            userChangeHandler(val.target.value, "showReports")
                          }
                        />
                      ),
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col xl={12} xs={24} md={12} lg={12}>
              <Form.Item
                label=<label>
                  Time Zone <span className="error-color">*</span>
                </label>
              >
                <Select
                  placeholder="Select Option"
                  value={
                    userData.timeZone ? userData.timeZone : "Select Option"
                  }
                  style={{ maxWidth: 520, height: 40 }}
                  onChange={handleChange}
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
            <Col xl={12} xs={24} md={12} lg={12}>
              <Form.Item
                label=<label>
                  Idle Timeout <span className="error-color">*</span>
                </label>
              >
                <Select
                  placeholder="Select Option"
                  value={
                    userData.idleTimeOut
                      ? userData.idleTimeOut
                      : "Select Option"
                  }
                  style={{ maxWidth: 520, height: 40 }}
                  onChange={handleChange}
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
                            value={userData?.idleTimeOut}
                            onChange={(val) =>
                              userChangeHandler(val.target.value, "idleTimeOut")
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
        </Form>
      </div>
      <CustomScreenShotModal
        isShowCustomModal={isShowCustomModal}
        setIsShowCustomModal={setIsShowCustomModal}
      />
      {isShowTimeOutModal && (
        <CustomIdleTimeOutModal
          isShowTimeOutModal={isShowTimeOutModal}
          setIsShowTimeOutModal={setIsShowTimeOutModal}
        />
      )}
    </div>
  );
};

export default EditSetting;
