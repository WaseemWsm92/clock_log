import { useState } from "react";
import { Radio, Select } from "antd";
import { Col, Row, Form } from "antd";
import "../../../../sass/common.scss";
import "../../invite-users-modal/invite-users.scss";

const EditInfo = () => {
  ///////////************************* */
  const [userData, setUserData] = useState<any>({
    role: "",
    department: "",
    designation: "",
    shift: "",
    location: "",
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
      case "location":
        setUserData({ ...userData, location: value });
        break;
      default:
        break;
    }
  };
  ///////////************************* */

  const userRole = [
    { label: "Admin", value: "Admin" },
    { label: "Manager", value: "Manager" },
    { label: "Employee", value: "Employe" },
  ];
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
  const userLocation = [
    { label: "Lahore", value: "Lahore" },
    { label: "Islamabad", value: "Islamabad" },
    { label: "Rawalpindi", value: "Rawalpindi" },
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
                  User Role <span className="error-color">*</span>
                </label>
              >
                <>
                  <Select
                    onChange={handleChange}
                    value={userData?.role ? userData.role : "User Role"}
                    style={{ maxWidth: 520, height: 40 }}
                    options={[
                      {
                        label: (
                          <Radio.Group
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                            options={userRole}
                            value={userData?.role}
                            onChange={(val) =>
                              userChangeHandler(val.target.value, "role")
                            }
                          />
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
                  Shift <span className="error-color">*</span>
                </label>
              >
                <Select
                  value={userData.shift ? userData.shift : "Select Shift"}
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
                          options={userShift}
                          value={userData?.shift}
                          onChange={(val) =>
                            userChangeHandler(val.target.value, "shift")
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
                  Location <span className="error-color">*</span>
                </label>
              >
                <Select
                  value={userData.location ? userData.location : "Location"}
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
                          options={userLocation}
                          value={userData?.location}
                          onChange={(val) =>
                            userChangeHandler(val.target.value, "location")
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
                  Department <span className="error-color">*</span>
                </label>
              >
                <Select
                  value={
                    userData?.department ? userData.department : "Department"
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
                          options={userDepartment}
                          value={userData?.department}
                          onChange={(val) =>
                            userChangeHandler(val.target.value, "department")
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
                  Designation <span className="error-color">*</span>
                </label>
              >
                <Select
                  value={
                    userData.designation
                      ? userData.designation
                      : "Select Designation"
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
                          options={userDesignation}
                          value={userData?.designation}
                          onChange={(val) =>
                            userChangeHandler(val.target.value, "designation")
                          }
                        />
                      ),
                    },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default EditInfo;
